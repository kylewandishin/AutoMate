'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';

const Inject = () => {
  const [cardBoxElement, setCardBoxElement] = useState<Element | null>(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const cardBox = document.querySelector('.cl-headerTitle');
      if (cardBox) {
        setCardBoxElement(cardBox);
        observer.disconnect(); // Stop observing once found
      }
    });

    // Start observing the body or parent element of where .cl-cardBox would appear
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect(); // Cleanup on component unmount
    };
  }, []);

  if (!cardBoxElement) return null;

  // Now that we have the .cl-cardBox, inject content into it
  return createPortal(
    <aside className="absolute top-0 left-0 w-full h-full py-14">
      <div className="flex justify-center gap-[2px]">
        <p className="text-5xl font-bold text-white">Auto</p>
        <Image
          src="/mateBolt.png"
          alt="Logo"
          width={20}
          height={20}
          className="shadow-sm"
        />
        <p className="text-5xl font-bold text-white">Mate</p>
      </div>
    </aside>,
    cardBoxElement,
  );
};

export default Inject;
