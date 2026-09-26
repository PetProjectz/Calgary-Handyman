import * as React from 'react';
import Image from 'next/image';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import AppButton from '@/components/common/AppButton';
import ScrollReveal from '@/components/common/ScrollReveal';
import SectionHeading from '@/components/common/SectionHeading';
import { estimateHref } from '@/navLinks';
import { services } from '@/services';

/**
 * The home page services grid (`.services-grid`). Each card carries the anchor
 * id the nav menu and footer link to, e.g. `/#plumbing`.
 */
export default function ServicesGrid() {
  return (
    <Box component="section" id="services" sx={{ py: { xs: 7, md: 10.5 }, scrollMarginTop: '80px' }}>
      <Container>
        <ScrollReveal sx={{ mb: 5.75 }}>
          <SectionHeading tag="What We Do" title="Our Handyman Services" />
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gap: 3.25,
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          }}
        >
          {services.map((service, index) => (
            <ScrollReveal
              key={service.slug}
              delay={(index % 3) * 0.08}
              id={service.slug}
              component="article"
              sx={{
                scrollMarginTop: '90px',
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                overflow: 'hidden',
                transition: 'transform .22s ease, box-shadow .22s ease, border-color .22s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: 'var(--mui-palette-brandSurface-cardShadow)',
                  borderColor: 'transparent',
                },
                '&:hover img': { transform: 'scale(1.06)' },
              }}
            >
              <Box sx={{ position: 'relative', aspectRatio: '4 / 3', overflow: 'hidden' }}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 380px"
                  style={{ objectFit: 'cover', transition: 'transform .5s ease' }}
                />
              </Box>
              <Box sx={{ px: 2.75, pt: 2.75, pb: 3.25 }}>
                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    mt: '-44px',
                    mb: 1.75,
                    borderRadius: '50%',
                    bgcolor: 'secondary.main',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '4px solid',
                    borderColor: 'background.paper',
                    boxShadow: 'var(--mui-palette-brandSurface-cardShadow)',
                    position: 'relative',
                  }}
                >
                  <service.Icon sx={{ fontSize: 20 }} />
                </Box>
                <Typography variant="h3" sx={{ fontSize: 18, color: 'brandSurface.heading', mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>
                  {service.description}
                </Typography>
              </Box>
            </ScrollReveal>
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 5.75 }}>
          <AppButton href={estimateHref} variant="contained">
            Get a Free Estimate
          </AppButton>
        </Box>
      </Container>
    </Box>
  );
}
