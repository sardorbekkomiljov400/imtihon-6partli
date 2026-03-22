import Button from "@/components/Button"
import { IconArrowRight } from "@/public/icons/page"
import Image from "next/image"

const Gallery = () => {
  return (
    <section className="pt-17.75 pb-50.5"> 
        <div className="containers relative">
            <h2 className="text-center text-[48px] font-extrabold mb-35.75  ">Новости/Галерея</h2>
            <ul className="flex items-center justify-center gap-27.5">
                <li className=" w-90 gallery-bg pt-25 pb-4.75 pl-7 pr-2 rounded-[30px]">
                    <div className="">
                        <Image className="absolute top-30" src={"/images/Galariya.png"} alt="img" width={213} height={157}/>
                    </div>
                    <p className="mb-2 text-[16px]">Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. </p>
                    <div className="flex items-center gap-3.25">
                        <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45}/>
                        <strong>Сергей</strong>
                    </div>
                </li>
                   <li className=" w-90 gallery-bg pt-25 pb-4.75 pl-7 pr-2 rounded-[30px]">
                    <div className="">
                        <Image className="absolute top-30" src={"/images/Galariya.png"} alt="img" width={213} height={157}/>
                    </div>
                    <p className="mb-2 text-[16px]">Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. </p>
                    <div className="flex items-center gap-3.25">
                        <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45}/>
                        <strong>Сергей</strong>
                    </div>
                </li>
                   <li className=" w-90 gallery-bg pt-25 pb-4.75 pl-7 pr-2 rounded-[30px]">
                    <div className="">
                        <Image className="absolute top-30" src={"/images/Galariya.png"} alt="img" width={213} height={157}/>
                    </div>
                    <p className="mb-2 text-[16px]">Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной. </p>
                    <div className="flex items-center gap-3.25">
                        <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45}/>
                        <strong>Сергей</strong>
                    </div>
                </li>
            </ul>
             <div className='flex justify-end mt-15'>
            <Button type="button" title="Посмотреть все" icon={<IconArrowRight/>} iconPost="right" extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff] hover:bg-white hover:text-black"/>
            </div>
        </div>
    </section>
  )
}

export default Gallery