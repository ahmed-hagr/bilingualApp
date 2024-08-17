  import { useEffect, useState } from "react";
  import Navbar from "./Navbar";
  import Sidebar from "./Sidebar";
  import { useMediaQuery } from "react-responsive";

  const ParentNav = () => {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 1024px)" });
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
      setHasMounted(true);
      setIsSidebarOpen(!isSmallScreen);
    }, [isSmallScreen]);

    if (!hasMounted) {
      return null; 
    }

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebarOnLinkClick = () => {
      if (isSmallScreen) {
        setIsSidebarOpen(false);
      }
    };

    return (
      <div>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar closeSidebar={closeSidebarOnLinkClick} isSidebarOpen={isSidebarOpen} />
      </div>
    );
  };

  export default ParentNav;
