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
    auxialiary1: "hsl(235, 24%, 19%)",
    auxialiary2: "hsl(234, 39%, 85%)",
    auxialiary3: "hsl(236, 33%, 92%)",
    auxialiary4: "hsl(234, 11%, 52%)",
    auxialiary5: "hsl(233, 14%, 35%)",
    auxialiary6: "hsl(237, 14%, 26%)",
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
    auxialiary1: "hsl(236, 33%, 92%)",
    auxialiary2: "hsl(233, 11%, 84%)",
    auxialiary3: "hsl(236, 9%, 61%)",
    auxialiary4: "hsl(235, 19%, 35%)",
  },
};
