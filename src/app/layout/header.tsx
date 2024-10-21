"use client";

import Image from "next/image";
import { useState } from "react";
import logo from '../favicon.ico';

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  function openModal(open: boolean): void {
    setOpen(!open);
  }

  return (
    <div className="m-0 p-0">
      <header className=" flex justify-between items-center pt-[30px] pb-[30px] px-[10%]">
        <Image src={logo} alt="logo" />
        <nav>
        <ul>
          <li className=" font-medium text-base"> <a className=" font-medium text-base" href="/about">About this project</a></li>
        </ul>
        </nav>
        <button className=" font-medium text-base" onClick={() => openModal(isOpen)}>Sign in</button>
      </header>
    </div>
  );
}
