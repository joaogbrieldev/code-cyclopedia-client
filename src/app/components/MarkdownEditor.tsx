"use client";

import { useState } from "react";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import * as Showdown from "showdown";

export const MyMarkdownEditor = () => {
  const [value, setValue] = useState("");
  const converter = new Showdown.Converter();

  return (
    <ReactMde
      value={value}
      onChange={setValue}
      selectedTab="write"
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(converter.makeHtml(markdown))
      }
    />
  );
};
