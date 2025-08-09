import React, { useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      backgroundColor: isScrolled ? 'rgba(8, 28, 58, 0.95)' : 'rgba(8, 28, 58, 1)',
      transition: { duration: 0.3 }
    });
  }, [isScrolled, controls]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about'},
    { 
      name: 'Products', 
      path: '/Products',
      subItems: [
        { name: 'VRF', path: '/Products' },
        { name: 'Packaged Unit', path: '/Products' },
        { name: 'Ductable Units', path: '/Products' },
        { name: 'Chiller Units', path: '/Products' },
        { name: 'Customized Air Conditioning Unit', path: '/Products' },
        { name: 'Air Quality Management Sensors, Dehumidifier, Air Purification', path: '/Products' },
        { name: 'Automation', path: '/Products' },
        { name: 'Customized Electrical HT & LT Panel', path: '/Products' },
        { name: 'Spaces & Air Distribution Products', path: '/Products' },
        { name: 'Fabrication', path: '/Products' },
      ]
    },
    { 
      name: 'OEM', 
      path: '/Oem',
      subItems:[
        {name:"Dunhum Bush", path: '/Dunhumbush'},
        {name:"Trane", path: '/Trane'}
      ]
    },
    { name: 'Contact', path: '/Contact' }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
    setMobileExpandedMenu(null);
  };

  const toggleMobileSubmenu = (menuName) => {
    setMobileExpandedMenu(mobileExpandedMenu === menuName ? null : menuName);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    }),
    hover: {
      scale: 1.05,
      color: '#60a5fa',
      transition: { duration: 0.2 }
    }
  };

  const dropdownVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.2,
        staggerChildren: 0.05
      } 
    }
  };

  const dropdownItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header
      className="fixed w-full z-50"
      initial={{ backgroundColor: 'rgba(8, 28, 58, 1)' }}
      animate={controls}
    >
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex cursor-pointer" onClick={() => navigate('/')}>
              <motion.img 
                src='./logogat.png' 
                className='h-15 w-auto'
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                alt="Company Logo"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial="hidden"
            animate="visible"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                whileHover="hover"
                className="relative"
                onMouseEnter={() => link.subItems && setHoveredDropdown(link.name)}
                onMouseLeave={() => link.subItems && setHoveredDropdown(null)}
              >
                <div 
                  className={`text-sm font-medium ${window.location.pathname === link.path ? 'text-blue-300' : 'text-gray-300 hover:text-white'} transition-colors cursor-pointer`}
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                  {window.location.pathname === link.path && (
                    <motion.span 
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-400"
                      layoutId="navUnderline"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>

                {/* Dropdown */}
                {link.subItems && (
                  <AnimatePresence>
                    {hoveredDropdown === link.name && (
                      <motion.div
                        className="absolute left-0 top-full mt-2 w-48 rounded-md shadow-lg bg-blue-900 overflow-hidden"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                      >
                        <div className="py-1">
                          {link.subItems.map((subItem) => (
                            <motion.div
                              key={subItem.name}
                              variants={dropdownItemVariants}
                              whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.5)' }}
                              className="hover:bg-blue-800 transition-colors"
                            >
                              <div
                                className="block px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer"
                                onClick={() => handleNavigation(subItem.path)}
                              >
                                {subItem.name}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-blue-900"
            >
              <div className="pt-2 pb-4 space-y-1">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="px-2">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className={`block w-full px-3 py-2 text-base font-medium ${window.location.pathname === link.path ? 'bg-blue-800 text-white' : 'text-gray-300 hover:text-white hover:bg-blue-800'} transition-colors cursor-pointer rounded-md`}
                          onClick={() => !link.subItems && handleNavigation(link.path)}
                        >
                          {link.name}
                        </div>
                        {link.subItems && (
                          <button
                            onClick={() => toggleMobileSubmenu(link.name)}
                            className="p-2 text-gray-300 hover:text-white"
                          >
                            <svg
                              className={`h-5 w-5 transform ${mobileExpandedMenu === link.name ? 'rotate-180' : ''}`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        )}
                      </div>
                    </motion.div>

                    {/* Mobile Submenu */}
                    {link.subItems && (
                      <AnimatePresence>
                        {mobileExpandedMenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 space-y-1 overflow-hidden"
                          >
                            {link.subItems.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + (subIndex * 0.05), duration: 0.2 }}
                              >
                                <div
                                  className={`block px-3 py-2 text-sm font-medium ${window.location.pathname === subItem.path ? 'bg-blue-700 text-white' : 'text-gray-300 hover:text-white hover:bg-blue-800'} transition-colors rounded-md cursor-pointer`}
                                  onClick={() => handleNavigation(subItem.path)}
                                >
                                  {subItem.name}
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;