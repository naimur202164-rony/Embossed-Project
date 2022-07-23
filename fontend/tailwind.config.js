module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992ppx",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      height: {
        height: "580px",
      },
      width: {
        width: "574px",
        width1: "460px",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        face: "#3b5999",
        google: "#d85040",
        primary: "#FD3D57",
        twitter: "#1b93e4",
        facebook: "#3356a0",
        instagram: "#d53982",
        orange: "#FFBA5A",
        grey: "#a9a9a9",
      },
      backgroundImage: {
        bgImage:
          "url('http://rafcart.rslahmed.com/assets/images/banner-1.jpg')",
        bgImage2: "url('https://i.ibb.co/8gvBJ95/contact-banner.jpg')",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      visibility: ["group-hover"],
      backgroundColor: ["active"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
