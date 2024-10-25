import {
  BsArrowBarDown,
  BsArrowBarLeft,
  BsArrowBarRight,
} from "react-icons/bs";
// import { FaCaretDown, FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const slideButtons = [
  {
    id: 1,
    direction: "left",
    content: "About",
    toggle: "LEFT",
    // icon: FaCaretLeft,
    icon: BsArrowBarLeft,
  },
  {
    id: 2,
    direction: "bottom",
    content: "Portfolio",
    toggle: "BOTTOM",
    // icon: FaCaretDown,
    icon: BsArrowBarDown,
  },
  {
    id: 3,
    direction: "right",
    content: "Contact",
    toggle: "RIGHT",
    // icon: FaCaretRight,
    icon: BsArrowBarRight,
  },
];
