import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

/* keep this outside so it isn't recreated on every render */
const menuItems = [
  { name: 'About us',      href: '#about' },
  { name: 'Services',      href: '#services' },
  { name: 'Use Cases',     href: '#use-cases' },
  { name: 'Testimonials',  href: '#testimonials' },
  { name: 'Contact',  href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleMenuClick = (name) => {
    setActiveItem(name);
    setIsOpen(false);
  };

  /* highlight menu item while scrolling */
  useEffect(() => {
    const sections = menuItems.map((item) => document.querySelector(item.href));

    const handleScroll = () => {
      const midScreen = window.scrollY + window.innerHeight / 2;
      let currentSection = '';

      sections.forEach((section) => {
        if (
          section &&
          section.offsetTop < midScreen &&
          section.offsetTop + section.offsetHeight > midScreen
        ) {
          currentSection = section.id;
        }
      });

      setActiveItem(
        menuItems.find((item) => item.href === `#${currentSection}`)?.name || ''
      );
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();            // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);                       // ← no deps needed

  return (
    <nav className="fixed top-0 right-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8" />
            <h1 className="font-bold text-2xl">Codeware</h1>
          </a>

          {/* desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`px-2 text-black transition-all duration-300 rounded hover:bg-primary hover:underline underline-offset-4
                  ${activeItem === item.name ? 'bg-primary underline underline-offset-4' : ''}`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://whatsform.com/BncPgG"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-black rounded-md transition-all duration-300 hover:bg-primary hover:border-primary"
            >
              Request a demo
            </a>
          </div>

          {/* mobile burger */}
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            className="md:hidden text-gray-700 hover:text-primary focus:outline-none"
          >
            {isOpen ? (
              <MdOutlineClose className="size-6" />
            ) : (
              <HiOutlineMenuAlt3 className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleMenuClick(item.name)}
                className={`block px-2 text-black transition-all duration-300 rounded hover:bg-primary hover:underline underline-offset-4
                  ${activeItem === item.name ? 'text-primary' : ''}`}
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://whatsform.com/BncPgG"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 border border-black rounded-md transition-all duration-300 hover:bg-primary hover:border-primary"
            >
              Request a demo
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
