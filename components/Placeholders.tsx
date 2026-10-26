// กล่องสีเหลืองประ = จุดที่ต้องใส่โลโก้/รูปจริง
export function LogoSlot({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-12 w-36 items-center justify-center rounded border-2 border-dashed border-amber bg-amber/10 text-xs font-semibold text-bark ${className}`}>
      [ โลโก้ร้าน ]
    </div>
  );
}
export function ImageSlot({ label, size, className = "" }: { label: string; size: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-1 rounded border-2 border-dashed border-amber bg-amber/10 p-4 text-center text-bark ${className}`}>
      <span className="text-sm font-semibold">[ รูป: {label} ]</span>
      <span className="text-xs">ขนาดแนะนำ {size}</span>
    </div>
  );
}
