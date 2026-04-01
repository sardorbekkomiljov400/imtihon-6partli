"use client"

import Button from "@/components/Button"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { IconArrowRight, PapularLikeIcon, PapularShopIcon } from "@/public/icons/page"

const Popular = () => {
  const t = useTranslations("Popular")
  const tHero = useTranslations("Hero")  

  const dishes = [1, 2, 3, 4,5,6]

  return (
    <section className="py-15 Popular-bg">
      <div className="containers">
        <h2 className="text-[48px] text-[#000000] text-center font-extrabold mb-30">{t("title")}</h2>
        <Carousel opts={{align:'start'}}>
  <CarouselContent>
    {dishes.map((item) => (
            <CarouselItem key={item} className="relative transition-transform duration-300   cursor-pointer basis-1 md:basis-1/2 lg:basis-1/4 mb-10">
              <div className="hero-bg rounded-[38px] pt-40 p-7.5 ">
                <div className="mb-5">
                <Image  className="  absolute -top-5   left-20"  src={"/images/Papular-img.png"}  alt="Img"  width={180}  height={200} />
                <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">
                  {t("dishName")} <PapularLikeIcon />
                </strong>
                <p className="text-[15px] text-[#000000] mb-1"> {t("dishDesc")}</p>
                </div>
                <div className="flex items-end justify-between">
                  <strong className="font-bold text-[24px] text-[#000000]">$10.00</strong>
                  <Button  type="button"  extraStyle="p-[12px] bg-[#000000] rounded-[5px] hover:bg-green-600 transition-colors"  icon={<PapularShopIcon />}  iconPost="left" />
                </div>
              </div>
            </CarouselItem>
          ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
{/* 
        <ul className="flex items-center justify-center mb-14.25 gap-17.5 ">
          {dishes.map((item) => (
            <li key={item} className="relative transition-transform duration-300 hover:scale-110 cursor-pointer">
              <div className="hero-bg rounded-[38px] pt-40 p-7.5">
                <Image  className="absolute bottom-35 right-2"  src={"/images/Papular-img.png"}  alt="Img"  width={243}  height={243} />
                <strong className="flex items-center justify-between font-bold mb-1 text-[24px] text-[#000000]">
                  {t("dishName")} <PapularLikeIcon />
                </strong>
                <p className="text-[15px] text-[#000000] mb-1"> {t("dishDesc")}</p>
                <div className="flex items-end justify-between">
                  <strong className="font-bold text-[24px] text-[#000000]">$10.00</strong>
                  <Button  type="button"  extraStyle="p-[12px] bg-[#000000] rounded-[5px] hover:bg-green-600 transition-colors"  icon={<PapularShopIcon />}  iconPost="left" />
                </div>
              </div>
            </li>
          ))}
        </ul> */}

        <div className="flex justify-end">
          <Button  type="button"  title={tHero("button")}  icon={<IconArrowRight />} iconPost="right"  extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff] hover:bg-white hover:text-black transition-all" />
        </div>
      </div>
    </section>
  )
}

export default Popular