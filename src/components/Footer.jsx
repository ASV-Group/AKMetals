import React from 'react';

export default function Footer() {
  return (
    <footer className="footer w-full bg-[#050505] text-white">
      <div
        className="
          footer-container
          max-w-[1428px]
          mx-auto
          min-h-[84px]
          flex
          items-center
          justify-center
          text-center
          max-900:px-[28px]
          max-700:px-[25px]
        "
      >
        <div>
          <strong
            className="
              text-[13px]
              mr-[14px]
              text-white
              font-bold
            "
          >
            A. K. METAL WORKS
          </strong>

          <span
            className="
              text-[#777]
              text-[11px]
            "
          >
            Proprietorship | Industrial Metal Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}