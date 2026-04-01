"use client"

import { Link } from "@/i18n/navigation"
import { usePathname } from "@/i18n/navigation"

export default function Sidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path ? "bg-white/20 text-white" : "text-gray-400 hover:text-white hover:bg-white/10"

  const navItems = [
    { name: "Users", href: "/admin/users" },
    { name: "Menu", href: "/admin/menu" },
    { name: "News", href: "/admin/news" },
    { name: "Category", href: "/admin/category" },
    { name: "Reservation", href: "/admin/reservation" },
    { name: "Contact", href: "/admin/contact" },
  ]

  return (
    <div className="w-64 min-h-screen bg-black/90 text-white p-6 flex flex-col border-r border-white/10">
      <div className="mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-bold">A</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight">Admin Panel</h1>
      </div>

      <nav className="flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={`px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive(item.href)}`}>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}