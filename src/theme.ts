"use client";

import { alpha, createTheme, PaletteColor } from "@mui/material/styles";

import { bodyFontFamily, displayFontFamily } from "@/fonts";

interface BrandSurfacePalette {
    /** Deep forest green used behind heroes, the footer and photo CTAs. */
    deep: string;
    /** Soft green tint for alternating sections (testimonials, "How We Work"). */
    tint: string;
    /** Stronger tint for icon chips and badges. */
    tintStrong: string;
    /** Heading colour (forest green). */
    heading: string;
    /** Hairline borders on cards, inputs and the header. */
    line: string;
    /** Eyebrow / accent text (maple red). */
    accentText: string;
    /** Eyebrow colour used on top of dark photo heroes. */
    heroAccentText: string;
    /** Left-to-right green overlay laid over hero photos. */
    heroScrim: string;
    /** Translucent header background (backdrop-blurred). */
    headerBg: string;
    cardShadow: string;
    cardShadowHover: string;
}

interface BrandAccentPalette {
    gold: string;
    whatsapp: string;
    whatsappDark: string;
}

declare module "@mui/material/styles" {
    interface Theme {
        getAlphaColor: (
            colorKey: keyof Theme["palette"],
            opacity: number,
            shade?: "light" | "main" | "dark"
        ) => string;
    }
    interface ThemeOptions {
        getAlphaColor?: (
            colorKey: keyof Theme["palette"],
            opacity: number,
            shade?: "light" | "main" | "dark"
        ) => string;
    }
    interface Palette {
        brandSurface: BrandSurfacePalette;
        brandAccent: BrandAccentPalette;
    }
    interface PaletteOptions {
        brandSurface?: BrandSurfacePalette;
        brandAccent?: BrandAccentPalette;
    }
}

// All brand hex values live here, once. Components read them back through
// `var(--mui-palette-*)` (composite CSS such as gradients/shadows) or the
// `'group.key'` sx string-path shorthand (simple colours). Both are safe in
// Server Components. The site is light-only by design — there is no dark mode.
const primary = {
    main: "#0f3d2e", // green-800
    light: "#14503d", // green-700
    dark: "#0c3327", // green-900
    contrastText: "#ffffff",
};


const secondary = {
    main: "#c8352b", // red-600 (maple red)
    light: "#e0574d",
    dark: "#a9291f", // red-700
    contrastText: "#ffffff",
};

const brandAccent: BrandAccentPalette = {
    gold: "#c99a3c",
    whatsapp: "#25D366",
    whatsappDark: "#1ebe5a",
};

const heroScrim =
    "linear-gradient(115deg, rgba(12,51,39,.95) 0%, rgba(12,51,39,.84) 35%, rgba(12,51,39,.5) 62%, rgba(12,51,39,.12) 100%)";

const brandSurface: BrandSurfacePalette = {
    deep: "#0c3327",
    tint: "#f3f8f6", // green-050
    tintStrong: "#e7f0ec", // green-100
    heading: "#0c3327",
    line: "#e4e9e6",
    accentText: "#c8352b",
    heroAccentText: "#ffcfc9",
    heroScrim,
    headerBg: "rgba(252,251,248,0.92)",
    cardShadow: "0 10px 30px rgba(15,61,46,0.12)",
    cardShadowHover: "0 24px 60px rgba(15,61,46,0.18)",
};


const theme = createTheme({
    palette: {
        primary,
        secondary,
        brandAccent,
        brandSurface,
        background: { default: "#fcfbf8", paper: "#ffffff" },
        text: { primary: "#16211c", secondary: "#4b5a53" },
        divider: "#e4e9e6",
    },
    // Emits every palette value as a `--mui-palette-*` CSS variable so composite
    // values (gradients, shadows) can be referenced from sx strings.
    cssVariables: true,
    shape: {
        borderRadius: 14, // --radius-md
    },
    typography: {
        fontFamily: bodyFontFamily,
        h1: { fontFamily: displayFontFamily, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em" },
        h2: { fontFamily: displayFontFamily, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.01em" },
        h3: { fontFamily: displayFontFamily, fontWeight: 600, lineHeight: 1.2 },
        h4: { fontFamily: displayFontFamily, fontWeight: 600, lineHeight: 1.25 },
        h5: { fontFamily: displayFontFamily, fontWeight: 600 },
        h6: { fontFamily: displayFontFamily, fontWeight: 600 },
        button: { fontFamily: displayFontFamily, fontWeight: 600, textTransform: "none" },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                // 1180px content width + 24px gutters, matching the static site's --container.
                maxWidthLg: { "@media (min-width: 1200px)": { maxWidth: 1228 } },
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    fontSize: 15,
                    padding: "12px 26px",
                    borderWidth: 1.5,
                    whiteSpace: "nowrap",
                    transition: "transform .18s ease, box-shadow .18s ease, background .18s ease, color .18s ease",
                    "&:hover": { transform: "translateY(-2px)" },
                },
                sizeSmall: {
                    fontSize: 13.5,
                    padding: "8px 18px",
                },
                outlined: {
                    borderWidth: 1.5,
                    "&:hover": { borderWidth: 1.5 },
                },
            },
        },
    },
});

theme.getAlphaColor = (colorKey, opacity, shade = "main") => {
    const color = theme.palette[colorKey] as PaletteColor;
    return color ? alpha(color[shade], opacity) : "";
};

export default theme;
