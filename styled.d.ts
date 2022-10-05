import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bgPrimary: string;
      bgSecondary: string;
      bgAlt: string;
      text: string;
    };
    fonts: {
      primary: string;
    };
    spacing: {
      bodyMargin: string;
      navMargin: string;
      mobileMargin: string;
      btnBorderRadius: string;
      borderRadius: string;
    };
    breakPoints: {
      isMobile: string;
      isSmallMobile: string;
      isTablet: string;
      isDesktop: string;
    };
  }
}
