import { Metadata } from "next";
import Link from "next/link";

export const metadata:Metadata = {
  title: "Home Page",
  description: "This is the home page of the application.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-2">
      <h1 className="text-2xl text-yellow-500" role="heading">end to end test</h1>
      <Link href="/form" role="link">Go to Form</Link>
    </main>
  );
}
