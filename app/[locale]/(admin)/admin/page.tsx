"use client"
import { usePathname, useRouter } from "@/i18n/navigation"

export default function AdminPage() {
  const router = useRouter()
  router.push("admin/users")
  return (
   <div></div>
  )
}