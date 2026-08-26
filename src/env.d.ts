/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_HESELO_SITE_URL?: string
  readonly PUBLIC_HESELO_CONTACT_ENDPOINT?: string
  readonly PUBLIC_HESELO_ANALYTICS?: string
  readonly PUBLIC_HESELO_PLAUSIBLE_DOMAIN?: string
  readonly PUBLIC_HESELO_GA4_ID?: string
  readonly PUBLIC_HESELO_SOCIAL_INSTAGRAM?: string
  readonly PUBLIC_HESELO_SOCIAL_FACEBOOK?: string
  readonly PUBLIC_HESELO_SOCIAL_LINKEDIN?: string
  readonly PUBLIC_HESELO_SOCIAL_X?: string
  /** @deprecated use PUBLIC_HESELO_* */
  readonly PUBLIC_SITE_URL?: string
  readonly PUBLIC_CONTACT_ENDPOINT?: string
  readonly PUBLIC_ANALYTICS?: string
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string
  readonly PUBLIC_GA4_ID?: string
  readonly PUBLIC_SOCIAL_INSTAGRAM?: string
  readonly PUBLIC_SOCIAL_FACEBOOK?: string
  readonly PUBLIC_SOCIAL_LINKEDIN?: string
  readonly PUBLIC_SOCIAL_X?: string
  readonly HESELO_SMTP_HOST?: string
  readonly HESELO_SMTP_PORT?: string
  readonly HESELO_SMTP_SECURE?: string
  readonly HESELO_SMTP_USER?: string
  readonly HESELO_SMTP_PASS?: string
  readonly HESELO_CONTACT_NOTIFY_EMAIL?: string
  readonly HESELO_CONTACT_FROM_EMAIL?: string
  readonly HESELO_INDEXNOW_KEY?: string
  /** @deprecated use HESELO_* */
  readonly SMTP_HOST?: string
  readonly SMTP_PORT?: string
  readonly SMTP_SECURE?: string
  readonly SMTP_USER?: string
  readonly SMTP_PASS?: string
  readonly CONTACT_NOTIFY_EMAIL?: string
  readonly CONTACT_FROM_EMAIL?: string
  readonly INDEXNOW_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare namespace App {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface Locals {}
}
