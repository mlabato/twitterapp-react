module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "from": { transform: "translateY(-100%)" },
          "to": { transform: "translateY(0%)" },
        },
      },
      animation: {
        'waving-hand': 'wave linear 600ms',
      },
    },
  },
  plugins: [],
};
