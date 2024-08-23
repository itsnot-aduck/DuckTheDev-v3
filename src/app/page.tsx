import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Create Next App with TypeScript, ESLint, Prettier, Tailwind CSS, and Jest.",
}