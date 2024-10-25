import { FaCaretDown, FaCaretLeft, FaCaretRight } from "react-icons/fa";

export const slideButtons = [
  {
    id: 1,
    direction: "left",
    content: "About",
    toggle: "LEFT",
    icon: FaCaretLeft,
  },
  {
    id: 2,
    direction: "bottom",
    content: "Portfolio",
    toggle: "BOTTOM",
    icon: FaCaretDown,
  },
  {
    id: 3,
    direction: "right",
    content: "Contact",
    toggle: "RIGHT",
    icon: FaCaretRight,
  },
];
