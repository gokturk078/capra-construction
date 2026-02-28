import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        slate: "var(--color-slate)",
        steel: "var(--color-steel)",
        stone: "var(--color-stone)",
        cloud: "var(--color-cloud)",
        copper: "var(--color-copper)",
        "copper-light": "var(--color-copper-light)",
        "copper-dark": "var(--color-copper-dark)",
        "surface-primary": "var(--color-surface-primary)",
        "surface-secondary": "var(--color-surface-secondary)",
        "surface-muted": "var(--color-surface-muted)",
        "surface-page": "var(--color-surface-page)",
        "surface-card": "var(--color-surface-card)",
        "surface-inverse": "var(--color-ink)",
        "nav-solid": "var(--color-nav-solid)",
        "nav-border": "var(--color-nav-border)",
        "border-subtle": "var(--color-border-subtle)",
        accent: "var(--color-copper)",
        "accent-muted": "var(--color-copper-dark)",
        "text-strong": "var(--color-text-strong)",
        "text-soft": "var(--color-text-muted)",
        "brand-black": "var(--color-ink)",
        obsidian: "var(--color-slate)",
        charcoal: "var(--color-steel)",
        gold: "var(--color-copper)",
        "gold-light": "var(--color-copper-light)",
        "gold-dim": "var(--color-copper-dark)",
        "text-primary": "var(--color-cloud)",
        "text-secondary": "var(--color-stone)",
        "text-muted": "var(--color-muted)",
        success: "var(--color-success)",
        error: "var(--color-error)"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "sans-serif"]
      },
      maxWidth: {
        shell: "1440px"
      },
      boxShadow: {
        glow: "0 18px 40px rgba(15, 23, 32, 0.12)",
        card: "0 14px 36px rgba(15, 23, 32, 0.08)"
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at top right, rgba(122, 76, 43, 0.08), transparent 38%), radial-gradient(circle at bottom left, rgba(49, 67, 84, 0.1), transparent 34%)",
        grain:
          "linear-gradient(135deg, rgba(255,255,255,0.02), transparent), radial-gradient(circle at 20% 20%, rgba(49,67,84,0.04), transparent 45%)"
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "marquee-reverse": "marquee 50s linear infinite reverse",
        float: "float 2.4s ease-in-out infinite",
        shimmer: "shimmer 2.2s cubic-bezier(0.22, 1, 0.36, 1) infinite"
      }
    }
  },
  plugins: []
};

export default config;
