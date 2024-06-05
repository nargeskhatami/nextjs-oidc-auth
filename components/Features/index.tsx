import { Text, SimpleGrid, Container, rem } from "@mantine/core";

import classes from "./Features.module.css";
import { featuresMockData } from "../../constants/mock-data";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature(props: FeatureProps) {
  const { icon: Icon, title, description, className, ...others } = props;

  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon
          style={{ width: rem(38), height: rem(38) }}
          className={classes.icon}
          stroke={1.5}
        />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <Container mt={200} mb={200} size="md">
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {featuresMockData.map((item) => (
          <Feature {...item} key={item.title} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
