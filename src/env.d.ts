/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: "development" | "production";
  readonly VITE_APPSTORE_URL: string;
  readonly VITE_PLAYSTORE_URL: string;
  readonly VITE_INSTAGRAM: string;
  readonly VITE_EMAIL: string;
  readonly VITE_TWITTER: string;
  readonly VITE_LINKEDIN: string;
  readonly VITE_DEV_API: string;
  readonly VITE_PROD_API: string;
  readonly VITE_TERMS_OF_SERVICE: string;
  readonly VITE_PRIVACY_POLICY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
