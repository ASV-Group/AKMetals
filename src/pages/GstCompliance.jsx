import React, { useEffect } from 'react';

const gstDetails = [
  {
    label: 'GSTIN',
    value: '19AZNPK3740R1Z1',
  },
  {
    label: 'Registration Form',
    value: 'Form GST REG-06',
  },
  {
    label: 'Issue Date',
    value: '18/07/2018',
  },
  {
    label: 'Taxpayer Type',
    value: 'Regular Taxation',
  },
  {
    label: 'Registration Status',
    value: (
      <span
        className="
          status
          inline-block
          p-[7px_13px]
          rounded-[7px]
          bg-[#e6f8ec]
          text-[#149443]
          text-[11px]
          font-[700]
        "
      >
        Active Registered Location
      </span>
    ),
  },
];

const businessInfo = [
  {
    icon: '✓',
    title: '100% Verified GST',
    description:
      'Government verified enterprise under GST registration.',
  },
  {
    icon: '▣',
    title: 'Regular Taxation',
    description: 'Type: Regular Taxation.',
  },
  {
    icon: '⌂',
    title: 'Registered Location',
    description:
      '11, Mill Approach Road, Kamarhati Road, North 24 Parganas, West Bengal - 700058',
  },
];

export default function GstCompliance() {
  useEffect(() => {
    document.title = 'GST Compliance | A.K. Metal Works';
  }, []);

  return (
    <main
      className="
        main-container
        w-full
        max-w-[1428px]
        mx-auto
        max-[900px]:px-[17px]
      "
    >
      <section
        className="
          page-wrap
          p-[50px_34px_77px]
          max-[700px]:p-[42px_17px_63px]
        "
      >
        {/* =========================
            PAGE TITLE
        ========================== */}
        <h1
          className="
            page-title
            animate-page-title
            text-[34px]
            font-[800]
            mb-[13px]
            text-[#111]
            tracking-[-0.5px]
            max-[700px]:text-[28px]
          "
        >
          GST Compliance & Verification
        </h1>

        {/* =========================
            SUBTITLE
        ========================== */}
        <p
          className="
            page-subtitle
            animate-page-content
            text-[15px]
            text-[#666]
            leading-[1.6]
            max-w-[1008px]
            max-[700px]:text-[13px]
          "
        >
          A. K. Metal Works ki GST registration aur registration details
          neeche di gayi hain.
        </p>

        {/* =========================
            REGISTRATION HEADING
        ========================== */}
        <h2
          className="
            section-heading
            animate-page-content
            text-[24px]
            font-[800]
            mt-[42px]
            mb-[21px]
            text-[#111]
          "
          style={{
            animationDelay: '250ms',
          }}
        >
          Registration Details
        </h2>

        {/* =========================
            GST REGISTRATION BOX
        ========================== */}
        <div
          className="
            gst-box
            animate-page-content
            border
            border-[#eee]
            rounded-[15px]
            overflow-hidden
            max-w-[1064px]
            shadow-[0_5px_20px_rgba(0,0,0,0.04)]
          "
          style={{
            animationDelay: '350ms',
          }}
        >
          {gstDetails.map((row, idx) => (
            <div
              key={idx}
              className="
                gst-row
                animate-page-item
                grid
                grid-cols-[42%_58%]
                max-[700px]:grid-cols-1
                border-b
                border-[#eee]
                last:border-b-0
                transition-colors
                duration-300
                hover:bg-[#fffaf3]
              "
              style={{
                animationDelay: `${450 + idx * 100}ms`,
              }}
            >
              {/* Label */}
              <div
                className="
                  gst-label
                  p-[20px_22px]
                  text-[14px]
                  font-[700]
                  bg-[#fafafa]
                  max-[700px]:pb-[7px]
                  max-[700px]:text-[13px]
                "
              >
                {row.label}
              </div>

              {/* Value */}
              <div
                className="
                  gst-value
                  p-[20px_22px]
                  text-[14px]
                  text-[#333]
                  max-[700px]:pt-[7px]
                  max-[700px]:text-[13px]
                "
              >
                {row.value}
              </div>
            </div>
          ))}
        </div>

        {/* =========================
            BUSINESS INFORMATION
        ========================== */}
        <h2
          className="
            section-heading
            animate-page-content
            text-[24px]
            font-[800]
            mt-[42px]
            mb-[21px]
            text-[#111]
            max-[700px]:text-[22px]
          "
          style={{
            animationDelay: '850ms',
          }}
        >
          Business Information
        </h2>

        {/* =========================
            BUSINESS CARDS
        ========================== */}
        <div
          className="
            cards
            grid
            grid-cols-3
            max-[900px]:grid-cols-2
            max-[700px]:grid-cols-1
            gap-[25px]
          "
        >
          {businessInfo.map((card, idx) => (
            <div
              key={idx}
              className="
                card
                animate-page-item
                border
                border-[#eee]
                rounded-[14px]
                p-[28px]
                bg-white
                transition-all
                duration-300
                ease-out
                hover:-translate-y-[8px]
                hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                hover:border-[#ff6b00]
              "
              style={{
                animationDelay: `${950 + idx * 150}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="
                  card-icon
                  w-[48px]
                  h-[48px]
                  rounded-[11px]
                  bg-[#fff3dc]
                  text-[#ff6b00]
                  flex
                  items-center
                  justify-center
                  text-[22px]
                  mb-[17px]
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {card.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[18px]
                  font-bold
                  mb-[11px]
                  text-[#111]
                "
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className="
                  text-[14px]
                  leading-[1.6]
                  text-[#555]
                "
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}