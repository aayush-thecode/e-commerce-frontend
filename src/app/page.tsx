import ProductCard from "@/components/auth/product-cart/product-cart";
import Hero from './../components/home/hero';
import SummerProducts from './../components/home/product-list/summer-sale';
import TrendingProducts from "@/components/home/product-list/Trending-sale";


export default function Home() {
  return (
    <main>
        <Hero/>
        <TrendingProducts/>
        <SummerProducts/>
        <ProductCard/>
        {/* <CartPage/> */}
    </main>
  );
}
