import Header from "@/components/admin/header"
import Sidebar from "@/components/admin/siteBar"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="auth-bg min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex min-h-screen flex-col">
        <Header />
        <div className="p-8 min-h-screen text-white">
          {children}
        </div>
      </div>
    </div>
  )
}