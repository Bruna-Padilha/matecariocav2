import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "cardapio", Component: Menu },
      { path: "galeria", Component: Gallery },
    ],
  },
], {
  basename: "/matecariocav2" 
});