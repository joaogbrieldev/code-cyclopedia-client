"use client";

import jwt from "jsonwebtoken";
import Image from "next/image";
import nookies from "nookies";
import { useState } from "react";
import logo from "../favicon.ico";
import Signin from "../signin/page";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const token = nookies.get();
  console.log(token);
  let decodedToken = jwt.decode(token.authToken);
  if (!decodedToken) decodedToken = "user";

  function openModal(): void {
    setOpen(!isOpen);
  }

  return (
    <div className="m-0 p-0 flex flex-col items-center">
      <header className=" flex justify-between w-full items-center pt-[30px] pb-[30px] px-[10%]">
        <Image src={logo} alt="logo" />
        <nav>
          <ul>
            <li className=" font-medium text-base">
              {" "}
              <a className=" font-medium text-base" href="/about">
                About this project
              </a>
            </li>
          </ul>
        </nav>
        {!token ? (
          <button className=" font-medium text-base" onClick={openModal}>
            Sign in
          </button>
        ) : (
          <h1>{decodedToken.username}</h1>
        )}
      </header>
      <Signin isOpen={isOpen} />
    </div>
  );
}
