/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--bg-primary)",
        bgCard: "var(--bg-card)",
        accentTeal: "var(--accent-teal)",
        accentViolet: "var(--accent-violet)",
        accentAmber: "var(--accent-amber)",
        textPrimary: "var(--text-primary)",
        textMuted: "var(--text-muted)",
        borderGlow: "var(--border-glow)",
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
