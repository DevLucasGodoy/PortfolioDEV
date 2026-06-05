import { Column, Heading, Text } from "@once-ui-system/core";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <Column as="section" fill center paddingBottom="160">
      <Text marginBottom="s" variant="display-strong-xl">
        404
      </Text>
      <Heading marginBottom="l" variant="display-default-xs">
        {t("title")}
      </Heading>
      <Text onBackground="neutral-weak">{t("description")}</Text>
    </Column>
  );
}
