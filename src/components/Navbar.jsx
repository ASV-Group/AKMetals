import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const navLinks = [
  { label: 'Home / Profile', path: '/' },
  { label: 'GST Compliance', path: '/gst-compliance' },
  { label: 'Hamari Services', path: '/services' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handlePrint = () => {
    window.print();
  };

  return (
    <header
      className="
        navbar
        relative
        w-full
        min-701:h-[81px]
        p-[15px]
        text-white
        bg-[#040915]
        bg-cover
        bg-center
        bg-no-repeat
        overflow-hidden
      "
      
    >


      {/* Navbar Content */}
      <div
        className="
          nav-container
          relative
          z-[2]
          max-w-full
          min-701:h-[81px]
          mx-auto
          flex
          items-center
          justify-between
          max-900:px-[28px]
          max-700:px-[25px]
          max-700:min-h-[81px]
        "
      >

        {/* Brand */}
        <Link
          to="/"
          className="
            brand
            flex
            items-center
            gap-[13px]
            no-underline
            text-inherit
          "
          onClick={() => setIsOpen(false)}
        >
          <div
            className="
              brand-logo
              w-[43px]
              h-[43px]
              flex
              items-center
              justify-center
              bg-[#ff6b00]
              rounded-[11px]
              text-[#111]
              text-[20px]
              shrink-0
            "
          >
            <span>▰</span>
          </div>

          <div className="brand-text">
            <h2
              className="
                text-[21px]
                leading-[21px]
                font-[800]
                tracking-[0.3px]
                text-white
                m-0
              "
            >
              A. K. METAL WORKS
            </h2>

            <p
              className="
                mt-[4px]
                text-[#8c8c8c]
                text-[11px]
                tracking-[0.4px]
                m-0
              "
            >
              Proprietorship | Industrial Metal Solutions
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            nav-menu
            hidden
            min-701:flex
            h-full
            items-center
            gap-[35px]
            max-900:gap-[18px]
          "
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[14px] font-[600] whitespace-nowrap no-underline transition-none ${
                  isActive
                    ? "text-[#ff6b00] after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-13px] after:h-[3px] after:bg-[#ff6b00]"
                    : "text-[#eee] hover:text-[#ff6b00]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Print Button */}
          <button
            type="button"
            className="
              print-btn
              border-0
              bg-[#ff6b00]
              text-[#111]
              h-[43px]
              px-[20px]
              rounded-[10px]
              text-[13px]
              font-[800]
              cursor-pointer
            "
            onClick={handlePrint}
          >
            <span className="mr-[7px]">▣</span>
            Print Profile
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="
            min-701:hidden
            relative
            z-[3]
            text-white
            text-[28px]
            bg-transparent
            border-0
            cursor-pointer
            p-[8px]
            focus:outline-none
            flex
            items-center
            justify-center
          "
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav
          className="
            relative
            z-[2]
            min-701:hidden
            max-w-[1428px]
            mx-auto
            px-[25px]
            pt-[14px]
            pb-[22px]
            border-t
            border-[rgba(255,255,255,0.12)]
            flex
            flex-col
            gap-[17px]
            bg-[rgba(5,5,5,0.92)]
          "
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-[14px] font-[600] no-underline ${
                  isActive
                    ? 'text-[#ff6b00]'
                    : 'text-[#eee] hover:text-[#ff6b00]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}