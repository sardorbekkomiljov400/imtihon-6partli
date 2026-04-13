
import { useEffect } from "react"
import { useRouter } from "@/i18n/navigation"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/admin/users")
  }, [router])

  return <div></div>
}