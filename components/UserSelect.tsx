"use client"
import { BookingArrowbottomIcon } from "@/public/icons/page"
import { useState } from "react"

type SelectType = {
  extraStyle?: string
  title: string
  name: string
  value?: number
  onChange?: (e: { target: { name: string; value: number } }) => void
}

const list = [1,2,3,4,5,6,7,8,9,10]

function Select({ extraStyle, title, name, value, onChange }: SelectType) {
  const [open, setOpen] = useState(false)

  const handleSelect = (item: number) => {
    if (onChange && name) {
      onChange({ target: { name, value: item } })
    }
    setOpen(false)
  }

  return (
    <div className={`relative duration-300 w-90 ${extraStyle}`}>
      <div  onClick={() => setOpen(!open)}  className="py-3 border-b cursor-pointer flex justify-between items-center">
        {value !== undefined && value !== null ? value : <span className="text-black/50">{title}</span>}
        <BookingArrowbottomIcon/>
       </div>
      {open && (
        <div className="absolute mt-1 w-15 bg-white border shadow max-h-40 overflow-y-auto z-50">
          {list.map((item) => (
            <div  key={item}  onClick={() => handleSelect(item)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select