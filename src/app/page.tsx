
import Hero from './../components/home/hero';
import SummerProducts from './../components/home/product-list/summer-sale';
import TrendingProducts from "@/components/home/product-list/Trending-sale";


export default function Home() {
  return (
    <main>
        <Hero/>
        <div className="px-6">
        <TrendingProducts/>
        <SummerProducts/>
        {/* <ProductCard/> */}
        {/* <CartPage/> */}
        </div>
    </main>
  );
}
