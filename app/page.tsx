import Link from "next/link";
import { ImageSlot } from "@/components/Placeholders";
import { ProductCard, Product } from "@/components/ProductList";
import products from "@/data/products.json";
import { site } from "@/lib/site";

const reasons = [
  ["ไม้คุณภาพ คัดก่อนส่ง", "ตรวจเกรดและความแห้งของไม้ทุกล็อต"],
  ["ราคาชัดเจน", "ดูราคาล่าสุดบนเว็บได้ทันที ไม่ต้องโทรถาม"],
  ["จัดส่งถึงไซต์งาน", "มีรถส่งในพื้นที่ใกล้เคียง สอบถามได้"],
];

export default function Home() {
  return (
    <>
      <section className="bg-pine text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 py-14 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{site.tagline}</h1>
            <p className="mt-4 text-sawdust/90">ไม้แปรรูป ไม้อัด และไม้โครงสร้างสำหรับงานก่อสร้าง ดูสินค้าและราคาได้ที่นี่</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/products" className="rounded bg-amber px-5 py-2.5 font-semibold text-ink">ดูสินค้าและราคา</Link>
              <a href={`tel:${site.phone}`} className="rounded border border-white/40 px-5 py-2.5">โทร {site.phone}</a>
            </div>
          </div>
          <ImageSlot label="รูปหน้าร้าน / กองไม้" size="1200×900 px" className="aspect-[4/3] bg-white/10 text-white" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-2xl font-bold">ทำไมต้องซื้อกับเรา</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {reasons.map(([t, d]) => (
            <div key={t} className="border-l-4 border-amber pl-4"><h3 className="font-semibold">{t}</h3><p className="mt-1 text-sm text-ink/70">{d}</p></div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold">สินค้าขายดี</h2>
          <Link href="/products" className="text-sm font-medium text-bark underline">ดูทั้งหมด</Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {(products as Product[]).slice(0, 3).map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-5xl items-center gap-8 px-4 md:grid-cols-2">
        <ImageSlot label="รูปเจ้าของร้าน / โกดัง" size="1000×750 px" className="aspect-[4/3]" />
        <div>
          <h2 className="text-2xl font-bold">เกี่ยวกับร้าน</h2>
          <p className="mt-3 text-ink/80">แก้ข้อความนี้เป็นเรื่องราวของร้าน เช่น เปิดมากี่ปี ขายไม้ประเภทไหน ลูกค้าหลักคือใคร ควรเขียนสั้นๆ 3–4 บรรทัด</p>
        </div>
      </section>
    </>
  );
}
