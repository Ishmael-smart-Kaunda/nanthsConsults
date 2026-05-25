// Dedicated routing file
// Centralized routes make it easier for:
// Debugging, Scale, Visualize the app, and manage nested layouts
// Plus its better for lazy loading

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layouts/AppLayout";

import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";
import Services from "./pages/services";
import ServiceDetails from "./pages/ServiceDetails";




const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AppLayout,
            children: [
                {index: true, Component: Home},
                {path: "/services", Component: Services},
                {path: "/blog", Component: Blog},
                {path: "/about", Component: About},
                {path: "/services/:serviceId", Component: ServiceDetails}
            ]   
        },
        {path: "/contact", Component: Contact},
    ]
)

export default router