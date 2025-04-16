import About from "@/pages/About";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";


const navigationConfig = [
  {
    id: "",
    title: "Home",
    path: "/",
    component: <Home />,
  },
  {
    id: "profile",
    title: "My Profile",
    path: "/profile",
    component: <Profile />,
  },
  {
    id: "skills",
    title: "Skills",
    path: "/skills",
    component: <Skills />,
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
    component: <Projects />,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    component: <Contact />,
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
    component: <Blog />,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    component: <About />,
  },
];

export default navigationConfig;
