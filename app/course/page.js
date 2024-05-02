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

export default function Course() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [word, setWord] = useState(null);
  const [chinaData, setChinaData] = useState({});
  const [chinaData2, setChinaData2] = useState({});
  const [chinaWord, setChinaWord] = useState(null);
  const [loading, setLoading] = useState(false);
  const getWords1 = (id) => {
    const words = holboo.find((e) => e.id == id);
    const words2 = niileh.find((e) => e.id == id);
    const chinaWords = chinaHolboo.find((e) => e.id == id);
    const chinaWords2 = chinaNiileh.find((e) => e.id == id);
    setLoading(true);
    setTimeout(() => {
      setData(words);
      setData2(words2);
      setWord(words.name);
      setChinaWord(chinaWords.name);
      setChinaData(chinaWords);
      setChinaData2(chinaWords2);
      setLoading(false);
    }, "1000");
  };
  return (
    <div className="h-screen w-full  bg-white">
      <div className="p-4 sm:ml-64 ">
        <div className="py-10 ">
          {test.map((item, i) => {
            return (
              <button
                key={i}
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => {
                  getWords1(item.id);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {loading ? (
          <div>Loading</div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-2 gap-20 mr-32 ml-32">
              <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                {word && (
                  <div className="flex items-center justify-center h-28 mb-4 rounded bg-red-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      {word}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {data?.words?.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
                      >
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                          {el}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {data2?.words?.map((el, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center h-24 rounded bg-pink-50 dark:bg-gray-800"
                    >
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        {el}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                {chinaWord && (
                  <div className="flex items-center justify-center h-28 mb-4 rounded bg-red-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                      {chinaWord}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {chinaData?.words?.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800"
                      >
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                          {el}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {chinaData2?.words?.map((el, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-center h-24 rounded bg-pink-50 dark:bg-gray-800"
                    >
                      <p className="text-2xl text-gray-400 dark:text-gray-500">
                        {el}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
