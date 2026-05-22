"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function submitToWhatsApp(event) {
    event.preventDefault();

    const text = [
      "New enquiry from Amit Web Solution website",
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      "",
      `Message: ${form.message}`,
    ].join("\n");

    window.open(`https://wa.me/918574700615?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={submitToWhatsApp} className="card contact-card reveal-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Name
          <input
            required
            className="field"
            name="name"
            type="text"
            value={form.name}
            onChange={updateField}
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800">
          Email
          <input
            required
            className="field"
            name="email"
            type="email"
            value={form.email}
            onChange={updateField}
            placeholder="name@company.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
          Number
          <input
            required
            className="field"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={updateField}
            placeholder="+91"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-800 sm:col-span-2">
          Message
          <textarea
            required
            className="field min-h-36 resize-y"
            name="message"
            value={form.message}
            onChange={updateField}
            placeholder="Tell us about your project"
          />
        </label>
      </div>
      <button type="submit" className="btn-primary mt-6">
        Send Message
      </button>
    </form>
  );
}
