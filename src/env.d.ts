/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string
  readonly PUBLIC_CONTACT_ENDPOINT?: string
  readonly SMTP_HOST?: string
  readonly SMTP_PORT?: string
  readonly SMTP_SECURE?: string
  readonly SMTP_USER?: string
  readonly SMTP_PASS?: string
  readonly CONTACT_NOTIFY_EMAIL?: string
  readonly CONTACT_FROM_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Locals {}
}
