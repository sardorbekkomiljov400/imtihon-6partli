import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import { IconArrowRight } from '@/public/icons/page';
import Image from 'next/image'
import Link from 'next/link'

const chefs = [
  { id: 3, name: 'Александр Петро', role: 'главный повар', img: '/images/about3.png' },
  { id: 4, name: 'Александр Петро', role: 'помощник повара', img: '/images/about4.png' },
  { id: 5, name: 'Александр Петро', role: 'burger king', img: '/images/about5.png' },
];

const waiters = [
  { id: 6, name: 'Жулия Виллиям', role: 'официантка', img: '/images/about6.png' },
  { id: 7, name: 'Жулия Виллиям', role: 'официантка', img: '/images/about7.png' },
  { id: 8, name: 'Жулия Виллиям', role: 'официантка', img: '/images/about8.png' },
];

const Abaunt = () => {
  return (
    <section className='relative overflow-hidden py-10'>
      <div className='containers relative z-10 p-15 hero-bg rounded-[50px] bg-white/40 backdrop-blur-md shadow-lg border border-white/20'>
        <HeroHeader />
        
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm font-normal w-2xl mb-12">
          <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200">Главная</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-gray-500 cursor-pointer font-medium hover:text-black transition-colors duration-200">О нас</span>
        </div>

        {/* --- O NAS SECTION --- */}
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-8 text-black">О нас</h2>
          <div className="space-y-6 text-gray-800 text-[16px] leading-relaxed">
            <p>
              С 1995 года наша миссия в ресторане — питать и вдохновлять каждого члена команды, гостя и сообщество, которому мы служим. 
              Спустя все эти годы эти основные ценности остаются в основе всего, что мы делаем. От нашего меню до наших услуг и способов 
              ведения бизнеса — наш свежий, нестандартный и человечный взгляд отличает нас. Мы называем это Необыкновенной Добротой. И это во всем, что мы делаем.
            </p>
            <p>
              Имея более 450 ресторанов в 35 штатах и более 8000 членов команды, мы два года подряд были названы Forbes одним из лучших 
              работодателей Америки в области разнообразия. Денверский деловой журнал признал нас одним из лучших мест для работы. 
            </p>
          </div>
        </div>

        {/* --- NASHA EDA SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-black">Наша еда</h2>
            <div className="text-gray-700 space-y-4 mb-8 text-[16px] leading-relaxed">
              <p>
                Наша страсть — создавать исключительные впечатления от еды по разумной цене. От традиционных и современных блюд до наших собственных кулинарных творений...
              </p>
              <p>
                От «Панна Роза» до японской лапши, салата «Мед» и всемирно известных макарон с сыром «Висконсин» — мы используем только самые лучшие и полезные ингредиенты.
              </p>
            </div>
            <Button 
              type="button" 
              title="Посмотреть меню" 
              icon={<IconArrowRight/>} 
              iconPost="right" 
              extraStyle="p-[20px] flex items-center gap-[10px] text-[18px] font-semibold bg-[#000000] rounded-t-[13px] rounded-l-[13px] text-[#ffffff] hover:bg-white hover:text-black transition-all"
            />
          </div>
          <div className="flex-1 relative w-full aspect-[4/3]">
            <Image 
              src="/images/about1.png" 
              alt="Food bowl" 
              fill 
              className="object-cover rounded-[40px] shadow-md"
            />
          </div>
        </div>

        {/* --- NASH PUT SECTION --- */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-black">Наш путь</h2>
            <div className="text-gray-700 space-y-4 text-[16px] leading-relaxed">
              <p>
                С самого начала мы взяли на себя обязательство предлагать свежие продукты, свежие ингредиенты и новый взгляд на заботу о наших гостях, членах нашей команды и наших сообществах.
              </p>
              <p>
                Продолжая расти, мы реализуем ключевые инициативы во всей нашей компании, чтобы поддержать светлое будущее.
              </p>
            </div>
          </div>
          <div className="flex-1 relative w-full aspect-[4/3]">
            <Image 
              src="/images/about2.png" 
              alt="Burger Path" 
              fill 
              className="object-cover rounded-[40px] shadow-md"
            />
          </div>
        </div>

        {/* --- NASHA KOMANDA SECTION --- */}
        <div className="mb-24 px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">Наша команда</h2>
          
          {/* Top Row: Oshpazlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {chefs.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image 
                    src={item.img} 
                    alt={item.role} 
                    fill 
                    sizes="224px"
                    className="object-cover" 
                  />
                </div>
                <h4 className="text-xl font-bold text-black">{item.name}</h4>
                <p className="text-gray-500 text-sm italic">{item.role}</p>
              </div>
            ))}
          </div>

          {/* Bottom Row: Ofitsiantlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {waiters.map((item) => (
              <div key={item.id} className="flex flex-col items-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                  <Image 
                    src={item.img} 
                    alt={item.role} 
                    fill 
                    sizes="224px"
                    className="object-cover" 
                  />
                </div>
                <h4 className="text-xl font-bold text-black">{item.name}</h4>
                <p className="text-gray-500 text-sm italic">{item.role}</p>
              </div>
            ))}
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

export default Abaunt