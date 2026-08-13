"use client";

import Image from "next/image";

export function WhatsAppFloat() {
  const phoneNumber = "919995773273";
  const message = "Welcome to Grandreves Technologies! We are delighted to have you on board. We look forward to working with you and supporting you as you get started. If you have any questions or require any assistance, please feel free to reach out to us. For more information, please visit: https://www.grandreves.com";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        {/* Pulsing ring animation */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        
        {/* Main button with custom image */}
        <div className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 overflow-hidden">
          <Image
            src="/Wtp.png"
            alt="WhatsApp"
            width={56}
            height={56}
            className="object-cover"
            priority
          />
        </div>

        {/* Tooltip */}
        <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
          Chat with us
          <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 border-8 border-transparent border-l-gray-900"></span>
        </span>
      </a>
    </div>
  );
}