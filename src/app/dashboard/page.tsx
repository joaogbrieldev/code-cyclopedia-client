"use client";

import { MyMarkdownEditor } from "../components/MarkdownEditor";

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyMarkdownEditor />
    </main>
  );
}
