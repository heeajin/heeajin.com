import Link from "next/link";
import localFont from "next/font/local";

const lineseed = localFont({
  src: "../app/fonts/LINESeedKR-Bd.woff2",
  variable: "--font-lineseed",
  weight: "100 900",
});

export default function Header() {
  return (
    <header className={`w-full ${lineseed.variable} font-[family-name:var(--font-lineseed)]`}>
      <nav className="flex flex-row justify-between">
        <Link href="/">
          <h1 className="mb-4 mt-4 text-2xl leading-none tracking-tight md:text-3xl lg:text-4xl dark:text-white">
            heeajin.com
          </h1>
        </Link>
        <button className="text-2xl leading-none tracking-tight md:text-3xl lg:text-4xl dark:text-white">+</button>
      </nav>
    </header>
  );
}
