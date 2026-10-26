import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { pine: "#24382C", bark: "#6B4A2B", sawdust: "#E9EDE6", amber: "#E0A526", ink: "#1C2620" },
      fontFamily: { head: ["var(--font-head)"], body: ["var(--font-body)"] },
    },
  },
} satisfies Config;
