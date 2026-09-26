import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import ScrollReveal from '@/components/common/ScrollReveal';
import SectionHeading from '@/components/common/SectionHeading';
import { displayFontFamily } from '@/fonts';
import { testimonials } from '@/testimonials';

/** The tinted testimonials section (`.testi-grid`) near the bottom of the home page. */
export default function Testimonials() {
  return (
    <Box
      component="section"
      sx={{ bgcolor: 'brandSurface.tint', pt: { xs: 7, md: 10.5 }, pb: { xs: 8, md: 12 } }}
    >
      <Container>
        <ScrollReveal sx={{ mb: 5.75 }}>
          <SectionHeading tag="What Calgary Says" title="Trusted by homeowners across the city" />
        </ScrollReveal>

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <ScrollReveal
              key={testimonial.name}
              delay={index * 0.08}
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                p: 3.25,
              }}
            >
              <Box
                aria-label="Rated 5 out of 5"
                sx={{ color: 'brandAccent.gold', fontSize: 13, letterSpacing: '2px', mb: 1.5 }}
              >
                ★★★★★
              </Box>
              <Typography sx={{ fontSize: 14.5, color: 'text.primary', mb: 2.25 }}>
                {testimonial.quote}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 40,
                    height: 40,
                    flexShrink: 0,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: displayFontFamily,
                    fontWeight: 600,
                    fontSize: 14,
                  }}
                >
                  {testimonial.initials}
                </Box>
                <Box>
                  <Box
                    component="strong"
                    sx={{ display: 'block', fontSize: 13.5, color: 'brandSurface.heading' }}
                  >
                    {testimonial.name}
                  </Box>
                  <Box component="span" sx={{ fontSize: 12, color: 'text.secondary' }}>
                    {testimonial.location}
                  </Box>
                </Box>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
