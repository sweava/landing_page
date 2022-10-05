import { DefaultTheme } from "styled-components";

const defaultTheme: DefaultTheme = {
  colors: {
    primary: "#FFFFFF",
    secondary: "#5956E9",
    bgPrimary: "#FAB8C3",
    bgSecondary: "#FFDC5F",
    bgAlt:
      "linear-gradient(72.77deg, #EDEEF6 11.72%, rgba(237, 238, 246, 0) 98.52%)",
    text: "#000000",
  },
  fonts: {
    primary: "'Raleway', sans-serif",
  },
  spacing: {
    bodyMargin: "11rem",
    navMargin: "11rem",
    mobileMargin: "1.875rem",
    btnBorderRadius: "0.625rem",
    borderRadius: "3.125rem",
  },
  breakPoints: {
    isMobile: "650px",
    isSmallMobile: "500px",
    isTablet: "900px",
    isDesktop: "1280px",
  },
};

export { defaultTheme };
