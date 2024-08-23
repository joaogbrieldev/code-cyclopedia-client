"use client";

import Image from "next/image";
import { useState } from "react";

export default function Signup() {
  const [isOpen, setOpen] = useState(false);

  function openModal(open: boolean): void {
    setOpen(!open);
  }

  return (
    <section className="flex flex-col">
      <div className="flex">
        <div>
          <Image
            src="https://loginsignup-widget-assets.s3.amazonaws.com/assets/modal-back-button/back.svg"
            alt="back"
            width={10}
            height={16.5}
          />
          <button>BACK</button>
        </div>
        <h1>Become a Code Cyclopedia</h1>
      </div>
      <div className="flex flex-col">
        <input type="text" placeholder="Nickname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm Password" />
      </div>
    </section>
  );
}
