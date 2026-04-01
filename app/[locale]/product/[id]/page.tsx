"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { addCartItem, getAll } from "@/service/page";
import { useParams } from "next/navigation";
import HeroHeader from "@/components/HeroHeader";
import { Link } from "@/i18n/navigation";
import { RetingIcon } from "@/public/icons/page";
import Button from "@/components/Button";

type ProductType = {
  id: number | string;
  name: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  reviewsCount: number;
  quantity?: number;
};

const ProductClient = () => {
  const params = useParams();
  const id = params?.id;

  const handleAddToCart = (productId: number) => {
    addCartItem({
      userId: 1,
      sessionId: "1",
      productId,
      quantity: 1
    });
  };

  const [product, setProduct] = useState<ProductType | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  useEffect(() => {
    if (!id) return;

    getAll("products")
      .then(res => res.json())
      .then(data => {
        const prod = data.data.find((p: ProductType) => String(p.id) === String(id));
        setProduct(prod || null);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Product not found</p>;

  return (
    <section className="hero-bg2 pb-20">
      <div className="containers py-16">
        <HeroHeader extraClass="mb-16" />
        <div className="flex items-center text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-black transition">Главная</Link>
          <span className="mx-2 text-gray-400">›</span>
           <Link href="/menu" className="text-gray-500 hover:text-black transition">Меню</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-black font-medium">{product.name}</span>
        </div>
        <div className="hero-bg2 rounded-3xl shadow-lg p-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex justify-center w-full lg:w-105">
            <Image src={`https://anorkhulov.uz/${product.image}`} alt={product.name} width={420} height={420} className="rounded-2xl object-contain"/>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center gap-4 mb-6">
              <strong className="text-2xl font-bold">
              {product.price}$
              </strong>
              <span className="flex items-center gap-1 text-yellow-500">
                <RetingIcon />
                <RetingIcon />
                <RetingIcon />
                <RetingIcon />
                <RetingIcon />
                <span className="text-black ml-1">{product.rating}</span>
              </span>
              <Link href="#" className="text-blue-600 hover:underline">(Смотреть отзывы)</Link>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <Button type="button" onClick={decrease} title="−" extraStyle="w-10 h-10 flex items-center justify-center rounded-lg border text-xl font-bold hover:bg-gray-100"/>
              <span className="w-12 text-center font-semibold text-lg">
                {quantity}
              </span>
              <Button type="button" onClick={increase} title="+" extraStyle="w-10 h-10 flex items-center justify-center rounded-lg border text-xl font-bold hover:bg-gray-100"/>
            </div>
            <Button type="button" title="В корзину" extraStyle="bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition" onClick={() => handleAddToCart(Number(product.id))}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductClient;