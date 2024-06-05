import { Container, Group, Anchor, Text } from "@mantine/core";
import classes from "./Footer.module.css";
import { IconHeartCode } from "@tabler/icons-react";

const links = [
  { link: "#", label: "Contact" },
  { link: "#", label: "Privacy" },
  { link: "#", label: "Blog" },
  { link: "#", label: "Careers" },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor<"a"> c="dimmed" key={link.label} href={link.link} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group gap={10}>
          <Text fw={700} fz="lg" className={classes.title}>
            Next.js OIDC Auth
          </Text>
        </Group>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
