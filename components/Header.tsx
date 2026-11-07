import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-700 text-white shadow-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-2 px-4 py-4"
      >
        <div id="header-title" className="text-2xl font-bold">
          Andrea Gonzalez
        </div>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="underline-offset-4 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="underline-offset-4 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
