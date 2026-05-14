"use client";

import { mailchimp, newsletter } from "@/resources";
import {
  Background,
  Button,
  Column,
  Heading,
  Input,
  RevealFx,
  Row,
  Text,
  Textarea,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (state: FormState): Partial<FormState> => {
    const next: Partial<FormState> = {};
    if (!state.name.trim()) next.name = "Informe seu nome.";
    if (!state.email.trim()) {
      next.email = "Informe seu e-mail.";
    } else if (!emailPattern.test(state.email)) {
      next.email = "E-mail inválido.";
    }
    if (!state.message.trim() || state.message.trim().length < 10) {
      next.message = "Mensagem deve ter pelo menos 10 caracteres.";
    }
    return next;
  };

  const handleChange =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError("");

    const validation = validate(form);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const formsubmitEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;
    if (!formsubmitEmail) {
      setServerError("Formulário de contato não configurado.");
      return;
    }

    setLoading(true);

    try {
      const payload = new FormData();
      payload.append("name", form.name);
      payload.append("email", form.email);
      payload.append("message", form.message);
      payload.append("_subject", `Portfólio · Contato de ${form.name}`);
      payload.append("_template", "table");
      payload.append("_captcha", "false");
      payload.append("_honey", "");

      const response = await fetch(
        `https://formsubmit.co/ajax/${formsubmitEmail}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: payload,
        },
      );

      if (response.ok) {
        setSubmitted(true);
        setForm(initialState);
        setErrors({});
      } else {
        setServerError(
          "Não consegui enviar agora. Tente novamente em instantes.",
        );
      }
    } catch {
      setServerError("Erro de rede. Verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (newsletter.display === false) return null;

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />

      <Column maxWidth="xs" horizontal="center">
        <Heading marginBottom="s" variant="display-strong-xs">
          {newsletter.title}
        </Heading>
        <Text
          wrap="balance"
          marginBottom="l"
          variant="body-default-l"
          onBackground="neutral-weak"
        >
          {newsletter.description}
        </Text>
      </Column>

      {submitted ? (
        <RevealFx translateY="4">
          <Column maxWidth={28} horizontal="center" gap="8">
            <Text variant="heading-strong-m" onBackground="accent-strong">
              Obrigado pelo contato!
            </Text>
            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              align="center"
              wrap="balance"
            >
              Recebi sua mensagem e retorno o mais breve possível no e-mail
              informado.
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
              label="Nome"
              required
              value={form.name}
              onChange={handleChange("name")}
              errorMessage={errors.name}
            />
            <Input
              id="contact-email"
              name="email"
              type="email"
              label="E-mail"
              required
              value={form.email}
              onChange={handleChange("email")}
              errorMessage={errors.email}
            />
            <Textarea
              id="contact-message"
              name="message"
              label="Mensagem"
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
              <Button
                id="contact-submit"
                type="submit"
                size="m"
                disabled={loading}
                arrowIcon
              >
                {loading ? "Enviando..." : "Enviar mensagem"}
              </Button>
            </Row>
          </Column>
        </form>
      )}
    </Column>
  );
};
