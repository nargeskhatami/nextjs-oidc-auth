import {
  InMemoryWebStorage,
  UserManager,
  WebStorageStateStore,
} from "oidc-client-ts";
import { AuthProviderProps } from "react-oidc-context";
import CookieStorage from "../utils/cookie-storage";

/* -----------------------------------------------------------------------------
 * OIDC CONFIG
 * -----------------------------------------------------------------------------*/

const ORIGIN_URI = globalThis?.window?.location.origin;
const REDIRECT_URI = `${ORIGIN_URI}/auth/callback`;

const userConfig: AuthProviderProps = {
  authority: process.env.NEXT_PUBLIC_AUTHORITY!,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID!,
  redirect_uri: REDIRECT_URI,
  response_type: "code",
  automaticSilentRenew: true,
  scope: "openid profile email offline_access",
  accessTokenExpiringNotificationTimeInSeconds: 5 * 60,
  silent_redirect_uri: `${REDIRECT_URI}/auth/silent-renew`,
  loadUserInfo: true,
  post_logout_redirect_uri: ORIGIN_URI,
  userStore: new WebStorageStateStore({
    store: globalThis?.window ? new CookieStorage() : new InMemoryWebStorage(),
  }),
  response_mode: "query",
};

export const userManager = new UserManager(userConfig);
export const oidcConfig = { ...userConfig, userManager };
