// Use of AppLayout and Outlet
// Considerung the fact that the Navbar has to appear across multiple pages
// Consistent component, i set it to be the default applayout (Shared page structure / Reusable)
// Now the Outlet represents the Child component
// The matching child component will be rendered there

// Why use this approach
// Much scalable assuming the app expands into something bigger
// System thinking and design approach


import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";


import NavBar from "../components/navBar";



const ScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return null;
};

const AppLayout = () => {
  return (
    <>
      <ScrollTop />

      <NavBar />

      <AnimatePresence mode="wait">
        <main>
          <Outlet />
        </main>
      </AnimatePresence>
    </>
  );
};

export default AppLayout;