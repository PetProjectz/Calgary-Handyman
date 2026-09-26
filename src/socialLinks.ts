/**
 * Company social profile URLs. Import from here wherever social links are rendered
 * so links stay consistent across the site.
 *
 * TODO: the static site used "#" placeholders — replace with the real profile URLs.
 * Entries left as "#" are excluded from structured data (see `socialProfileUrls`).
 */
export const socialLinks = {
  facebook: '#',
  instagram: '#',
} as const;

/** Real (http) profile URLs only — for schema.org `sameAs`. */
export const socialProfileUrls: string[] = Object.values(socialLinks).filter((url) => url.startsWith('http'));
