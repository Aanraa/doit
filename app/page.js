"use client";
import {
  chinaHolboo,
  chinaNiileh,
  holboo,
  niileh,
  test,
} from "@/components/Json";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className="h-screen flex flex-row justify-start w-auto bg-white">
      <div className="p-4 sm:ml-64 ">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt="hero"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            />
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Microdosing synth tattooed vexillologist
              </h1>
              <p class="mb-8 leading-relaxed">
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
                celiac mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
              <div class="flex justify-center">
                <button class=" inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
