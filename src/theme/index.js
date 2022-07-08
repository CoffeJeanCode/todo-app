import darkDesktopBackground from "../assets/images/bg-desktop-dark.jpg";
import lightDesktopBackground from "../assets/images/bg-desktop-light.jpg";
import darkMobileBackground from "../assets/images/bg-mobile-dark.jpg";
import lightMobileBackground from "../assets/images/bg-mobile-light.jpg";
import { linearGradient } from "polished";

const generalTheme = {
  gradients: {
    primaryGradient: linearGradient({
      colorStops: ["hsl(192, 100%, 67%)", "hsl(280, 87%, 65%)"],
      toDirection: "150deg",
    }),
  },
  colors: {
    primaryColor: "hsl(220, 98%, 61%)",
    titleColor: "hsl(0, 0%, 98%)",
  },
};

export const darkTheme = {
  ...generalTheme,
  images: {
    desktop: darkDesktopBackground,
    mobile: darkMobileBackground,
  },
  colors: {
    ...generalTheme.colors,
    secondaryColor: "hsl(235, 21%, 11%)",
    auxialiary: "hsl(233, 14%, 35%)",
    fontColor: "hsl(236, 33%, 92%)",
  },
};

export const ligthTheme = {
  ...generalTheme,
  images: {
    desktop: lightDesktopBackground,
    mobile: lightMobileBackground,
  },
  colors: {
    ...generalTheme.colors,
    secondaryColor: "hsl(0, 0%, 98%)",
    auxialiary: "hsl(236, 33%, 92%)",
    fontColor: "hsl(235, 19%, 35%)",
  },
};
