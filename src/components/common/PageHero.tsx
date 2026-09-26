import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import AppLink from '@/components/common/AppLink';
import Eyebrow from '@/components/common/Eyebrow';

interface PageHeroProps {
  tag: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Background photo under the green overlay, e.g. `/assets/hero/hero-about.webp`. */
  image: string;
  /** Breadcrumb label for the current page, shown after "Home". */
  breadcrumb: string;
}

/**
 * Inner-page hero (`.site-hero.hero-page`): background photo, green gradient
 * overlay, eyebrow, title, subtitle and a Home › Page breadcrumb.
 */
export default function PageHero({ tag, title, subtitle, image, breadcrumb }: PageHeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: '#fff',
        bgcolor: 'brandSurface.deep',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: '120px', md: '150px' },
        pb: { xs: '64px', md: '84px' },
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'var(--mui-palette-brandSurface-heroScrim)',
        },
      }}
    >
      <Container sx={{ position: 'relative' }}>
        <Eyebrow tone="onDark">{tag}</Eyebrow>
        <Typography
          variant="h1"
          sx={{ fontSize: 'clamp(30px, 4vw, 44px)', color: '#fff', mb: 1.25, maxWidth: 760 }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography sx={{ maxWidth: 520, fontSize: 15.5, color: 'rgba(255,255,255,.82)' }}>
            {subtitle}
          </Typography>
        )}
        <Box
          component="nav"
          aria-label="Breadcrumb"
          sx={{ display: 'flex', alignItems: 'center', gap: 1, fontSize: 13, color: 'rgba(255,255,255,.65)', mt: 2 }}
        >
          <AppLink href="/" sx={{ color: 'inherit', '&:hover': { color: '#fff' } }}>
            Home
          </AppLink>
          <ChevronRightRoundedIcon sx={{ fontSize: 14 }} />
          <Box component="span" aria-current="page">
            {breadcrumb}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
