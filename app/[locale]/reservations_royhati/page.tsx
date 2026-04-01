"use client"

import HeroHeader from "@/components/HeroHeader"
import { Link } from "@/i18n/navigation"
 
const OrderRoyhat = () => {
 

  return (
    <section className="py-16">
      <div className="relative containers p-15 hero-bg rounded-[50px]">
        <HeroHeader />
        <Link href="/" className=" text-gray-500 !hover:text-black hover:transition-colors hover:duration-200">Главная</Link>
         <span className="mx-2 text-gray-400">›</span>
         <span className="text-black font-medium">Брон</span>
        <h2 className="text-4xl font-extrabold text-center mb-10">Броньлар рўйхати</h2>
          <p className="text-center text-gray-500">Hozircha bronlar mavjud emas</p>
      </div>
    </section>
  )
}

export default OrderRoyhat