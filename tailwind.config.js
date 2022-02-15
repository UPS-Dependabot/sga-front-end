module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'background-default': '#D9D4D0',
        'text-primary': '#734743',
        'action-active': '#D94A56',
        'active-inactive': '#D90707'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.3em',
        wider: '.05em',
        widest: '.1em',
        widest: '1.2rem',
      },
      fontFamily: {
        'intro-rust': 'Intro Rust',
      },
    },
    plugins: [],
  }
}
