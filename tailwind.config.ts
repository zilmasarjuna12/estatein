import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobile': "320px",
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px'
    },
    colors: {
      white: "#fff",
      black: "#000",
      purples: {
        60: "#703BF7",
        65: "#8254F8",
        70: "#946CF9",
        75: "#A685FA",
        90: "#DBCEFD",
        95: "#EDE7FE",
        97: "#F4F0FE",
        99: "#FBFAFF"
      },
      light: {
        90: "#E4E4E7",
        95: "#F1F1F3",
        97: "#F7F7F8",
        99: "#FCFCFD"
      },
      grey: {
        8: "#141414",
        10: "#1A1A1A",
        15: "#262626",
        20: "##333333",
        30: "#4D4D4D",
        40: "#666666",
        50: "#808080",
        60: "#999999"
      }
    },
    extend: {
      fontFamily: {
        "urbanist-regular": ["urbanist-regular","sans"],
        "urbanist-bold": ["urbanist-bold","sans"],
        "urbanist-semibold": ["urbanist-semibold","sans"],
        "urbanist-medium": ["urbanist-medium","sans"],
      }
    },
  },
  plugins: [],
}
export default config
