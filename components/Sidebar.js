"use client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GrCircleInformation } from "react-icons/gr";
import { MdOutlineFeedback } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BiBookHeart } from "react-icons/bi";
import { TbHomeEco } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiTwotoneHighlight } from "react-icons/ai";

const Sidebar = () => {
  const className =
    "bg-black w-[250px] transition-[margin-left] ease-in-out duration-500 fixed md:static top-0 bottom-0 left-0 z-40";

  const [toggle, setToggle] = useState(false);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen bg-white
         transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
          <Link
            href="/"
            className="flex justify-center items-center -ml-8 mx-auto md:pb-15 pb-10 pt-4 m-2 text-gray-900 rounded-lg group"
          >
            <AiTwotoneHighlight size={30} className="" />

            <span className="whitespace-nowrap text-xl ml-2 font-bold text-slate-200">
              Translato
            </span>
          </Link>
          <ul className="space-y-4 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
              >
                <TbHomeEco
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  height={4}
                  width={4}
                />

                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                  Нүүр
                </span>
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  toggleSidebar();
                }}
                href="#"
                className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
              >
                <BiBookHeart
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  height={4}
                  width={4}
                />
                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                  Хичээл
                </span>
                <RiArrowDropDownLine
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-white"
                  height={4}
                  width={4}
                />
              </a>
              {toggle && (
                <ul id="dropdown-example" className=" py-2 space-y-2">
                  <li>
                    <Link
                      href="/course"
                      className="flex items-center w-full p-2 text-gray-700  transition duration-75 rounded-lg pl-11 group hover:bg-slate-700 hover:text-slate-200 focus:bg-slate-700 focus:text-slate-200"
                    >
                      Хичээл 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-slate-700 hover:text-slate-200 focus:bg-slate-700 focus:text-slate-200"
                    >
                      Хичээл 2
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="flex items-center w-full p-2 text-gray-700 transition duration-75 rounded-lg pl-11 group hover:bg-slate-700 hover:text-slate-200 focus:bg-slate-700 focus:text-slate-200"
                    >
                      Хичээл 3
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
              >
                <MdOutlineFeedback
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  width={4}
                  height={4}
                />

                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                  Хүсэлт
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
              >
                <GrCircleInformation
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  height={4}
                  width={4}
                />
                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                  Хэрэглэгчийн мэдээлэл
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-slate-500 rounded-lg dark:text-white hover:bg-slate-700 dark:hover:bg-gray-700 group"
              >
                <CiLogout
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  height={4}
                  width={4}
                />

                <span className="flex-1 ms-3 whitespace-nowrap group-hover:text-white">
                  Гарах
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
