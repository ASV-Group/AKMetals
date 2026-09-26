import React, { useEffect } from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: '▣',
    title: 'Industrial Structural Fabrication',
    description:
      'Heavy steel structures, frames, aur industrial sheds ke liye custom metal fabrication.',
  },
  {
    icon: '⚒',
    title: 'Custom Machinery Parts',
    description:
      'Precision metal cutting, turning, aur specific machinery components ki taiyari.',
  },
  {
    icon: '⌂',
    title: 'Safety Gates & Grills',
    description:
      'Commercial aur residential properties ke liye durable security gates aur grills.',
  },
  {
    icon: '♨',
    title: 'Welding & Repair Work',
    description:
      'Expert ARC/MIG welding aur damaged metallic parts ki marammat.',
  },
  {
    icon: '▤',
    title: 'Bulk B2B Metal Supply',
    description:
      'Regular aur bulk orders ke liye timely pan delivery aur wholesale pricing.',
  },
  {
    icon: 'A',
    title: 'Design & Consultation',
    description:
      'Metal requirement ke hisaab se professional technical salah aur design mapping.',
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Hamari Services | A.K. Metal Works';
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
        {/* Page Heading */}
        <div
          className="
            services-header
            animate-page-title
          "
        >
          <h1
            className="
              page-title
              text-[34px]
              font-[800]
              mb-[13px]
              text-[#111]
              tracking-[-0.5px]

              max-[700px]:text-[28px]
            "
          >
            Metal Works &amp; Services Showcase
          </h1>

          <p
            className="
              page-subtitle
              text-[15px]
              text-[#666]
              leading-[1.6]
              max-w-[1008px]

              max-[700px]:text-[13px]
            "
          >
            Hum industrial aur commercial zaroorat ko mutabik yeh sabhi
            services provide karte hain.
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="
            services-grid

            grid
            grid-cols-3

            max-[1000px]:grid-cols-2
            max-[700px]:grid-cols-1

            gap-y-[63px]
            gap-x-[91px]

            mt-[42px]

            max-[1000px]:gap-[35px]
            max-[700px]:gap-[25px]
            max-[700px]:mt-[35px]
          "
        >
          {services.map((item, idx) => (
            <div
  key={idx}
  className="
    service-item
    animate-page-item
    hover:-translate-y-[8px]
    transition-transform
    duration-300
    ease-out
  "
  style={{
    animationDelay: `${idx * 100}ms`,
  }}
>
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes serviceReveal {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </main>
  );
}