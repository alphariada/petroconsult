import { Resend } from "resend";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

const TO_EMAIL = process.env.CONTACT_EMAIL || siteConfig.email;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Petroconsult Website <onboarding@resend.dev>";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Completează numele, email-ul și mesajul." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Adresa de email nu este validă." }, { status: 400 });
  }
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Formularul nu este configurat încă (lipsește cheia Resend)." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Mesaj nou de la ${name} — site Petroconsult`,
      text: `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone || "-"}\n\nMesaj:\n${message}`,
    });
    if (error) {
      return NextResponse.json({ error: "Mesajul nu a putut fi trimis." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Mesajul nu a putut fi trimis." }, { status: 500 });
  }
}
