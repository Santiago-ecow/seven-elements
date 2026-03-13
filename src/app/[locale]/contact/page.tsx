"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section
        className="flex items-center justify-center"
        style={{ paddingTop: "calc(80px + var(--spacing-section))", paddingBottom: "60px" }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h1 className="font-serif text-[clamp(1.75rem,4vw,3rem)] text-[var(--color-text)] tracking-[0.1em] mb-4">
            {t("pageTitle")}
          </h1>
          <p className="text-[var(--color-text-tertiary)] text-[15px]">{t("description")}</p>
        </div>
      </section>

      {/* Form */}
      <section style={{ paddingBottom: "var(--spacing-section)" }}>
        <div className="max-w-md mx-auto px-6 lg:px-10">
          {submitted ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-[var(--color-text)] tracking-[0.08em] whitespace-pre-line">
                {t("form.thankYou")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-[13px] text-[var(--color-text-secondary)] tracking-[0.1em] mb-3">
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-text)] focus:outline-none transition-colors text-[var(--color-text)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] text-[var(--color-text-secondary)] tracking-[0.1em] mb-3">
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-text)] focus:outline-none transition-colors text-[var(--color-text)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[13px] text-[var(--color-text-secondary)] tracking-[0.1em] mb-3">
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] focus:border-[var(--color-text)] focus:outline-none transition-colors resize-none text-[var(--color-text)]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 text-[13px] tracking-[0.15em] border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white transition-colors duration-500"
              >
                {t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
