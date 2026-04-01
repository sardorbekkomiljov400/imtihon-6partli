"use client";

import HeroHeader from "@/components/HeroHeader";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getAll } from "@/service/page";

type NewsType = {
  description: string;
  image: string;
  author: {
    avatar: string;
    firstName: string;
  };
};

type GalleryType = {
  image: string;
};

const news = () => {
  const [news, setNews] = useState<NewsType[]>([]);
  const [gallery, setGallery] = useState<GalleryType[]>([]);

  useEffect(() => {
    getAll("news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getAll("galleries")
      .then((res) => res.json())
      .then((data) => {
        setGallery(data.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className=" admin_bg rounded-2xl overflow-hidden">
        <div className="relative z-10 p-13.75 items-center">
          <h2 className="text-center text-[48px] font-extrabold mb-35.75">Новости</h2>
          <ul className="grid grid-cols-3 gap-y-35 justify-items-center mx-auto w-full gap-27.5">
            {news.map((item, index) => (
              <li key={index} className="relative w-90 gallery-bg pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                <div className="absolute -top-20 left-2">
                  <Image src={`https://anorkhulov.uz/${item.image}`} alt="img" width={213} height={157} className="rounded-[20px]"/>
                </div>
                <p className="mt-4 mb-4 text-[16px] leading-relaxed text-left w-full">{item.description}</p>
                <div className="flex items-center gap-3.25 w-full justify-start">
                  <Image src={`https://anorkhulov.uz/${item.author.avatar}`} alt="avatar" width={45} height={45} className="rounded-full"/>
                  <strong>{item.author.firstName}</strong>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-center text-[48px] font-extrabold mb-35.75">
            Галерея
          </h2>
          <ul className="grid grid-cols-4 p-13.75  gap-y-35 gap-x-10 justify-items-center mx-auto w-full">
            {gallery.map((item, index) => (
              <li key={index} className="relative w-90 pt-28 pb-5 px-7 rounded-[30px] flex flex-col items-center">
                <div className="absolute -top-20 left-2">
                  <Image src={`https://anorkhulov.uz/${item.image}`} alt="img" width={273} height={185} className="rounded-[20px]"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
    </section>
  );
};

export default  news;