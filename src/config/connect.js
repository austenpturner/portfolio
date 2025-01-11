import { FaCodepen, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";

const email = "austenpturner";
const carrier = "msn.com";

export const socials = [
  {
    id: 1,
    name: "GitHub",
    icon: FaGithub,
    link: "https://github.com/austenpturner",
  },
  {
    id: 2,
    name: "CodePen",
    icon: FaCodepen,
    link: "https://codepen.io/austenpturner",
  },
  {
    id: 3,
    name: "Frontend Mentor",
    icon: SiFrontendmentor,
    link: "https://www.frontendmentor.io/profile/austenpturner",
  },
];

export const contact = [
  {
    id: 1,
    name: "Email",
    text: "send me a message",
    link: `mailto:${email}@${carrier}`,
  },
  {
    id: 2,
    name: "LinkedIn",
    text: "find me on LinkedIn",
    link: "https://www.linkedin.com/in/austenpturner/",
  },
];
