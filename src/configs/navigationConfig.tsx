import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";

import {
  GiPlayerBase,
  GiSwordman,
  GiScrollUnfurled,
  GiInfo,
  GiRotaryPhone,
} from "react-icons/gi";

const navigationConfig = [
  {
    key: "home",
    title: "Home",
    icon: <GiPlayerBase />,
    path: "/",
    component: <Home />,
  },
  {
    key: "about",
    title: "About me",
    icon: <GiInfo />,
    path: "/about",
    component: <About />,
  },
  {
    key: "skills",
    title: "Skills",
    icon: <GiSwordman />,

    path: "/skills",
    component: <Skills />,
  },
  {
    key: "projects",
    title: "Projects",
    icon: <GiScrollUnfurled />,
    path: "/projects",
    component: <Projects />,
  },
  {
    key: "contact",
    title: "Contact",
    icon: <GiRotaryPhone />,
    path: "/contact",
    component: <Contact />,
  },
];

export default navigationConfig;
