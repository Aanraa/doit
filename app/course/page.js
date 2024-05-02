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
import Link from "next/link";

export default function Course() {
  const [data, setData] = useState({});
  const [data2, setData2] = useState({});
  const [word, setWord] = useState(null);
  const [chinaData, setChinaData] = useState({});
  const [chinaData2, setChinaData2] = useState({});
  const [chinaWord, setChinaWord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [vid, setVid] = useState(false);
  const getWords1 = (id) => {
    const words = holboo.find((e) => e.id == id);
    const words2 = niileh.find((e) => e.id == id);
    const chinaWords = chinaHolboo.find((e) => e.id == id);
    const chinaWords2 = chinaNiileh.find((e) => e.id == id);
    setLoading(true);
    setTimeout(() => {
      if (words2 != null) {
        setVid(true);
      }
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
        <div className="py-10 ml-10">
          {test.map((item, i) => {
            return (
              <button
                key={i}
                type="button"
                class="py-2.5 px-5 me-2 mb-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
          <div class="flex items-center justify-center w-auto h-fit dark:bg-gray-800 dark:border-gray-700">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="w-auto">
            <div className="grid grid-cols-2 gap-20 mr-32 ml-32 my-14">
              <div className="p-6 border border-gray-200 rounded-lg bg-slate-50 h-fit space-y-8">
                {word && (
                  <div className="flex items-center justify-center h-20 mb-4 rounded-md shadow-sm dark:bg-gray-800 bg-white hover:text-xl">
                    <p className="text-center text-black dark:text-gray-500">
                      {word}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {data?.words?.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center rounded-md bg-white h-24 hover:text-lg dark:bg-gray-800"
                      >
                        <p className="text-center text-gray-700 dark:text-gray-500 text-wrap">
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
                      className="flex items-center justify-center h-24 rounded-md bg-white hover:text-lg dark:bg-gray-800"
                    >
                      <p className="text-center text-gray-700 dark:text-gray-500 text-wrap">
                        {el}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 border border-gray-200 rounded-lg bg-slate-50  h-fit space-y-8">
                {chinaWord && (
                  <div className="flex items-center justify-center h-20 mb-4 rounded bg-white hover:text-xl dark:bg-gray-800">
                    <p className="text-center text-black dark:text-gray-500">
                      {chinaWord}
                    </p>
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {chinaData?.words?.map((el, i) => {
                    return (
                      <div
                        key={i}
                        className="flex items-center justify-center hover:text-lg rounded-md bg-white h-24 dark:bg-gray-800"
                      >
                        <p className="text-center text-gray-700 dark:text-gray-500">
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
                      className="flex items-center justify-center h-24 rounded bg-white hover:text-lg dark:bg-gray-800"
                    >
                      <p className="text-center text-gray-700 dark:text-gray-500">
                        {el}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {vid && (
                <div className="h-auto">
                  <p className="text-black mb-2">Санал болгох</p>
                  <Link
                    href="https://www.youtube.com/watch?v=p3dtWSSYE3I"
                    className="text-blue-400 my-4 text-sm hover:text-blue-500"
                  >
                    Энд дарна уу
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
