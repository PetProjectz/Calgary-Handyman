/**
 * The canonical Calgary Handyman service list. Kept in a plain (non-"use client")
 * module so it can be imported by both Server and Client Components, and so the
 * home page cards, the nav "Services" menu and the footer can never drift apart.
 *
 * `Icon` is an MUI icon component: render it as `<service.Icon />`. Don't pass the
 * component itself as a prop from a Server Component to a Client Component —
 * Client Components should import `services` directly instead.
 */
import type { SvgIconComponent } from '@mui/icons-material';

import PlumbingRoundedIcon from '@mui/icons-material/PlumbingRounded';
import FormatPaintRoundedIcon from '@mui/icons-material/FormatPaintRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import BoltRoundedIcon from '@mui/icons-material/BoltRounded';
import WindowRoundedIcon from '@mui/icons-material/WindowRounded';
import CarpenterRoundedIcon from '@mui/icons-material/CarpenterRounded';
import FenceRoundedIcon from '@mui/icons-material/FenceRounded';

export interface Service {
  /** Anchor id on the home page services grid, e.g. `/#plumbing`. */
  slug: string;
  title: string;
  /** Shorter label for compact lists. */
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  Icon: SvgIconComponent;
}

export const services: Service[] = [
  {
    slug: 'plumbing',
    title: 'Plumbing',
    shortTitle: 'Plumbing',
    description: 'Leak fixes, fixture installs, and small plumbing repairs handled with care.',
    image: '/assets/services/plumbingfix.webp',
    imageAlt: 'Plumber repairing a kitchen faucet',
    Icon: PlumbingRoundedIcon,
  },
  {
    slug: 'painting',
    title: 'Painting',
    shortTitle: 'Painting',
    description: 'Interior & exterior painting with a clean, durable finish.',
    image: '/assets/services/painting.webp',
    imageAlt: 'Interior wall being painted',
    Icon: FormatPaintRoundedIcon,
  },
  {
    slug: 'flooring',
    title: 'Floor Installation & Repair',
    shortTitle: 'Flooring',
    description: 'Hardwood, laminate & tile installed and repaired to last.',
    image: '/assets/services/floorinstallation.webp',
    imageAlt: 'Floor installation',
    Icon: GridViewRoundedIcon,
  },
  {
    slug: 'drywall',
    title: 'Drywall Patching & Repair',
    shortTitle: 'Drywall',
    description: 'Holes, cracks & water damage patched with a seamless finish.',
    image: '/assets/services/drywall.webp',
    imageAlt: 'Drywall being patched and sanded',
    Icon: HandymanRoundedIcon,
  },
  {
    slug: 'ceiling-repair',
    title: 'Ceiling Repair & Replacement',
    shortTitle: 'Ceilings',
    description: 'From water stains to full replacement, ceilings restored right.',
    image: '/assets/services/ceilingrepair.webp',
    imageAlt: 'Ceiling repair and replacement work',
    Icon: RoofingRoundedIcon,
  },
  {
    slug: 'electrical',
    title: 'Electrical Repair',
    shortTitle: 'Electrical',
    description: 'Light fixtures, switches & minor electrical work done safely.',
    image: '/assets/services/electricalrepair.webp',
    imageAlt: 'Electrician repairing a light fixture',
    Icon: BoltRoundedIcon,
  },
  {
    slug: 'glass',
    title: 'Glass Services',
    shortTitle: 'Glass',
    description: 'Window & glass pane repair, replacement, and installation.',
    image: '/assets/services/glassservices.webp',
    imageAlt: 'Glass window pane replacement',
    Icon: WindowRoundedIcon,
  },
  {
    slug: 'carpentry',
    title: 'Carpentry Repair',
    shortTitle: 'Carpentry',
    description: 'Trim, doors, cabinets & furniture fixed with skilled craftsmanship.',
    image: '/assets/services/carpentryrepair.webp',
    imageAlt: 'Carpenter repairing wood trim',
    Icon: CarpenterRoundedIcon,
  },
  {
    slug: 'countertops-fences',
    title: 'Kitchen Countertops & Fence Repair',
    shortTitle: 'Countertops & Fences',
    description: 'Repair, restore & maintain your Kitchen Countertops & outdoor spaces.',
    image: '/assets/services/countertops.webp',
    imageAlt: 'Kitchen countertop repair',
    Icon: FenceRoundedIcon,
  },
];

/** The trimmed service list shown in the footer (matches the static site). */
export const footerServices = [
  { label: 'Plumbing', href: '/#plumbing' },
  { label: 'Painting', href: '/#painting' },
  { label: 'Flooring', href: '/#flooring' },
  { label: 'Drywall & Ceilings', href: '/#drywall' },
  { label: 'Electrical & Glass', href: '/#electrical' },
];
