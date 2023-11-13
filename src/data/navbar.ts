import { NavbarMenu } from "~/types"

// Navbar list
const dataNavbar: NavbarMenu[] = [
  {
    activeColor: "#828da6",
    name: "menu.home",
    to: "/",
  },
  {
    activeColor: "#828da6",
    name: "menu.childrenClubs",
    to: "/clubs",
  },
  {
    activeColor: "#828da6",
    name: "menu.workshops",
    to: "/workshops",
  },
  {
    activeColor: "#828da6",
    name: "menu.trainingAndProjects",
    to: "/trainings",
  },
  {
    activeColor: "#caa5e6",
    name: "menu.whoAmI",
    to: "/whoami",
  },
  {
    activeColor: "#25d1bc",
    name: "menu.contact",
    to: "/contact",
  },
]

export { dataNavbar }
