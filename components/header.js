import Link from "next/link";

export default function Header() {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-0 mt-8">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
        .
      </h2>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-0">
        <Link href="/about">
          <a className="hover:underline">About</a>
        </Link>
      </h2>
    </>
  );
}
