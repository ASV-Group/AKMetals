import React from 'react';

export default function InfoCard({ icon, isDocumentIcon, title, children }) {
  return (
    <div className="info-card flex items-start gap-[12px]">
      <div
        className={`info-icon shrink-0 w-[31px] h-[31px] flex items-center justify-center rounded-[8px] text-[15px] ${
          isDocumentIcon
            ? 'document-icon bg-[#f3eaff] text-[#5526a8]'
            : 'bg-[#fff3dc] text-[#ff6b00]'
        }`}
      >
        {icon}
      </div>
      <div className="info-content min-w-0">
        <div className="info-title mb-[8px] text-[#171717] text-[8px] font-[800] tracking-[0.4px]">
          {title}
        </div>
        {children}
      </div>
    </div>
  );
}
