"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-4">
      <Link href={"/login"}>
        <Button>Ir para Login</Button>
      </Link>
      <main>Landing Page</main>
    </div>
  );
}
