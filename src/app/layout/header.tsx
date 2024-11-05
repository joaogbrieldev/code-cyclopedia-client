"use client";

import Image from "next/image";
import { useState } from "react";
import logo from '../favicon.ico';
import Signin from "../signin/page";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  function openModal(): void {
    setOpen(!isOpen);
    console.log(isOpen)
  }

  return (
    <div className="m-0 p-0 flex flex-col items-center">
      <header className=" flex justify-between items-center pt-[30px] pb-[30px] px-[10%]">
        <Image src={logo} alt="logo" />
        <nav>
        <ul>
          <li className=" font-medium text-base"> <a className=" font-medium text-base" href="/about">About this project</a></li>
        </ul>
        </nav>
        <button className=" font-medium text-base" onClick={openModal}>Sign in</button>
      </header>
      <Signin isOpen={isOpen} />
    </div>
  );
}
