"use client";

import { useEffect } from "react";
import { userManager } from "../../../constants/auth";
import { useDisclosure } from "@mantine/hooks";
import { LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function SignInCallback() {
  const router = useRouter();
  const [visible, { open }] = useDisclosure(false);

  useEffect(() => {
    open();
    userManager.signinRedirectCallback();
    router.push("/");
  }, []);

  return (
    <LoadingOverlay
      visible={visible}
      zIndex={1000}
      overlayProps={{ radius: "sm", blur: 2 }}
    />
  );
}
