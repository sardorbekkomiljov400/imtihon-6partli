import { FocusEventHandler } from "react"

type InputProps = {
  extraStyle?: string
  title?: string
  type?: React.HTMLInputTypeAttribute
  onFocus?: FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  name?: string
  value?: string | number
  onChange?: any
}

function Input({ onFocus, onBlur, extraStyle, title, type, name, value, onChange }: InputProps) {
  return (
    <input name={name} onFocus={onFocus} onBlur={onBlur} onChange={onChange} className={`py-3 w-90 outline-none border-b ${extraStyle}`} type={type} placeholder={title} value={value}/>
  )
}

export default Input