
import  { getProductById } from '@/api/product'; 
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: {
    id: string;
  };
}

const ProductDetailPage = async ({ params }: Props) => {
  const productId = params.id;

  const res = await getProductById(productId); 
  const product = res?.data;

  if (!product) return notFound();

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <Image
        src={`${process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '')}/${product.coverImage?.replace(/^\//, '')}`}
        width={500}
        height={500}
        alt={product.name}
        className="rounded-xl mb-4"
      />
      <p className="text-lg"> रु. {product.price}</p>
    </div>
  );
};

export default ProductDetailPage;
