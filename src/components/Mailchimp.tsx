"use client";

import { mailchimp, newsletter } from "@/resources";
import {
  Button,
  Heading,
  Input,
  Text,
  Background,
  Column,
  Row,
} from "@once-ui-system/core";
import { opacity, SpacingToken } from "@once-ui-system/core";
import { useState } from "react";

export const Mailchimp: React.FC<React.ComponentProps<typeof Column>> = ({
  ...flex
}) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (value: string): boolean => {
    if (value === "") return false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value !== "" && !validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const handleBlur = () => {
    setTouched(true);
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("_captcha", "false");
      formData.append("_template", "box");

      const formsubmitEmail = process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL;

      if (!formsubmitEmail) {
        setError("Contact form is not configured.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        `https://formsubmit.co/ajax/${formsubmitEmail}`,
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        },
      );

      if (response.ok) {
        setSubmitted(true);
        setEmail("");
        setError("");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
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
        <Text variant="body-default-m" onBackground="accent-strong">
          Obrigado por mandar mensagem! Entrarei em contato o mais breve
          possível.
        </Text>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Row fillWidth maxWidth={24} s={{ direction: "column" }} gap="8">
            <Input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={touched && error ? error : ""}
            />
            <div className="clear">
              <Row height="48" vertical="center">
                <Button
                  id="contact-submit"
                  type="submit"
                  size="m"
                  fillWidth
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </Button>
              </Row>
            </div>
          </Row>
        </form>
      )}
    </Column>
  );
};
