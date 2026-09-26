import * as React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafRoundedIcon from '@mui/icons-material/EnergySavingsLeafRounded';

import ScrollReveal from '@/components/common/ScrollReveal';

/** Outlined Calgary skyline that sits in the banner's bottom-right corner. */
function Skyline() {
  return (
    <Box
      component="svg"
      viewBox="0 0 400 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      sx={{
        position: 'absolute',
        right: -10,
        bottom: -6,
        opacity: 0.5,
        width: '42%',
        maxWidth: 380,
        display: { xs: 'none', md: 'block' },
      }}
    >
      <g stroke="rgba(255,255,255,.6)" strokeWidth="1.5" fill="none">
        <rect x="10" y="70" width="24" height="80" />
        <rect x="42" y="50" width="20" height="100" />
        <rect x="70" y="90" width="26" height="60" />
        <rect x="104" y="30" width="18" height="120" />
        <line x1="113" y1="10" x2="113" y2="30" />
        <circle cx="113" cy="20" r="6" />
        <rect x="130" y="60" width="22" height="90" />
        <rect x="160" y="40" width="16" height="110" />
        <rect x="184" y="75" width="24" height="75" />
        <rect x="216" y="55" width="20" height="95" />
        <rect x="244" y="20" width="18" height="130" />
        <rect x="270" y="85" width="26" height="65" />
        <rect x="304" y="45" width="20" height="105" />
        <rect x="332" y="65" width="22" height="85" />
        <rect x="362" y="35" width="18" height="115" />
      </g>
    </Box>
  );
}

/** The deep-green "Proudly Serving Calgary" strip between Services and Why Choose Us. */
export default function BannerStrip() {
  return (
    <Container component="section">
      <ScrollReveal
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '24px',
          px: { xs: 3.5, md: 5.5 },
          py: 5,
          color: '#fff',
          bgcolor: 'primary.main',
          backgroundImage:
            'radial-gradient(1200px 200px at 90% 0%, rgba(255,255,255,.06), transparent)',
          display: 'flex',
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 3.75,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 2.25,
            maxWidth: 560,
          }}
        >
          <EnergySavingsLeafRoundedIcon sx={{ fontSize: 34, color: 'secondary.main', flexShrink: 0 }} />
          <Box>
            <Typography variant="h3" sx={{ color: '#fff', fontSize: 20, mb: 0.5 }}>
              Proudly Serving Calgary &amp; Surrounding Areas
            </Typography>
            <Typography sx={{ fontSize: 14, color: 'rgba(255,255,255,.78)' }}>
              Supporting our local community with honest, dependable, and quality workmanship.
            </Typography>
          </Box>
        </Box>
        <Skyline />
      </ScrollReveal>
    </Container>
  );
}
