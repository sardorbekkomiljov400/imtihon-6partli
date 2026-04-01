"use client"

import Button from '@/components/Button'
import HeroHeader from '@/components/HeroHeader'
import Input from '@/components/Input'
import Select from '@/components/UserSelect'
import Gallery from '@/modules/gallery/page'
import {Bround4icon, Bround5icon, Bround6icon } from '@/public/icons/page'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { cerateBron } from '@/service/page'
import { toast } from 'sonner'

const Booking = () => {
  const [date, setDate] = useState("text")
  const [time, setTime] = useState("text")

  const [form, setForm] = useState({
    email: "",
    guestCount: 0,
    reservationDate: "",
    reservationTime: "",
    tableId: 1
  })

  const List = [
    {id:"1" , icons:Bround4icon , title:"Напишите нам" , address:"info@bmgsoft.com" , address1:"t.me/bmgsoft.com"},
    {id:"2" , icons:Bround5icon , title:"Позвоните нам" , address: "+9998908767888",  address1:"+9989865332322"},
    {id:"3" , icons:Bround6icon , title:"Посетите нас" , address:"Узбекистан, Ташкент" ,address1:"Улица, 24"},
  ]

  const handleChange = (e:any) => {
    const { name, value } = e.target
    setForm(prev => ({
      ...prev,
      [name]: name === "guestCount" || name === "tableId" ? Number(value) : value
    }))
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      const body = {
        email: form.email, 
        guestCount: Number(form.guestCount),
        reservationDate: form.reservationDate,
        reservationTime: form.reservationTime,
        tableId: Number(form.tableId)
      }

      const res = await cerateBron(body)
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message)
      }

      toast.success("Бронь успешно создана" , { duration: 3000, position: "top-center" })
      setForm({
        email: "",
        guestCount: 0,
        reservationDate: "",
        reservationTime: "",
        tableId: 1
      })
    } catch (error:any) {
      toast.error(error.message , { duration: 3000, position: "top-center" })
    }
  }

  return (
    <>
      <section className='hero-bg2 mb-13.75'>
        <div className='containers p-15 hero-bg rounded-[50px]'>
          <HeroHeader extraClass='mb-[107px]'/>
          <div className='flex items-center mb-7.5'>
            <Link className='flex items-center opacity-50' href="/">Главная</Link>
            <span className="mx-2 text-gray-400">›</span>
            <span className='opacity-100 cursor-pointer'>Бронирование</span>
          </div>
          <div className='mb-17.75 relative'>
            <Image className='absolute top-45 -right-40' src={"/images/bludaimg_chap.png"} alt='img' width={258} height={258}/>
            <Image className='absolute top-140 -left-60' src={"/images/bludaimg_ong.png"} alt='img' width={258} height={258}/>
            <h2 className='text-center mb-12.5 font-extrabold text-[48px] text-[#000000]'>Бронирование</h2>
            <div className='flex items-center justify-between'>
              <div className='w-136'>
                <h3 className='font-bold text-[32px] mb-9' >Часы работы</h3>
                {["Понедельник","Вторник","Среда","Четверг","Пятница","Воскресенье"].map((day, i) => (
                  <div key={i} className='flex items-center justify-between mb-6 border-b'>
                    <strong className='font-medium text-[20px]'>{day}</strong>
                    <p className='font-medium text-[20px]'>{day === "Воскресенье" ? "11:00-23:00" : "10:00-23:00"}</p>
                  </div>
                ))}
              </div>
              <Image className='' src={"/images/brond1.png"} alt='bron img' width={503} height={676}/>
            </div>
          </div>  
          <div>
            <h2 className='text-center mb-13.5 font-extrabold text-[48px] '>Хотите забронировать стол?</h2>
            <div className='flex justify-center mx-auto relative'>
              <form className='w-225.5' onSubmit={handleSubmit}>
                <Input name="email" value={form.email} onChange={handleChange} extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Ваш email" type="tel"/>
                <Select name="guestCount" value={form.guestCount} onChange={handleChange} extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="На сколько человек?"/>
                <div className="flex flex-col">
                  <Input name="reservationDate" value={form.reservationDate} onChange={handleChange} extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Выберите дату" type={date} onFocus={() => setDate("date")} onBlur={() => setDate("text")}/>
                  <Input name="reservationTime" value={form.reservationTime} onChange={handleChange} extraStyle="mb-[20px] w-full text-[12px] text-[#585858]" title="Выберите время" type={time} onFocus={() => setTime("time")}  onBlur={() => setTime("text")}/>
                </div>
                <label>
                  <Select name="tableId" value={form.tableId} onChange={handleChange} extraStyle="mb-[8px] w-full text-[12px] text-[#585858]" title="Выберите место"/>
                  <a className="text-[13px] w-full text-[#06004C]" href="#">Выбрать места на карте</a>
                </label>
                <div className='flex justify-end'>
                  <Button type="submit" title="Забронировать" extraStyle="py-[18px] mt-10.25 px-[24px] rounded-[13px] bg-[#000000] text-white"/>
                </div>
              </form>  
            </div>
          </div>
          <div>
            <h3 className='font-extrabold text-[48px] text-center text-[#000000] mb-20'>Связаться с нами</h3>
            <ul className='flex items-center justify-between w-225.5 mx-auto'>
              {List.map(item => <li className='text-center' key={item.id}>
                  <div className='flex items-center justify-center mb-6.75'><item.icons/></div>
                  <strong className='mb-0.5 font-semibold text-[27px]'>{item.title}</strong>
                  <p className='text-[16px]'>{item.address}</p>
                  <p className='text-[16px]'>{item.address1}</p>
              </li>)}
            </ul>
          </div>
        </div>
      </section>
      <Gallery/>
    </>
  )
}

export default Booking