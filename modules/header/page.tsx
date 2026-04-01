"use client";

import Button from "@/components/Button";
import LanguageSelect from "@/components/LanguageSelect";
import Modal from "@/components/Modal";
import { usePathname, useRouter } from "@/i18n/navigation";
import { IconEmail, IconTel, IconUser } from "@/public/icons/page";
import { getCookie, deleteCookie } from "cookies-next";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Header = () => {
  const t = useTranslations("Navbar");
  const router = useRouter();
  const path = usePathname();
  const [user, setUser] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const cookieUser = getCookie("user");
    if (cookieUser) setUser(cookieUser.toString());
  }, []);

  const handleUserClick = () => {
    const cookieUser = getCookie("user");
    if (cookieUser) {
      setModalOpen(true);  
    } else {
      router.push("/sign-in"); 
    }
  };

  const handleLogout = () => {
    deleteCookie("token");
    deleteCookie("user");
    setUser(null);
    setModalOpen(false);
    router.refresh();  
  };

    const isAuthPage = path.includes("sign-in") || path.includes("sign-up") || path.includes("admin");

  return (
       <header className={`pt-3 pb-11.25 ${isAuthPage? "hidden" : ""}`}>
      <div className="containers pt-3.75 pb-11.5 flex items-center justify-between">
        <div className="flex items-center gap-6.75">
          <a className="flex items-center gap-3 text-[16px] text-[#000000]" href="tel:+99890758383833">
            <IconTel />
            +998(90)758383833
          </a>
          <a className="flex items-center gap-3 text-[16px] text-[#000000]" href="mailto:info@bmgsoft.com">
            <IconEmail />
            info@bmgsoft.com
          </a>
        </div>

        <div className="flex items-center gap-8.75">
          <div className="relative group flex items-center gap-3.5 cursor-pointer">
            <LanguageSelect />
          </div>

          <Button
            onClick={handleUserClick}
            type="button"
            extraStyle="flex font-semibold items-center gap-3 py-2 rounded-[5px] px-2 bg-[#000000] text-[#FFFFFF] text-[10px] hover:bg-white hover:text-black transition-colors"
            icon={<IconUser />}
            iconPost="left"
            title={user ? user : t("login")}
          />
        </div>
      </div>

      {modalOpen && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Аккаунт"
          footer={<div className="flex gap-3 justify-end">
              <button className="px-3 py-1 rounded bg-gray-200 text-black" onClick={() => setModalOpen(false)}>Bekor qilish</button>
              <button className="px-3 py-1 rounded bg-red-500 text-white"onClick={handleLogout}>Chiqish</button>
            </div>
          }>
          <p>Haqiqatan ham chiqmoqchimisiz?</p>
        </Modal>
      )}
    </header>
  );
};

export default Header;