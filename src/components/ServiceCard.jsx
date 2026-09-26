import React from 'react';

export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="service min-h-[100px]">
      <div className="service-icon w-[31px] h-[31px] bg-[#fff3dc] text-[#ff6b00] rounded-[8px] flex items-center justify-center mb-[12px]">
        {icon}
      </div>
      <h3 className="text-[12px] font-bold mb-[9px] text-[#111]">{title}</h3>
      <p className="text-[10px] leading-[1.6] text-[#444]">{description}</p>
    </div>
  );
}
