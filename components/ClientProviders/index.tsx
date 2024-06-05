"use client";
import { ReactNode, useEffect } from "react";
import { AuthProvider } from "react-oidc-context";
import { oidcConfig, userManager } from "../../constants/auth";

type Props = {
  children: ReactNode;
};

export function ClientProviders(props: Props) {
  const { children } = props;

  useEffect(() => {
    userManager.events.addSilentRenewError(async () => {
      await userManager.signinSilent();
    });
  }, []);

  return <AuthProvider {...oidcConfig}>{children}</AuthProvider>;
}
