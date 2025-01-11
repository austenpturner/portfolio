import pacificTherapyDesktop from "../assets/healthcare-mockup-screenshots/pacificTherapy-landing.png";
import pacificTherapyIpad from "../assets/healthcare-mockup-screenshots/pacificTherapyiPad-OurServices.png";
import shoppingCartDesktop from "../assets/react-shopping-cart-screenshots/reactCart-favorites.png";
import shoppingCartIpad from "../assets/react-shopping-cart-screenshots/reactCartiPad-cart.png";

export const projects = [
  {
    id: 1,
    title: "React Shopping Cart",
    description:
      "A shopping app with user authentication built with React, Redux, and Firebase.",
    link: "https://austenpturner.github.io/react-shopping-cart-2.0/",
    desktopImage: shoppingCartDesktop,
    iPadImage: shoppingCartIpad,
  },
  {
    id: 2,
    title: "Pacific Therapy",
    description:
      "An example website mockup built with React and styled with Sass.",
    link: "https://austenpturner.github.io/healthcare-website-mockup/",

    desktopImage: pacificTherapyDesktop,
    iPadImage: pacificTherapyIpad,
  },
];
