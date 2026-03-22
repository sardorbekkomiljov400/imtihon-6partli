import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import { Brond1icon, Brond2icon, Bround3icon, Bround4icon, Bround5icon, Bround6icon, IconArrowRight } from '@/public/icons/page'
import Image from 'next/image'
import Link from 'next/link'

const Bround = () => {
  const schedule = [
    { day: "Понедельник", hours: "10:00-23:00" },
    { day: "Вторник", hours: "10:00-23:00" },
    { day: "Среда", hours: "10:00-23:00" },
    { day: "Четверг", hours: "10:00-23:00" },
    { day: "Пятница", hours: "10:00-23:00" },
    { day: "Воскресенье", hours: "11:00-22:00" },
  ];

  return (
    <section className='relative overflow-hidden'>
      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={250} height={250} className="absolute top-[10%] -left-20 rotate-[-25deg] opacity-80 z-0 pointer-events-none blur-[1px]" />
      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={180} height={180} className="absolute top-[35%] -right-10 rotate-45 opacity-70 z-0 pointer-events-none" />
      <Image src={"/images/bludaimg_chap.png"} alt="leaf" width={220} height={220} className="absolute bottom-[20%] -left-10 rotate-15 opacity-85 z-0 pointer-events-none blur-[2px]" />
      <Image src={"/images/bludaimg_ong.png"} alt="leaf" width={150} height={150} className="absolute bottom-[5%] right-10 rotate-[-15deg] opacity-60 z-0 pointer-events-none" />

      
      <div className='containers relative z-10 p-15 hero-bg rounded-[50px]'>
        <HeroHeader />
        <div className="flex items-center text-sm font-normal w-2xl">
          <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200">Главная</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-500 cursor-pointer font-medium hover:text-black transition-colors duration-200">Бронирование</span>
        </div>
        <div className="relative z-10 p-13.75 items-center">
          <h2 className="text-center text-[48px] font-extrabold mb-10">Бронирование</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10  rounded-[40px] p-8 md:p-12 mb-10 shadow-sm border border-white/20">
          <div className="flex-1 w-full">
            <h3 className="text-2xl font-bold mb-8 text-black">Часы работы</h3>
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <div key={index} className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-lg font-medium text-gray-700">{item.day}</span>
                  <span className="text-lg font-semibold text-black">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-29.5  relative">
            <Image  src={"/images/brond1.png"} width={504} height={576} alt="Restaurant interior" />
          </div>

        </div>
          <div className="w-full max-w-200 mx-auto py-20 px-4">
        <h2 className="text-[40px] font-extrabold text-center mb-16 text-black"> Хотите забронировать стол?</h2>
        <form className="space-y-10">
          <div className="relative border-b border-black/40 pb-3 flex items-center justify-between">
            <input  type="text"  placeholder="Ваш номер"  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400 font-light"/>
            <div className="shrink-0 ml-4">
            </div>
          </div>
          <div className="relative border-b border-black/40 pb-3 flex items-center justify-between cursor-pointer group">
            <input  readOnly type="text"  placeholder="На сколько человек?"  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400 font-light cursor-pointer"/>
            <div className="shrink-0 ml-4"><Brond1icon/></div>
          </div>

          <div className="relative border-b border-black/40 pb-3 flex items-center justify-between cursor-pointer">
            <input  readOnly type="text"  placeholder="Выберите дату"  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400 font-light cursor-pointer"/>
            <div className="shrink-0 ml-4"> <Brond2icon/></div>
          </div>
          <div className="relative border-b border-black/40 pb-3 flex items-center justify-between cursor-pointer">
            <input  readOnly type="text"  placeholder="Выберите время"  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400 font-light cursor-pointer"/>
            <div className="shrink-0 ml-4"> <Bround3icon/></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="relative border-b border-black/40 pb-3 flex items-center justify-between cursor-pointer">
              <input  readOnly type="text"  placeholder="Выберите место"  className="w-full bg-transparent outline-none text-xl placeholder:text-gray-400 font-light cursor-pointer"/>
              <div className="shrink-0 ml-4"><Brond1icon/></div>
            </div>
            <button type="button" className="text-[#3F4BB8] text-sm font-semibold text-left hover:underline w-fit">Выбрать места на карте</button>
          </div>
          <div className="flex justify-end pt-6">
          <Button type="submit" title="Забронировать"  extraStyle="py-[18px] mt-10.25 flex  px-[24px] rounded-[13px] bg-[#000000] text-white hover:bg-white hover:text-black"/>
          </div>
        </form>
          </div>
            <div>
              <h2 className="text-center text-[48px] font-extrabold mb-10">Связаться с нами</h2>
              <div>
                <div className="py-20">
                  <h2 className="text-4xl font-bold text-center mb-16"> Связаться с нами</h2>
                  <ul className="flex items-start justify-center gap-32 text-center">
                    <li className="flex flex-col items-center gap-3 max-w-50">
                      <Bround4icon />
                      <h3 className="text-xl font-semibold">Напишите нам</h3>
                      <p className="text-gray-600">info@bmgsoft.com</p>
                      <p className="text-gray-600">t.me/bmgsoft.com</p>
                    </li>
                    <li className="flex flex-col items-center gap-3 max-w-50">
                      <Bround5icon />
                      <h3 className="text-xl font-semibold">Позвоните нам</h3>
                      <p className="text-gray-600">+998 90 876 78 88</p>
                      <p className="text-gray-600">+998 98 653 32 22</p>
                    </li>
                    <li className="flex flex-col items-center gap-3 max-w-55">
                      <Bround6icon />
                      <h3 className="text-xl font-semibold">Посетите нас</h3>
                      <p className="text-gray-600"> Узбекистан, Ташкент <br /> Улица, 24</p>
                    </li>
                  </ul>
    </div>
              </div>
            </div>
            </div>
              <div className="containers relative z-10 p-13.75">
            <h2 className="text-center text-[48px] font-extrabold mb-35.75  ">Новости/Галерея</h2>
            <ul className="flex items-center justify-center gap-27.5">
              <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                    <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px] left-3"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
                            <strong>Сергей</strong>
                         </div>
                        </li>
                 <li className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                   <div className="absolute -top-20 left-2">
                        <Image src={"/images/Galariya.png"}  alt="img"  width={213}  height={157}  className="rounded-[20px]"/>
                    </div>
                    <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">
                       Используйте гибкие структуры, чтобы предоставить надежный обзор для обзоров высокого уровня. Итеративные подходы к данным корпоративной.
                       </p>

                       <div className="flex items-center gap-3.25 w-full justify-start">
                         <Image src={"/images/Avatar.png"} alt="IMg" width={45} height={45} className="rounded-full" />
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

export default Bround