export interface NavLink {
  label: string;
  href: string;
  /** Renders the Services dropdown on desktop and the accordion in the drawer. */
  hasMenu?: boolean;
}

/** Primary navigation — shared by the nav bar, mobile drawer and footer. */
export const navLinks: readonly NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services', hasMenu: true },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

/** Where every "Online Estimate" / "Get an Estimate" CTA points. */
export const estimateHref = '/contact#estimate';
