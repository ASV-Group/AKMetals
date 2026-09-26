import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import InfoCard from '../components/InfoCard';

export default function Home() {
  useEffect(() => {
    document.title = 'Home / Profile | A.K. Metal Works';
  }, []);

  return (
    <main className="main-container w-full max-w-full">
      {/* =========================
          HERO
      ========================== */}
      <Hero />

      {/* =========================
          BUSINESS INFO CARDS
      ========================== */}
      <section
        className="
          info-grid
          grid
          grid-cols-[1fr_1.15fr_0.9fr]
          gap-[49px]
          p-[53px_35px_42px]

          max-[1000px]:grid-cols-2
          max-[1000px]:gap-[25px]

          max-[700px]:grid-cols-1
          max-[700px]:gap-[20px]
          max-[700px]:p-[35px_20px]
        "
      >
        {/* Card 1 */}
        <div
          className="
            animate-page-item
            transition-transform
            duration-300
            ease-out
            hover:-translate-y-[8px]
          "
          style={{
            animationDelay: '150ms',
          }}
        >
          <InfoCard
            icon="♟"
            title="BUSINESS TYPE & OWNER"
          >
            <h3
              className="
                text-[20px]
                leading-[1.2]
                mb-[8px]
                font-bold
                text-[#111]
              "
            >
              Proprietorship
            </h3>

            <p
              className="
                orange-text
                !text-[#ff6b00]
                font-[600]
                text-[14px]
                leading-[1.5]
              "
            >
              Mr. Arif Khan (Proprietor)
            </p>

            <p
              className="
                small-text
                mt-[10px]
                !text-[#777]
                text-[14px]
                leading-[1.5]
              "
            >
              Resident State: West Bengal
            </p>
          </InfoCard>
        </div>

        {/* Card 2 */}
        <div
          className="
            animate-page-item
            transition-transform
            duration-300
            ease-out
            hover:-translate-y-[8px]
          "
          style={{
            animationDelay: '300ms',
          }}
        >
          <InfoCard
            icon="📍"
            title="PRINCIPAL BUSINESS ADDRESS"
          >
            <p
              className="
                address
                !leading-[1.45]
                mb-[12px]
                text-[14px]
                text-[#242424]
              "
            >
              11, Mill Approach Road, Kamarhati Road,
              <br />
              North 24 Parganas, West Bengal - 700058
            </p>

            <span
              className="
                location-status
                inline-block
                p-[7px_12px]
                rounded-[7px]
                bg-[#e6f8ec]
                text-[#149443]
                text-[12px]
                font-[700]
              "
            >
              Active Registered Location
            </span>
          </InfoCard>
        </div>

        {/* Card 3 */}
        <div
          className="
            animate-page-item
            transition-transform
            duration-300
            ease-out
            hover:-translate-y-[8px]
          "
          style={{
            animationDelay: '450ms',
          }}
        >
          <InfoCard
            icon="▤"
            isDocumentIcon={true}
            title="REGISTRATION DETAILS"
          >
            <p className="text-[14px] leading-[1.5] text-[#242424]">
              <strong>Form GST REG-06</strong>
            </p>

            <p className="text-[14px] leading-[1.5] text-[#242424]">
              Issue Date: 18/07/2018
            </p>

            <p className="text-[14px] leading-[1.5] text-[#242424]">
              Type: Regular Taxation
            </p>
          </InfoCard>
        </div>
      </section>

      {/* =========================
          ABOUT SECTION
      ========================== */}
      <section
        className="
          page-wrap
          p-[52px_35px_79px]
          max-[700px]:p-[43px_17px_65px]
          !pt-[10px]
          max-[700px]:!pt-[10px]
        "
      >
        {/* Heading */}
        <h2
          className="
            section-heading
            animate-page-title
            text-[24px]
            font-[800]
            !mt-0
            mb-[22px]
            text-[#111]
            max-[700px]:text-[22px]
          "
        >
          A. K. Metal Works Ke Bare Mein
        </h2>

        {/* Description */}
        <p
          className="
            page-subtitle
            animate-page-content
            text-[16px]
            text-[#666]
            leading-[1.6]
            max-w-[1037px]
          "
          style={{
            animationDelay: '200ms',
          }}
        >
          A. K. Metal Works ek vishwasniya firm hai jo industrial metal
          components aur custom fabrication ki suvidha pradan karti hai.
          Hamare paas modern tools aur experienced technicians ki team hai jo
          har tarah ke metal fabrication aur commercial requirements ko pura
          karne ki kshamta rakhti hai.
        </p>

        {/* Highlights */}
        <div
          className="
            about-highlights
            mt-[29px]
            flex
            flex-wrap
            gap-[12px]
            max-[700px]:gap-[10px]
          "
        >
          <span
            className="
              animate-page-item
              inline-block
              px-[15px]
              py-[8px]
              rounded-[7px]
              bg-[#fff3dc]
              text-[#ff6b00]
              text-[12px]
              font-[700]
              transition-transform
              duration-300
              hover:-translate-y-[4px]
            "
            style={{
              animationDelay: '400ms',
            }}
          >
            100% Verified GST
          </span>

          <span
            className="
              animate-page-item
              inline-block
              px-[15px]
              py-[8px]
              rounded-[7px]
              bg-[#fff3dc]
              text-[#ff6b00]
              text-[12px]
              font-[700]
              transition-transform
              duration-300
              hover:-translate-y-[4px]
            "
            style={{
              animationDelay: '520ms',
            }}
          >
            Industrial Grade Quality
          </span>

          <span
            className="
              animate-page-item
              inline-block
              px-[15px]
              py-[8px]
              rounded-[7px]
              bg-[#fff3dc]
              text-[#ff6b00]
              text-[12px]
              font-[700]
              transition-transform
              duration-300
              hover:-translate-y-[4px]
            "
            style={{
              animationDelay: '640ms',
            }}
          >
            Timely Project Delivery
          </span>
        </div>
      </section>
    </main>
  );
}