import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
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
    id: "",
    title: "Home",
    icon: <GiPlayerBase />,
    path: "/",
    component: <Home />,
  },
  {
    id: "profile",
    title: "My Profile",
    icon: <GiInfo />,
    path: "/profile",
    component: <Profile />,
  },
  {
    id: "skills",
    title: "Skills",
    icon: <GiSwordman />,

    path: "/skills",
    component: <Skills />,
  },
  {
    id: "projects",
    title: "Projects",
    icon: <GiScrollUnfurled />,
    path: "/projects",
    component: <Projects />,
  },
  {
    id: "contact",
    title: "Contact",
    icon: <GiRotaryPhone />,
    path: "/contact",
    component: <Contact />,
  },
  {
    id: "blog",
    title: "Blog",
    icon: <GiRotaryPhone />,
    path: "/blog",
    component: <Blog />,
  },
  {
    id: "about",
    title: "About",
    icon: <GiRotaryPhone />,
    path: "/about",
    component: <About />,
  },

];

export default navigationConfig;
