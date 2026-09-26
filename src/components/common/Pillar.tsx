import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { SvgIconComponent } from '@mui/icons-material';

interface PillarProps {
  Icon: SvgIconComponent;
  title: React.ReactNode;
  children: React.ReactNode;
}

/**
 * The bordered card with a tinted red icon tile (`.pillar` on the static site),
 * used for the About page's Vision/Values/Promise and How We Work steps.
 */
export default function Pillar({ Icon, title, children }: PillarProps) {
  return (
    <Box
      sx={{
        height: '100%',
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        px: 3,
        py: 3.5,
      }}
    >
      <Box
        sx={{
          width: 50,
          height: 50,
          mb: 2,
          borderRadius: 1.5,
          bgcolor: 'rgba(200,53,43,.08)',
          color: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon sx={{ fontSize: 22 }} />
      </Box>
      <Typography variant="h4" sx={{ fontSize: 16.5, color: 'brandSurface.heading', mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: 14, color: 'text.secondary' }}>{children}</Typography>
    </Box>
  );
}
