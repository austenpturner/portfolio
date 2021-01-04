import TitanFlowDesktop from "../components/image_files/TitanFlowDesktop";
import TitanFlowUIiPad from "../components/image_files/TitanFlowUIiPad";
import TitanFlowUIDesktop from "../components/image_files/TitanFlowUIDesktop";
import InscopeDesktop from "../components/image_files/InscopeDesktop";
import InscopeMobile from "../components/image_files/InscopeMobile";
import InscopeTilesDesktop from "../components/image_files/InscopeTilesDesktop";

const portfolioContent = [
    {
        name: "TitanFlow Website",
        description: "A responsive, mobile-first website for TitanFlow's stock options trading app built using Gatsby, React and Sass.",
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
            {
                img: TitanFlowUIDesktop,
                size: "desktop",
            },
            {
                img: TitanFlowUIiPad,
                size: "iPad",
            },
        ],
    },
    {
        name: "Inscope Website",
        description: "A website designed and built for a Inscope, a sales & recruiting platform, using a responsive layout, CSS animations and Gatsby.",
        deployed: {
            link: "https://inscope.ai",
            text: "Visit Inscope.ai",
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
        featuredImg: InscopeDesktop,
        supportingImgs: [
            {
                img: InscopeTilesDesktop,
                size: "desktop",
            },
            {
                img: InscopeMobile,
                size: "mobile",
            }
        ],
    },
];

export default portfolioContent;