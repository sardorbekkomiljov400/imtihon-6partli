"use client";
import Image from "next/image";
import Button from "./Button";
import { IconShop, Ordericon } from "@/public/icons/page";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";



const HeroHeader = ({extraClass}:{extraClass?:string}) => {
  const path = usePathname();
  const router = useRouter()
 const t = useTranslations('Navbar')


const HeroList = [
  { id: "1", href: "/menu", title: t("menu") },
  { id: "2", href: "/news", title: t("news") },
  { id: "3", href: "/booking", title: t("booking") },
  { id: "4", href: "/about", title: t("about") },
  { id: "5", href: "/contact", title: t("contacts") },
];

  return (
    <header className={`flex items-center justify-between pb-18.75  ${extraClass}`}>
      <a href="/">
        <Image src={"/images/LOGO.png"} alt="LOGO" width={136} height={71} />
      </a>

      <nav className="flex items-center gap-10.75">
           {HeroList.map((item) => {
            const isActive = path === item.href;

             return (
                 <Link key={item.id} href={item.href} className={`font-medium ${isActive ? "text-red-500" : "text-black"}`}>{item.title}</Link>
             );
               })}
      </nav>

      <div className="flex items-center gap-7.5">
      <Button  type="button"  icon={<Ordericon/>}  iconPost="left"  extraStyle="border-2 border-[#000000] p-1.5 rounded-full hover:bg-blue-500 hover:border-blue-900 hover:text-white transition-all" onClick={() => router.push("/reservations_royhati")}/>
      <Button  type="button"  icon={<IconShop />}  iconPost="left"  extraStyle="border-2 border-[#000000] p-1.5 rounded-full  hover:bg-green-500 hover:border-green-500 hover:text-white transition-all"/>
      </div>
    </header>
  );
};

export default HeroHeader;