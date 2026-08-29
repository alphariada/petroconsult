"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t("contact.form.errorGeneric"));
      setStatus("sent");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-cream-200 border border-cream-300 p-8 text-center">
        <h3 className="font-display font-bold text-xl text-navy-800 mb-2">{t("contact.form.sentTitle")}</h3>
        <p className="text-charcoal-600">{t("contact.form.sentText")}</p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 focus:ring-clay-400 transition-shadow";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder={t("contact.form.namePlaceholder")}
          required
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder={t("contact.form.phonePlaceholder")}
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder={t("contact.form.emailPlaceholder")}
        required
        className={inputClass}
      />
      <textarea
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder={t("contact.form.messagePlaceholder")}
        required
        rows={4}
        className={`${inputClass} resize-none`}
      />

      {status === "error" && <p className="text-sm text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center rounded-full bg-clay-500 hover:bg-clay-600 disabled:opacity-60 transition-colors px-7 py-3.5 font-semibold text-white"
      >
        {status === "sending" ? t("contact.form.sending") : t("contact.form.sendBtn")}
      </button>
    </form>
  );
}
