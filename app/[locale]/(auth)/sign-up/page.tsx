"use client";

import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { Link, useRouter } from "@/i18n/navigation";
import { Signup } from "@/service/page";
import { setCookie } from "cookies-next";
import React, { useState } from "react";
import { toast, Toaster } from "sonner";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = {
      firstName: (form.firstName as HTMLInputElement).value.trim(),
      lastName: (form.lastName as HTMLInputElement).value.trim(),
      email: (form.email as HTMLInputElement).value.trim(),
      username: (form.username as HTMLInputElement).value.trim(),
      password: (form.password as HTMLInputElement).value.trim(),
    };

    const confirmPasswordInput = form.confirmPassword as HTMLInputElement | null;
    const acceptedPolicyInput = form.acceptedPolicy as HTMLInputElement | null;

    if (!data.firstName || !data.lastName || !data.email || !data.username || !data.password) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring", { duration: 3000, position: "top-center" });
      setLoading(false);
      return;
    }

    if (!confirmPasswordInput || data.password !== confirmPasswordInput.value.trim()) {
      toast.error("Parollar mos emas", { duration: 3000, position: "top-center" });
      setLoading(false);
      return;
    }

    if (!acceptedPolicyInput || !acceptedPolicyInput.checked) {
      toast.error("Iltimos, Политику конфиденциальности и Условия qabul qiling", { duration: 3000, position: "top-center" });
      setLoading(false);
      return;
    }

    try {
      const res = await Signup(data);
      const result = await res.json();

      if (!res.ok) throw new Error(result.message || "Signup failed");

      setCookie("token", result.data.accessToken, { maxAge: 60 * 60 * 24 });
      setCookie("user", `${result.data.user.firstName} ${result.data.user.lastName}`);

      toast.success("Royxatdan o'tish muvaffaqiyatli!", { duration: 3000, position: "top-center" });

         setTimeout(() => {
           router.push("/sign-in");
      },1500);


    } catch (error: any) {
      toast.error("Xatolik yuz berdi: " + (error.message || "Server bilan bog'lanishda muammo"), { duration: 3000, position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="containers flex py-15 justify-center relative">
      <form onSubmit={handleSubmit} className="w-115.75 bg-[#cccccc] rounded-[31px]">
        <div className="flex flex-col items-center gap-8 py-10 px-13 relative pt-20 z-2">
          <h2 className="text-[32px] font-bold">Зарегистрироваться</h2>
          <Input name="firstName"  title="Ваше имя" />
          <Input name="lastName"  title="Фамилия" />
          <Input name="email"  title="Ваш email" />
          <Input name="username"  title="Ваше имя пользователя" />
          <Input name="password" type="password"  title="Пароль" />
          <Input name="confirmPassword" type="password"  title="Подтвердите пароль" />
          <div className="flex items-center gap-2 w-full">
            <input type="checkbox" name="acceptedPolicy" className="w-4 h-4 accent-blue-600" />
            <label htmlFor="acceptedPolicy" className="text-xs">
              Я прочитал и принял Политику конфиденциальности и Условия*
            </label>
          </div>
          <div className="flex w-full justify-center items-center flex-col gap-3">
            <Button type="submit" disabled={loading} className="w-42.25 h-14.75 hover:bg-white hover:text-black">
               {loading ? "Loading..." : "Создать в аккаунт"}
            </Button>
            <Link href={"/sign-in"} className="text-[#06004C] text-xs cursor-pointer font-bold">
              Уже есть аккаунт?
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;