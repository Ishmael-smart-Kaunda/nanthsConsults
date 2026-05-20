// Dedicated routing file
// Centralized routes make it easier for:
// Debugging, Scale, Visualize the app, and manage nested layouts
// Plus its better for lazy loading

import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import AppLayout from "./layouts/AppLayout";



const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: AppLayout,
            children: [
                {index: true, Component: Home}
            ]   
        }
    ]
)

export default router