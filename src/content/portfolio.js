import TitanFlowDesktop from "../components/image_files/TitanFlowDesktop";
import TitanFlowUIiPad from "../components/image_files/TitanFlowUIiPad";
import TitanFlowUIDesktop from "../components/image_files/TitanFlowUIDesktop";
import TitanFlowMobile from "../components/image_files/TitanFlowMobile";

import InscopeDesktop from "../components/image_files/InscopeDesktop";
import InscopeMobile from "../components/image_files/InscopeMobile";
import InscopeTilesDesktop from "../components/image_files/InscopeTilesDesktop";

import WeatherDashboardDesktop from "../components/image_files/WeatherDashboardDesktop";
import WeatherDashboardFeatures from "../components/image_files/WeatherDashboardFeatures";
import WeatherDashboardSearch from "../components/image_files/WeatherDashboardSearch";
import WeatherDashboardMobile from "../components/image_files/WeatherDashboardMobile";

import TeeTimeMobile from "../components/image_files/TeeTimeMobile";
import TeeTimeChat from "../components/image_files/TeeTimeChat";
import TeeTimeNewMatch from "../components/image_files/TeeTimeNewMatch";
import TeeTimeScoreboard from "../components/image_files/TeeTimeScoreboard";

const portfolioContent = [
    {
        name: "Weather Dashboard",
        description: "A weather web application that displays the current weather, hourly weather, and five-day forecast of your current, searched, or saved location.",
        deployed: {
            link: "https://weather-dashboard-app.herokuapp.com/",
            text: "Visit Deployed App",
        },
        github: {
            link: "https://github.com/austenpturner/weather-dashboard",
            text: "View Code On GitHub",
        },
        tools: [
            "JavaScript & Sass",
            "React",
            "Local Storage",
            "Geolocation",
            "OpenWeather API",
            "GitHub & Heroku"
        ],
        featuredImg: WeatherDashboardDesktop,
        mobileImg: WeatherDashboardMobile,
        supportingImgs: [
            {
                img: WeatherDashboardFeatures,
                size: "desktop",
            },
            {
                img: WeatherDashboardSearch,
                size: "mobile",
            }
        ],
    },
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
        mobileImg: TitanFlowMobile,
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
        mobileImg: InscopeMobile,
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
    {
        name: "Tee Time",
        description: "A free and social golf app for desktop and Android. Create an account, start a new match, then chat and keep score with your friends while on the green.",
        deployed: {
            link: "https://tee-time-seattle.herokuapp.com/",
            text: "Visit Deployed App",
        },
        github: {
            link: "https://github.com/E-Bossler/tee-time",
            text: "View Code On GitHub",
        },
        tools: [
            "JavaScript & Sass",
            "React & React Native",
            "MongoDB",
            "ExpressJS & NodeJS",
            "Socket.io",
            "GitHub & Heroku"
        ],
        featuredImg: TeeTimeNewMatch,
        mobileImg: TeeTimeMobile,
        supportingImgs: [
            {
                img: TeeTimeScoreboard,
                size: "desktop",
            },
            {
                img: TeeTimeMobile,
                size: "mobile",
            }
        ],
    },
];

export default portfolioContent;