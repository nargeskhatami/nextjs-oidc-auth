import { Title, Text, Button, Container } from "@mantine/core";
import { Dots } from "./Dots";
import classes from "./About.module.css";

export function About() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title} mb="xl">
          Next.js App with{" "}
          <Text component="span" className={classes.highlight} inherit>
            Mantine UI, OIDC Auth, and Testing
          </Text>
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            Stunning, responsive interface with Mantine UI. Implement robust
            authentication with OIDC Client to secure user authentication,
            protecting against unauthorized access. Guarantee flawless
            performance with comprehensive E2E, integration and unit testing,
            identifying and resolving issues early to deliver a seamless user
            experience.
          </Text>
        </Container>
      </div>
    </Container>
  );
}
