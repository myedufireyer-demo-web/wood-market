"use client";
import { useState } from "react";
import { ImageSlot } from "./Placeholders";

export type Product = { id: number; name: string; category: string; size: string; unit: string; price: number; image_url: string | null; in_stock: boolean };

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm">
      {p.image_url
        ? <img src={p.image_url} alt={p.name} className="aspect-[4/3] w-full object-cover" />
        : <ImageSlot label="รูปสินค้า" size="800×600 px" className="aspect-[4/3] rounded-none border-0 border-b-2" />}
      <div className="p-4">
        <p className="text-xs text-bark">{p.category}</p>
        <h3 className="text-lg font-semibold">{p.name}</h3>
        <p className="text-sm text-ink/70">ขนาด {p.size}</p>
        <div className="mt-3 flex items-end justify-between">
          <p className="text-xl font-bold text-pine">฿{p.price.toLocaleString()}<span className="text-sm font-normal text-ink/60"> / {p.unit}</span></p>
          <span className={`text-xs ${p.in_stock ? "text-pine" : "text-red-700"}`}>{p.in_stock ? "มีสินค้า" : "หมดชั่วคราว"}</span>
        </div>
      </div>
    </article>
  );
}

export default function ProductList({ products }: { products: Product[] }) {
  const cats = ["ทั้งหมด", ...Array.from(new Set(products.map((p) => p.category)))];
  const [cat, setCat] = useState("ทั้งหมด");
  const [q, setQ] = useState("");
  const shown = products.filter((p) => (cat === "ทั้งหมด" || p.category === cat) && p.name.includes(q));
  return (
    <>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-sm ${c === cat ? "bg-pine text-white" : "bg-white hover:bg-white/60"}`}>{c}</button>
        ))}
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ค้นหาชื่อไม้"
          className="ml-auto w-full rounded border border-pine/20 px-3 py-1.5 text-sm sm:w-56" />
      </div>
      {shown.length === 0 ? <p className="py-12 text-center text-ink/60">ไม่พบสินค้า ลองเปลี่ยนคำค้นหรือหมวดหมู่</p> : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((p) => <ProductCard key={p.id} p={p} />)}</div>
      )}
    </>
  );
}
