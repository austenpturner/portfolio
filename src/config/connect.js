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
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/austenpturner/",
  },
  {
    id: 2,
    name: "Email",
    icon: MdOutlineMail,
    link: `mailto:${email}@${carrier}`,
  },
];
