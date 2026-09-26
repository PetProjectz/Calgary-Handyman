import * as React from 'react';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import AppButton from '@/components/common/AppButton';
import CtaSection from '@/components/common/CtaSection';
import BannerStrip from '@/components/home/BannerStrip';
import HomeHero from '@/components/home/HomeHero';
import ServicesGrid from '@/components/home/ServicesGrid';
import Testimonials from '@/components/home/Testimonials';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { whatsappLink } from '@/contactInfo';
import { estimateHref } from '@/navLinks';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ServicesGrid />
      <BannerStrip />
      <WhyChooseUs />
      <Testimonials />
      <CtaSection
        py={{ xs: 7, md: 10.5 }}
        title="Ready to fix it, finish it, or install it?"
        text="Tell us about your project and we'll get back to you with a free, no-obligation estimate — often the same day."
        image="/assets/home/final-cta.webp"
        imageAlt="Calgary skyline"
        actions={
          <>
            <AppButton href={estimateHref} variant="contained" color="secondary">
              Get an Estimate
            </AppButton>
            <Button
              component="a"
              href={whatsappLink("Hi Calgary Handyman! I'd like to ask about a project.")}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<WhatsAppIcon />}
              sx={{
                borderColor: '#fff',
                color: '#fff',
                '&:hover': { borderColor: '#fff', bgcolor: '#fff', color: 'primary.main' },
              }}
            >
              WhatsApp Us
            </Button>
          </>
        }
      />
    </>
  );
}
