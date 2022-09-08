module.exports = {
  content: ["./src/**/*.html"],
  safelist: ["is-sticky"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "serif"],
        playfair: ["Playfair Display", "serif"],
        roboto: ["Roboto", "serif"],
      },

      colors: {
        sky: {
          200: "#fffaef",
          100: "#effafa",
        },
        white: "#fff",
        orange: "#fc6539",
        primary: "#06264b",
        secondary: "",
        dark: "#1f2226",
        gray: {
          DEFAULT: "#f9f5f4",
          light: "#f6f6f6",
          700: "#f7f7f7",
          600: "#e5e5e5",
          500: "#666666",
          400: "#f8f8f8",
          300: "#f1f1f1",
          200: "#fbfbfb",
          100: "#f7f2f1",
        },
        facebook: "#3b5999",
        twitter: "#55acee",
        dribbble: "#ea4c89",
        pinterest: "#bd081c",
        instagram: "#c32aa3",
      },

      fontSize: {
        sm: "14px",
        base: "16px",
        md: "20px",
        lg: "24px",
        xl: "45px",
        "2xl": "70px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        12: "3rem",
      },

      translate: {
        "translate-x-full-120": "120%",
      },
      rotate: {
        115: "115deg",
      },
      boxShadow: {
        DEFAULT: "0 0 20px .4px rgba(0,0,0,.1)",
        deal: "0 10px 30px 0 rgba(209,209,209,.5)",
        product: "0 4px 10px rgba(0,0,0,.1)",
        sticky: "0 0 25px 0 rgba(0,0,0,.06)",
      },

      height: {
        "1px": "1px",
        "2px": "2px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        800: "800px",
        "sm-b-h": "365px",
      },
      maxWidth: {
        1000: "1000px",
      },
      outline: {
        blue: ["2px solid red", "1px"],
      },
      keyframes: {
        fadeInLeft: {
          "0%": {
            opacity: "0",
            transform: "translate3d(-100px, 0, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInDown: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100px, 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translate3d(100px,0 , 0)",
          },
          to: {
            opacity: "1",
            transform: "none",
          },
        },
      },

      animation: {
        fadeInLeft: "fadeInLeft 1.3s ease-in-out",
        fadeInRight: "fadeInRight 1.3s ease-in-out",
        fadeInDown: "fadeInDown 0.7s ease-in-out 0s normal none 1 running",
      },

      flex: {
        30: "0 0 30%",
      },
    },

    pseudo: {
      before: "before",
      after: "after",
      "not-first": "not(:first-child)",
    },

    listStyleType: {
      circle: "circle",
    },
  },

  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1170px",
          },
        },
      });
    },
    require("tailwindcss-pseudo")({
      empty: true,
    }),
  ],
};
