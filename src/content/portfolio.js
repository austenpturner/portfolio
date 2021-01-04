import TitanFlowDesktop from "../components/image_files/TitanFlowDesktop";
import TitanFlowUIiPad from "../components/image_files/TitanFlowUIiPad";
import TitanFlowUIDesktop from "../components/image_files/TitanFlowUIDesktop";

const portfolioContent = [
    {
        name: "TitanFlow Website",
        description: "A responsive, mobile-first website for TitanFlow's stock options trading app built using Gatsby and React.",
        deployed: {
            link: "https://titanflow.io",
            text: "Visit TitanFlow.io",
        },
        github: {
            link: "",
            text: "",
        },
        tools: [
            "Gatsby",
            "GraphQL",
            "React & JSX",
            "NodeJS & NPM",
            "Modular Sass",
            "GitHub Pages"
        ],
        featuredImg: TitanFlowDesktop,
        supportingImgs: [
            TitanFlowUIDesktop,
            TitanFlowUIiPad,
        ],
    },
];

export default portfolioContent;