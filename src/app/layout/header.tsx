"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  function openModal(open: boolean): void {
    setOpen(!open);
  }

  return (
    <>
      <button onClick={() => openModal(isOpen)}>Open Modal</button>
    </>
  );
}
