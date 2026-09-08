"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { t } = useLanguage();
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  const fieldError = (field) => {
    const value = values[field].trim();
    if (field === "email") {
      if (!value) return t("contact.form.fieldRequired");
      if (!EMAIL_RE.test(value)) return t("contact.form.emailInvalid");
      return null;
    }
    if (field === "name" || field === "message") {
      return value ? null : t("contact.form.fieldRequired");
    }
    return null;
  };

  const errors = {
    name: fieldError("name"),
    email: fieldError("email"),
    message: fieldError("message"),
  };
  const isValid = !errors.name && !errors.email && !errors.message;

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (!isValid) return;

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
      setTouched({});
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

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none focus:ring-2 transition-shadow ${
      touched[field] && errors[field]
        ? "border-red-400 focus:ring-red-300"
        : "border-cream-300 focus:ring-clay-400"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={t("contact.form.namePlaceholder")}
            aria-invalid={touched.name && !!errors.name}
            className={fieldClass("name")}
          />
          {touched.name && errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
        </div>
        <input
          type="tel"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          placeholder={t("contact.form.phonePlaceholder")}
          className={fieldClass("phone")}
        />
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={t("contact.form.emailPlaceholder")}
          aria-invalid={touched.email && !!errors.email}
          className={fieldClass("email")}
        />
        {touched.email && errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
      </div>

      <div>
        <textarea
          name="message"
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={t("contact.form.messagePlaceholder")}
          rows={4}
          aria-invalid={touched.message && !!errors.message}
          className={`${fieldClass("message")} resize-none`}
        />
        {touched.message && errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

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
