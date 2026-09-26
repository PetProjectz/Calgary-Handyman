import * as React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import SpaRoundedIcon from '@mui/icons-material/SpaRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import AppLink from '@/components/common/AppLink';
import { contactInfo, whatsappLink } from '@/contactInfo';
import { displayFontFamily } from '@/fonts';
import { estimateHref } from '@/navLinks';
import { footerServices } from '@/services';
import { socialLinks } from '@/socialLinks';

/** Logo intrinsic size is 1200×315, rendered at a 38px cap in the footer. */
const LOGO_HEIGHT = 38;
const LOGO_WIDTH = Math.round((LOGO_HEIGHT * 1200) / 315);

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'About Us', href: '/about' },
  { label: 'Online Estimate', href: estimateHref },
  { label: 'Contact Us', href: '/contact' },
];

const columnHeadingSx = {
  fontFamily: displayFontFamily,
  fontSize: 14.5,
  fontWeight: 600,
  letterSpacing: '0.04em',
  textTransform: 'uppercase',
  color: '#fff',
  mb: 2.25,
};

const footerLinkSx = {
  fontSize: 13.5,
  color: 'rgba(255,255,255,.78)',
  // Explicit reset: the contact column uses bare `a` elements, which do not get
  // MUI Link's `underline="none"` treatment.
  textDecoration: 'none',
  transition: 'color .15s ease',
  '&:hover': { color: '#fff' },
};

const socialButtonSx = {
  width: 36,
  height: 36,
  color: '#fff',
  bgcolor: 'rgba(255,255,255,.08)',
  transition: 'background .15s ease',
  '&:hover': { bgcolor: 'secondary.main' },
};

/** Column list wrapper — resets the `ul` the way the static site's reset did. */
function LinkList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      component="ul"
      sx={{ display: 'flex', flexDirection: 'column', gap: 1.375, m: 0, p: 0, listStyle: 'none' }}
    >
      {children}
    </Box>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', color: 'rgba(255,255,255,.78)' }}>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gap: 4.5,
            pt: 8,
            pb: 5,
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '1.4fr 1fr 1fr 1.1fr',
            },
          }}
        >
          {/* Brand */}
          <Box>
            <AppLink
              href="/"
              aria-label="Calgary Handyman — home"
              sx={{ display: 'inline-flex', alignItems: 'center' }}
            >
              <Image
                src="/assets/brand/calgary-handyman-logo-light.webp"
                alt="Calgary Handyman logo"
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                style={{ height: LOGO_HEIGHT, width: 'auto', display: 'block' }}
              />
            </AppLink>
            <Typography sx={{ mt: 1.75, maxWidth: 260, fontSize: 13.5, color: 'rgba(255,255,255,.6)' }}>
              Your trusted partner for reliable handyman services in Calgary and surrounding areas.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.25, mt: 2.25 }}>
              <IconButton
                component="a"
                href={socialLinks.facebook}
                aria-label="Facebook"
                sx={socialButtonSx}
              >
                <FacebookIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.instagram}
                aria-label="Instagram"
                sx={socialButtonSx}
              >
                <InstagramIcon sx={{ fontSize: 18 }} />
              </IconButton>
              <IconButton
                component="a"
                href={whatsappLink('Hi Calgary Handyman! I found you online.')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={socialButtonSx}
              >
                <WhatsAppIcon sx={{ fontSize: 18 }} />
              </IconButton>
            </Box>
          </Box>

          {/* Quick links */}
          <Box>
            <Typography component="h2" sx={columnHeadingSx}>
              Quick Links
            </Typography>
            <LinkList>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <AppLink href={link.href} sx={footerLinkSx}>
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </LinkList>
          </Box>

          {/* Services */}
          <Box>
            <Typography component="h2" sx={columnHeadingSx}>
              Our Services
            </Typography>
            <LinkList>
              {footerServices.map((service) => (
                <li key={service.label}>
                  <AppLink href={service.href} sx={footerLinkSx}>
                    {service.label}
                  </AppLink>
                </li>
              ))}
            </LinkList>
          </Box>

          {/* Contact */}
          <Box>
            <Typography component="h2" sx={columnHeadingSx}>
              Contact Info
            </Typography>
            <LinkList>
              <ContactItem icon={<LocationOnRoundedIcon sx={contactIconSx} />}>
                {contactInfo.location}
              </ContactItem>
              <ContactItem icon={<PhoneRoundedIcon sx={contactIconSx} />}>
                <Box component="a" href={contactInfo.phoneHref} sx={footerLinkSx}>
                  {contactInfo.phoneDisplay}
                </Box>
              </ContactItem>
              <ContactItem icon={<WhatsAppIcon sx={contactIconSx} />}>
                <Box
                  component="a"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={footerLinkSx}
                >
                  WhatsApp Us
                </Box>
              </ContactItem>
              <ContactItem icon={<EmailRoundedIcon sx={contactIconSx} />}>
                <Box component="a" href={contactInfo.emailHref} sx={footerLinkSx}>
                  {contactInfo.email}
                </Box>
              </ContactItem>
            </LinkList>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5,
            py: 2.5,
            borderTop: '1px solid rgba(255,255,255,.1)',
            fontSize: 12.5,
            color: 'rgba(255,255,255,.55)',
          }}
        >
          <Box component="span">
            &copy; {year} {contactInfo.businessName}. All rights reserved.
          </Box>
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
            <SpaRoundedIcon sx={{ fontSize: 14, color: 'secondary.main' }} /> Proudly Canadian
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const contactIconSx = { fontSize: 16, color: 'secondary.main', mt: '3px', flexShrink: 0 };

function ContactItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Box component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, fontSize: 13.5 }}>
      {icon}
      <Box component="span">{children}</Box>
    </Box>
  );
}
