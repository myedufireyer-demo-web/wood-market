import ProductList, { Product } from "@/components/ProductList";
import products from "@/data/products.json";

export const metadata = { title: "สินค้าและราคา" };

export default function ProductsPage() {
  // TODO: เปลี่ยนเป็นดึงจาก Supabase (table products) ในขั้นถัดไป
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-bold">สินค้าและราคา</h1>
      <p className="mb-6 mt-2 text-ink/70">ราคาอาจเปลี่ยนตามตลาด โทรยืนยันก่อนสั่งซื้อ</p>
      <ProductList products={products as Product[]} />
    </div>
  );
}
