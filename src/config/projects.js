import pacificTherapyDesktop from "../assets/healthcare-mockup-screenshots/pacificTherapy-landing.png";
import pacificTherapyIpad from "../assets/healthcare-mockup-screenshots/pacificTherapyiPad-OurServices.png";
import shoppingCartDesktop from "../assets/react-shopping-cart-screenshots/reactCart-favorites.png";
import shoppingCartIpad from "../assets/react-shopping-cart-screenshots/reactCartiPad-cart.png";
import liveScheduleDesktop from "../assets/jim-basnight-music/liveScheduleDesktop.jpg";
import discographyiPad from "../assets/jim-basnight-music/discographyiPad.jpg";

export const projects = [
  {
    id: 1,
    title: "React Shopping Cart",
    description:
      "A shopping cart app with user authentication built with React, Sass, Redux, and Firestore.",
    link: "https://austenpturner.github.io/react-shopping-cart-2.0/",
    repo: "https://github.com/austenpturner/react-shopping-cart-2.0",
    desktopImage: shoppingCartDesktop,
    iPadImage: shoppingCartIpad,
  },
  {
    id: 2,
    title: "Jim Basnight Music",
    description:
      "Website built for local musician using Next.js and Contentful.",
    link: "https://jimbasnightmusic.com",
    repo: "",
    desktopImage: liveScheduleDesktop,
    iPadImage: discographyiPad,
  },
  {
    id: 3,
    title: "Pacific Therapy",
    description:
      "An example website mockup built with React and styled with Sass.",
    link: "https://austenpturner.github.io/healthcare-website-mockup/",
    repo: "https://github.com/austenpturner/healthcare-website-mockup",
    desktopImage: pacificTherapyDesktop,
    iPadImage: pacificTherapyIpad,
  },
];
