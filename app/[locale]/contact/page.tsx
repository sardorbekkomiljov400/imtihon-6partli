"use client"

import Button from '@/components/Button';
import HeroHeader from '@/components/HeroHeader'
import { Bround4icon, Bround5icon, Bround6icon } from '@/public/icons/page';
import { sendContact } from '@/service/page';
import { setCookie } from 'cookies-next';
import Link from 'next/link'
import { SubmitEvent } from 'react';
import { toast, Toaster } from 'sonner';

const Contacts = () => {
    const count: number = Number("10");  

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
  e.preventDefault();
  const data = {
    name: e.target.namee.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    message: e.target.message.value,
  };

  sendContact(data).then((res) => res.json()).then((data) => {
    setCookie("token" , data.accessToken)
     toast.success("Yuborildi" , { duration: 3000, position: "top-center" } )
  }).catch(() => {
    
     toast.success("Yuborilmadi" , { duration: 3000, position: "top-center" })
  })

  
}

  return (
    <section className='relative overflow-hidden py-10'>
      <div className='containers relative z-10 p-8 md:p-15 hero-bg rounded-[50px] bg-white/40 backdrop-blur-md shadow-lg border border-white/20 min-h-200'>
        <HeroHeader />
        <div className="flex items-center text-sm font-normal mb-10">
          <Link href="/" className="text-gray-500 hover:text-black transition-colors duration-200">Главная</Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-black font-medium">Контакты</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black italic">Контакты</h1>
        
        <div className="py-10">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20 text-center items-start justify-center">
            {/* Email */}
            <li className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Bround4icon />
              </div>
              <h3 className="text-xl font-bold">Напишите нам</h3>
              <div className="text-gray-700 space-y-1">
                <p>info@bmgsoft.com</p>
                <p>t.me/bmgsoft.com</p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Bround5icon />
              </div>
              <h3 className="text-xl font-bold">Позвоните нам</h3>
              <div className="text-gray-700 space-y-1 font-medium">
                <p>+998 90 876 78 88</p>
                <p>+998 98 653 32 22</p>
              </div>
            </li>

            <li className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <Bround6icon />
              </div>
              <h3 className="text-xl font-bold">Посетите нас</h3>
              <p className="text-gray-700 leading-relaxed italic">
                Узбекистан, Ташкент <br /> Улица, 24
              </p>
            </li>
          </ul>
        </div>

        <div className="max-w-2xl mx-auto mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black italic">Написать нам</h2>
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <input 
                type="text" 
                name='namee'
                placeholder="Ваше имя" 
                className="w-full p-4 bg-gray-200/50 border border-gray-300/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 transition-all"
              />
              <input 
                type="email" 
                name='email'
                placeholder="Ваш E-mail" 
                className="w-full p-4 bg-gray-200/50 border border-gray-300/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 transition-all"
              />
              <input 
                type="text" 
                name='phone'
                placeholder="Ваш номер телефона" 
                className="w-full p-4 bg-gray-200/50 border border-gray-300/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 transition-all"
              />
              <textarea 
                placeholder="Ваше сообщение" 
                rows={4}
                name='message'
                className="w-full p-4 bg-gray-200/50 border border-gray-300/50 rounded-xl placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-black/30 transition-all resize-none"
              ></textarea>
            </div>
            
            <div className="flex justify-end pt-2">
              <Button type="submit" title='Отправить' extraStyle="bg-black text-white px-10 py-3 rounded-2xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-md  hover:bg-white hover:text-black"/>
              
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts