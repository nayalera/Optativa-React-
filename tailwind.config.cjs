/** @type {import('tailwindcss').Config} */

// Breakpoint	Class infix	Dimensions
// X-Small	None	<576px
// Small	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    prefix: "tw-",
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        colors: {
            white: "#fff",
            "black-main": "#0B0D17",
            black: "#000",
            "white-purple": "#D0D6F9",
        },
        extend: {
            fontFamily: {
                sans: ["Bellefair", "serif"],
                Bellefair: ["Bellefair", "serif"],
                Barlow: ['"Barlow Condensed"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
