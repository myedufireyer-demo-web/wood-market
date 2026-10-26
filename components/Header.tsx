import Link from "next/link";
import { LogoSlot } from "./Placeholders";
const links = [["/", "หน้าแรก"], ["/products", "สินค้าและราคา"], ["/contact", "ติดต่อร้าน"]];
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-pine/10 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/"><LogoSlot /></Link>
        <nav className="flex gap-4 text-sm font-medium sm:gap-6">
          {links.map(([href, text]) => (
            <Link key={href} href={href} className="hover:text-bark focus-visible:underline">{text}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
