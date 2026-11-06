"use client";

import { useContent } from "@/components/ContentProvider";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { LuArrowLeft, LuArrowRight, LuCheck, LuClock } from "react-icons/lu";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const field =
  "w-full rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

/**
 * Contact form styled as the template's 3-step booking widget:
 * 1. pick a service, 2. name/email/message, 3. confirmation.
 * Submits JSON to /api/contact (validated + rate-limited server-side, delivered via Resend).
 */
export function Mailchimp({ id, className }: { id?: string; className?: string }) {
  const { newsletter, person, landing } = useContent();
  const t = useTranslations("Contact");
  const tb = useTranslations("Booking");
  const services = landing.booking.services;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (state: FormState): Partial<FormState> => {
    const next: Partial<FormState> = {};
    if (!state.name.trim()) next.name = t("errNameRequired");
    if (!state.email.trim()) {
      next.email = t("errEmailRequired");
    } else if (!emailPattern.test(state.email)) {
      next.email = t("errEmailInvalid");
    }
    if (!state.message.trim() || state.message.trim().length < 10) {
      next.message = t("errMessageShort");
    }
    return next;
  };

  const handleChange =
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    // Honeypot: bots that fill the hidden field get a fake success and nothing is sent
    if (new FormData(e.currentTarget).get("_honey")) {
      setStep(3);
      return;
    }

    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: AbortSignal.timeout(20000),
        body: JSON.stringify({
          ...form,
          message: `[${tb("service")}: ${services[service]?.title ?? "-"}]\n\n${form.message}`,
        }),
      });

      if (response.ok) {
        setStep(3);
        setForm(initialState);
        setErrors({});
      } else {
        setServerError(t("errServer"));
      }
    } catch {
      setServerError(t("errNetwork"));
    } finally {
      setLoading(false);
    }
  };

  if (newsletter.display === false) return null;

  const stepTitle = [tb("selectService"), tb("details"), tb("done")][step - 1];

  return (
    <div id={id} className={cn("scroll-mt-20", className)}>
      <div className="mb-8 flex flex-col gap-2">
        <span className="font-mono text-sm text-primary italic">{`// ${landing.cta.connect}`}</span>
        <h2 className="text-3xl font-semibold tracking-tight text-balance text-foreground sm:text-4xl">
          {newsletter.title}
        </h2>
        <p className="max-w-xl text-muted-foreground">{newsletter.description}</p>
        <p className="text-sm text-muted-foreground">
          {t("direct")}{" "}
          <a
            href={`mailto:${person.email}`}
            className="text-foreground underline underline-offset-4"
          >
            {person.email}
          </a>
        </p>
      </div>

      <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-xs md:grid-cols-[240px_1fr]">
        <aside className="flex flex-col gap-3 border-b border-border p-6 md:border-r md:border-b-0">
          <StatusBadge className="w-fit">{landing.hire.available}</StatusBadge>
          <span className="relative size-16 overflow-hidden rounded-full border border-border">
            <Image
              src={person.avatar}
              alt={person.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </span>
          <div>
            <p className="font-semibold text-foreground">{person.name}</p>
            <p className="text-sm text-muted-foreground">{landing.role}</p>
          </div>
          {step > 1 && services[service] && (
            <div className="mt-2 rounded-2xl bg-muted p-3 text-xs">
              <p className="font-medium text-foreground">{services[service].title}</p>
              <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                <LuClock className="size-3" /> {services[service].duration}
              </p>
            </div>
          )}
        </aside>

        <div className="flex flex-col gap-5 p-6">
          <div>
            <p className="text-lg font-semibold text-foreground">{stepTitle}</p>
            <p className="text-xs text-muted-foreground">{tb("step", { n: step })}</p>
            <div className="mt-3 flex gap-1.5" aria-hidden="true">
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className={cn("h-1 flex-1 rounded-full", n <= step ? "bg-primary" : "bg-muted")}
                />
              ))}
            </div>
          </div>

          {step === 1 && (
            <>
              <div
                className="flex flex-col gap-2"
                role="radiogroup"
                aria-label={tb("selectService")}
              >
                {services.map((item, index) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-pressed={index === service}
                    onClick={() => setService(index)}
                    className={cn(
                      "flex items-start justify-between gap-4 rounded-2xl border p-4 text-left transition-colors",
                      index === service
                        ? "border-primary bg-primary-soft"
                        : "border-border hover:bg-muted",
                    )}
                  >
                    <span>
                      <span className="block text-sm font-medium text-foreground">
                        {item.title}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </span>
                    <span className="shrink-0 text-right">
                      <span className="block text-sm font-semibold text-foreground">
                        {item.price}
                      </span>
                      <span className="block text-xs text-muted-foreground">{item.duration}</span>
                    </span>
                  </button>
                ))}
              </div>
              <Button variant="primary" className="self-end" onClick={() => setStep(2)}>
                {tb("next")} <LuArrowRight className="size-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              {(["name", "email"] as const).map((key) => (
                <label key={key} className="flex flex-col gap-1.5 text-sm text-foreground">
                  {t(key)}
                  <input
                    id={`contact-${key}`}
                    name={key}
                    type={key === "email" ? "email" : "text"}
                    autoComplete={key}
                    required
                    value={form[key]}
                    onChange={handleChange(key)}
                    aria-invalid={Boolean(errors[key])}
                    className={cn(field, errors[key] && "border-danger")}
                  />
                  {errors[key] && <span className="text-xs text-danger">{errors[key]}</span>}
                </label>
              ))}
              <label className="flex flex-col gap-1.5 text-sm text-foreground">
                {t("message")}
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  maxLength={4800}
                  required
                  value={form.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  className={cn(field, "resize-y", errors.message && "border-danger")}
                />
                {errors.message && <span className="text-xs text-danger">{errors.message}</span>}
              </label>
              {serverError && <p className="text-sm text-danger">{serverError}</p>}
              <div className="flex justify-between gap-2 pt-1">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  <LuArrowLeft className="size-4" /> {tb("back")}
                </Button>
                <Button id="contact-submit" type="submit" variant="primary" disabled={loading}>
                  {loading ? t("sending") : t("send")}
                </Button>
              </div>
            </form>
          )}

          {step === 3 && (
            <output className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                <LuCheck className="size-6" />
              </span>
              <p className="text-lg font-semibold text-foreground">{t("successTitle")}</p>
              <p className="max-w-sm text-sm text-muted-foreground">{t("successBody")}</p>
            </output>
          )}
        </div>
      </div>
    </div>
  );
}
