import React, { useEffect } from 'react';
import hero from '../images/bg_metal.png';

export default function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll('.hero-animate');

    // Small delay makes the entrance feel smoother
    requestAnimationFrame(() => {
      elements.forEach((element) => {
        element.classList.add('hero-visible');
      });
    });
  }, []);

  return (
    <section
      className="
        hero
        relative
        w-full
        min-h-[491px]
        overflow-hidden
        text-white

        bg-cover
        bg-center
        bg-no-repeat
        bg-fixed

        flex
        items-center
        justify-center
      "
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* =========================
          DARK OVERLAY
      ========================== */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-[linear-gradient(135deg,rgba(2,7,17,0.94)_0%,rgba(2,9,23,0.84)_50%,rgba(2,9,20,0.78)_100%)]
        "
      />

      {/* =========================
          ORANGE GLOW
      ========================== */}
      <div
        className="
          absolute
          z-[1]
          w-[380px]
          h-[380px]
          rounded-full
          bg-[#ff6b00]
          opacity-[0.06]
          blur-[110px]

          animate-[heroGlow_5s_ease-in-out_infinite]

          max-[700px]:w-[250px]
          max-[700px]:h-[250px]
          max-[700px]:blur-[80px]
        "
      />

      {/* =========================
          CONTENT
      ========================== */}
      <div
        className="
          relative
          z-[2]
          w-full
          max-w-[1100px]

          flex
          flex-col
          items-center

          text-center

          px-[20px]
          py-[60px]

          max-[700px]:px-[18px]
          max-[700px]:py-[50px]
        "
      >
        {/* =========================
            VERIFICATION
        ========================== */}
        <div
          className="
            hero-animate

            mt-[18px]

            text-white
            font-[800]
            tracking-[0.4px]
            leading-[1.4]

            text-[40px]

            max-[900px]:text-[32px]
            max-[700px]:text-[24px]
            max-[500px]:text-[20px]
          "
          style={{
            transitionDelay: '100ms',
          }}
        >
          GOVERNMENT VERIFIED ENTERPRISE
          <br />
          (GST REG-06)
        </div>

        {/* =========================
            DESCRIPTION
        ========================== */}
        <p
          className="
            hero-animate

            w-full
            max-w-[900px]

            mt-[28px]
            mb-0

            text-[#eee]
            text-[18px]
            leading-[1.6]

            max-[900px]:text-[16px]

            max-[700px]:text-[13px]
            max-[700px]:leading-[1.55]

            max-[500px]:text-[12px]
          "
          style={{
            transitionDelay: '300ms',
          }}
        >
          Hum Industrial Metal Fabrication, Custom Cutting, aur Heavy Metal
          Works mein Visheshagya (Expert) hain. Proprietor Arif Khan ke
          netritva mein hamari firm high quality standards ke saath B2B aur
          commercial client requirement ko pura karti hai.
        </p>

        {/* =========================
            BADGES
        ========================== */}
        <div
          className="
            w-full

            flex
            items-center
            justify-center
            flex-row

            gap-[22px]
            mt-[35px]

            max-[700px]:flex-col
            max-[700px]:gap-[12px]
            max-[700px]:mt-[25px]
          "
        >
          {/* GST */}
          <div
            className="
              hero-animate

              flex
              items-center
              justify-center

              min-h-[54px]
              px-[20px]

              rounded-[8px]

              border
              border-white
              text-white

              text-[16px]
              font-[700]

              transition-all
              duration-300

              hover:border-[#ff6b00]
              hover:text-[#ff6b00]
              hover:-translate-y-[5px]
              hover:shadow-[0_8px_25px_rgba(255,107,0,0.2)]

              max-[700px]:w-full
              max-[700px]:max-w-[340px]
              max-[700px]:min-h-[48px]
              max-[700px]:text-[12px]
            "
            style={{
              transitionDelay: '500ms',
            }}
          >
            GSTIN: 19AZNPK3740R1Z1
          </div>

          {/* Listing Date */}
          <div
            className="
              hero-animate

              flex
              items-center
              justify-center

              min-h-[54px]
              px-[20px]

              rounded-[8px]

              border
              border-white
              text-white

              text-[16px]
              font-[700]

              transition-all
              duration-300

              hover:border-[#ff6b00]
              hover:text-[#ff6b00]
              hover:-translate-y-[5px]
              hover:shadow-[0_8px_25px_rgba(255,107,0,0.2)]

              max-[700px]:w-full
              max-[700px]:max-w-[340px]
              max-[700px]:min-h-[48px]
              max-[700px]:text-[12px]
            "
            style={{
              transitionDelay: '650ms',
            }}
          >
            Listing Date: 01/07/2017
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM ORANGE LINE
      ========================== */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          -translate-x-1/2

          z-[2]

          h-[1px]
          w-[45%]

          bg-[linear-gradient(90deg,transparent,#ff6b00,transparent)]

          animate-[heroLine_3s_ease-in-out_infinite]

          max-[700px]:w-[65%]
        "
      />

      {/* =========================
          HERO ANIMATION CSS
      ========================== */}
      <style>
        {`
          .hero-animate {
            opacity: 0;
            transform: translateY(35px);
            transition:
              opacity 0.9s ease-out,
              transform 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .hero-animate.hero-visible {
            opacity: 1;
            transform: translateY(0);
          }

          @keyframes heroGlow {
            0%,
            100% {
              transform: scale(0.9);
              opacity: 0.04;
            }

            50% {
              transform: scale(1.15);
              opacity: 0.10;
            }
          }

          @keyframes heroLine {
            0%,
            100% {
              width: 35%;
              opacity: 0.2;
            }

            50% {
              width: 70%;
              opacity: 0.75;
            }
          }
        `}
      </style>
    </section>
  );
}