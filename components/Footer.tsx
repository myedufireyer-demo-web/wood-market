import { site } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="mt-16 bg-pine text-sawdust">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm">
        <p className="font-head text-lg">{site.name}</p>
        <p className="mt-2">โทร {site.phone} · LINE {site.line}</p>
        <p>{site.hours}</p>
      </div>
    </footer>
  );
}
