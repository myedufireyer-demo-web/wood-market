import { ImageSlot } from "@/components/Placeholders";
import { site } from "@/lib/site";

export const metadata = { title: "ติดต่อร้าน" };

export default function ContactPage() {
  const rows = [["โทร", site.phone], ["LINE", site.line], ["ที่อยู่", site.address], ["เวลาทำการ", site.hours]];
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">ติดต่อร้าน</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <dl className="space-y-4">
          {rows.map(([k, v]) => (
            <div key={k} className="rounded-lg bg-white p-4"><dt className="text-sm text-bark">{k}</dt><dd className="mt-1 font-semibold">{v}</dd></div>
          ))}
          <a href={`tel:${site.phone}`} className="inline-block rounded bg-amber px-5 py-2.5 font-semibold">โทรเลย</a>
        </dl>
        <div className="space-y-4">
          <ImageSlot label="แผนที่ Google Maps (iframe)" size="600×400 px" className="aspect-[3/2]" />
          <ImageSlot label="รูป QR LINE ร้าน" size="300×300 px" className="mx-auto h-40 w-40" />
        </div>
      </div>
    </div>
  );
}
