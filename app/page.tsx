
import AsgaardSofa from "@/components/AsgaardSofa";
import BlogHome from "@/components/BlogHome";
import Insta from "@/components/H-Insta";
import Herosection from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import TopPicks from "@/components/TopPicks";

export default function Home() {
  return (
    <div>
      <Herosection/>
      <ProductGrid/>
      <TopPicks/>
      <AsgaardSofa/>
      <BlogHome/>
      <Insta/>
    </div>
  );
}
