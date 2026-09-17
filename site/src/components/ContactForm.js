"use client";
import { useState } from "react";
import Icon from "./Icon";
import { whatsappLink } from "@/lib/site";

// No backend: the form composes a message and opens WhatsApp with it.
export default function ContactForm({ form }) {
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (k) => String(data.get(k) || "").trim();
    if (!value("name") || !value("country")) {
      setError(form.required);
      return;
    }
    setError("");
    const lines = [form.intro, "", `${form.name}: ${value("name")}`];
    if (value("company")) lines.push(`${form.company}: ${value("company")}`);
    lines.push(`${form.country}: ${value("country")}`);
    if (value("interest")) lines.push(`${form.interest}: ${value("interest")}`);
    if (value("volume")) lines.push(`${form.volume}: ${value("volume")}`);
    if (value("message")) lines.push("", value("message"));
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener");
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="cf-name">{form.name} *</label>
        <input id="cf-name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-company">{form.company}</label>
        <input id="cf-company" name="company" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="cf-country">{form.country} *</label>
        <input id="cf-country" name="country" autoComplete="country-name" required />
      </div>
      <div className="field">
        <label htmlFor="cf-interest">{form.interest}</label>
        <select id="cf-interest" name="interest" defaultValue="">
          <option value="">—</option>
          {form.interestOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="cf-volume">{form.volume}</label>
        <select id="cf-volume" name="volume" defaultValue="">
          <option value="">—</option>
          {form.volumeOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <div className="field field--full">
        <label htmlFor="cf-message">{form.message}</label>
        <textarea id="cf-message" name="message" rows={5} />
      </div>
      {error && (
        <p className="form-error field--full" role="alert">
          {error}
        </p>
      )}
      <div className="field--full contact-form__actions">
        <button type="submit" className="btn btn--whatsapp btn--lg">
          <Icon name="whatsapp" size={20} /> {form.submit}
        </button>
        <p className="form-hint">{form.hint}</p>
      </div>
    </form>
  );
}
