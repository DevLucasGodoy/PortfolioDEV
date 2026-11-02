"use client";

import { useContent } from "@/components/ContentProvider";
import {
  Button,
  Column,
  Heading,
  Input,
  RevealFx,
  Row,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { useTranslations } from "next-intl";
import { useState } from "react";
import styles from "./Mailchimp.module.scss";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Mailchimp: React.FC<React.ComponentProps<typeof Column> & { eyebrow?: string }> = ({
  eyebrow,
  ...flex
}) => {
  const { newsletter, person } = useContent();
  const t = useTranslations("Contact");
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
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
    (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    // Honeypot: bots that fill the hidden field get a fake success and nothing is sent
    if (new FormData(e.currentTarget).get("_honey")) {
      setSubmitted(true);
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
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitted(true);
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

  return (
    <Column fillWidth radius="l" marginBottom="m" className={styles.panel} {...flex}>
      <Column gap="16" className={styles.intro}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <Heading as="h2" variant="display-strong-m" wrap="balance" style={{ color: "inherit" }}>
          {newsletter.title}
        </Heading>
        <Text wrap="balance" variant="body-default-l" style={{ color: "inherit" }}>
          {newsletter.description}
        </Text>
        <Text variant="body-default-m" style={{ color: "inherit" }}>
          {t("direct")}{" "}
          <a href={`mailto:${person.email}`} className={styles.email}>
            {person.email}
          </a>
        </Text>
      </Column>

      <div className={styles.card}>
        {submitted ? (
          <RevealFx translateY="4">
            <Column maxWidth={28} horizontal="center" gap="8" className={styles.success}>
              <span className={styles.badge} aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 60 60" aria-hidden="true">
                  <circle className={styles.ring} cx="30" cy="30" r="26" />
                  <path className={styles.check} d="M18 31 L27 40 L43 22" />
                </svg>
              </span>
              <Text variant="heading-strong-m" onBackground="accent-strong">
                {t("successTitle")}
              </Text>
              <Text
                variant="body-default-m"
                onBackground="neutral-weak"
                align="center"
                wrap="balance"
              >
                {t("successBody")}
              </Text>
            </Column>
          </RevealFx>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            noValidate
          >
            <Column fillWidth maxWidth={28} gap="12">
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                style={{ display: "none" }}
                aria-hidden="true"
              />
              <Input
                id="contact-name"
                name="name"
                type="text"
                label={t("name")}
                required
                value={form.name}
                onChange={handleChange("name")}
                errorMessage={errors.name}
              />
              <Input
                id="contact-email"
                name="email"
                type="email"
                label={t("email")}
                required
                value={form.email}
                onChange={handleChange("email")}
                errorMessage={errors.email}
              />
              <Textarea
                id="contact-message"
                name="message"
                label={t("message")}
                lines={5}
                required
                value={form.message}
                onChange={handleChange("message")}
                errorMessage={errors.message}
              />
              {serverError && (
                <Text variant="body-default-s" onBackground="danger-strong">
                  {serverError}
                </Text>
              )}
              <Row fillWidth horizontal="end" paddingTop="8">
                <Button id="contact-submit" type="submit" size="m" disabled={loading} arrowIcon>
                  {loading ? t("sending") : t("send")}
                </Button>
              </Row>
            </Column>
          </form>
        )}
      </div>
    </Column>
  );
};
