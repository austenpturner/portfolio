import { FaArrowAltCircleDown, FaArrowAltCircleLeft } from "react-icons/fa";
import About from "../components/about";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import { FaCircleArrowRight } from "react-icons/fa6";

export const slides = [
  {
    id: 1,
    direction: "left",
    content: About,
    className: "leftSlide",
    button: {
      type: "closeLeft",
      icon: FaCircleArrowRight,
      actionDirection: "LEFT",
    },
  },
  {
    id: 2,
    direction: "bottom",
    content: Portfolio,
    className: "bottomSlide",
    button: {
      type: "closeBottom",
      icon: FaArrowAltCircleDown,
      actionDirection: "BOTTOM",
    },
  },
  {
    id: 3,
    direction: "right",
    content: Contact,
    className: "rightSlide",
    button: {
      type: "closeRight",
      icon: FaArrowAltCircleLeft,
      actionDirection: "RIGHT",
    },
  },
];
