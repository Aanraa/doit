"use client";
import {
  chinaHolboo,
  chinaNiileh,
  holboo,
  niileh,
  test,
} from "@/components/Json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-row justify-start w-auto bg-white">
      <div className="p-4 sm:ml-64 ">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Хэл сурах боломжоо нэмэгдүүл
              </h1>
              <p className="mb-8 leading-relaxed">
                Яг хийж эхлэх үед Та юу хийх, яаж хийх, хэзээ хийх, хэр удаан
                хийхээ ойлгож бодож эхэлнэ.Тиймээс урам хугарсан өөртөө бурууг
                битгий өгөөрэй. Яагаад гэвэл зорилгоо тодорхой тавьж, өөрийнхөө
                асуудлыг олж ажиллаж эхлэх үеэс л та сайжирч эхэлнэ.
              </p>
              <div className="flex justify-center">
                <Link
                  href={"/course"}
                  className=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Аялал эхлүүлэх
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
