import AddProductForm from "./add-product-form";
import { generateMeta } from "@/lib/generate-meta";

export async function generateMetadata() {
  return generateMeta({
    title: "Add Product Page",
    description:
      "Add new products page. A fast and efficient product addition process using Next.js and Tailwind CSS. User-friendly interface with easily editable form fields.",
    canonical: "/products/create"
  });
}

export default function Page() {
  return (
    <div className="container max-w-(--breakpoint-lg)">
      <div className="space-y-4">
        <AddProductForm />
      </div>
    </div>
  );
}
