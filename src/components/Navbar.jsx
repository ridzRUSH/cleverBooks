import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import crestLogo from "/images/crestLogo.png";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 150) {
      // Scrolling down
      setIsVisible(false);
    } else {
      // Scrolling up
      setIsVisible(true);
    }
    setLastScrollY(latest);
  });

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50 flex items-center   h-20 shadow-md transition-transform duration-300 "
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -80 }} // Assuming nav height is 80px
      transition={{ duration: 0.1, ease: "backInOut" }}
    >
      <div className="flex  items-center px-8 text-sm ">
        <img className=" h-8 m-4 " src={crestLogo} alt="logo of crest " />
        <div className="flex gap-2">
          <span className="md:text-xl hover:text-orange-500">Pricing</span>
          <span className="md:text-xl hover:text-orange-500">Customer</span>
          <span className="md:text-xl hover:text-orange-500">Stories</span>
          <span className="md:text-xl hover:text-orange-500">About</span>
          <span className="md:text-xl hover:text-orange-500">Blog</span>
        </div>
        <div className="flex gap-2 mx-4">
          <button className="xl:text-xl hover:text-orange-500">Login</button>
          <button
            type="button"
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium  md:text-xl rounded-full md:px-5 py-2.5 text-center me-2 mb-2"
          >
            Talk to Us
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
