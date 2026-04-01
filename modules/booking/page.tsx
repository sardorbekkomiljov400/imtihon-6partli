"use client"
import Button from "@/components/Button"
import Input from "@/components/Input"
import { BookingIcon, IconArrowRight } from "@/public/icons/page"
import { cerateBron } from "@/service/page"
import { useState } from "react"
import { toast } from "sonner"

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

const handleChange = (e:any) => {
  const { name, value } = e.target
  setForm((prev) => ({
    ...prev,
    [name]: name === "guestCount" || name === "tableId"
      ? Number(value)
      : value
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

    console.log(body)  

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
    <section className="py-16.75 booking-bg-img"> 
      <div className="containers relative ">
        <div className=" booking-bg w-118.75 px-13.5 pb-16.25 pt-25 rounded-[31px]" >
          <div className=" bg-ic p-2 rounded-full absolute bottom-150">
            <div className="bg-black p-7 rounded-full">
              <BookingIcon/>
            </div>
          </div>
          <h2 className="text-[32px] font-bold text-[#000000] mb-6.25">Забронировать стол</h2>
          <form onSubmit={handleSubmit}>
            <Input name="email" value={form.email} onChange={handleChange} extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Ваш email" type="email"/>
            <Input name="guestCount" value={form.guestCount} onChange={handleChange} extraStyle="mb-[20px] text-[12px] text-[#585858]" type="number" title="На сколько человек?"/>
            <div className="flex flex-col">
              <Input name="reservationDate" value={form.reservationDate} onChange={handleChange} extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите дату" type={date} onFocus={() => setDate("date")} onBlur={() => setDate("text")}/>
              <Input name="reservationTime" value={form.reservationTime} onChange={handleChange} extraStyle="mb-[20px] text-[12px] text-[#585858]" title="Выберите время" type={time} onFocus={() => setTime("time")} onBlur={() => setTime("text")}/>
            </div>
            <label>
              <Input extraStyle="mb-[8px] text-[12px] text-[#585858]" type="text" title="Выберите место"  onChange={(e:any)=>setForm(prev=>({...prev,tableId:Number(e.target.value)}))}/>
              <a className="text-[13px] text-[#06004C]" href="#">Выбрать места на карте</a>
            </label>

            <div>
              <Button type="submit" title="Забронировать" icon={<IconArrowRight/>} extraStyle="py-[18px] mt-10.25 flex px-[24px] rounded-[13px] bg-[#000000] text-white hover:bg-white hover:text-black"/>
            </div>

          </form>

        </div>
      </div>
    </section>
  )
}

export default Booking