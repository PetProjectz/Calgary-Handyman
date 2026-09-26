import * as React from 'react';

import Typography from '@mui/material/Typography';

import { displayFontFamily } from '@/fonts';

interface EyebrowProps {
  children: React.ReactNode;
  /** `onDark` uses the soft pink accent shown on top of photo heroes. */
  tone?: 'default' | 'onDark';
  align?: 'left' | 'center';
}

/** The small uppercase red label with a leading dash (`.eyebrow` on the static site). */
export default function Eyebrow({ children, tone = 'default', align = 'left' }: EyebrowProps) {
  const color = tone === 'onDark' ? 'brandSurface.heroAccentText' : 'brandSurface.accentText';

  return (
    <Typography
      component="p"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        gap: 1,
        fontFamily: displayFontFamily,
        fontSize: 12.5,
        fontWeight: 600,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color,
        mb: 1.5,
        '&::before': {
          content: '""',
          width: 22,
          height: 2,
          bgcolor: color,
          display: 'inline-block',
        },
      }}
    >
      {children}
    </Typography>
  );
}
