"use client"

import { useState } from "react"
import Modal from "@/components/Modal"
import { useRouter } from "@/i18n/navigation"

export default function Header() {

  const [modalOpen, setModalOpen] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    router.push("/sign-in")
  }

  return (
    <div className="w-full  h-16 bg-black/80 flex items-center justify-end px-6 text-white">

      <button onClick={() => setModalOpen(true)} className="bg-red-500 px-4 py-2 rounded-lg">
        Logout
      </button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Hisob"
       footer={
          <>
            <button onClick={() => setModalOpen(false)} className="px-4 py-2 rounded bg-gray-200 text-black">
              Yoq
            </button>
            <button onClick={handleLogout} className="px-4 py-2 rounded bg-red-500 text-white">
              Ha
            </button>
          </>
        }
      >
        Rostan ham chiqmoqchimisiz?
      </Modal>

    </div>
  )
}