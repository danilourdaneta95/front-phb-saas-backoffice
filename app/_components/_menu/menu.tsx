"use client";

import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <nav className="bg-white w-[80px] text-white h-full fixed top-0 left-0 overflow-y-auto border-r border-solid border-gray-300">
      <div className="p-4 w-[79px] h-20 border-b border-solid border-gray-300 flex items-center justify-center">
        <Link href="/">
          <Image
            src="/phb-logo.svg"
            alt="Logo PHB"
            width={50}
            height={50}
          />
        </Link>
      </div>
      <ul className="p-0 m-0">
        <Link href="/convenios">
          <li className="w-[79px] h-20 border-b border-solid border-gray-300 flex items-center justify-center">
            <Image
              src="/convenio-icon.svg"
              alt="Imagen convenio"
              width={32}
              height={37}
            />
          </li>
        </Link>
        <li className="w-[79px] h-20 border-b border-solid border-gray-300 flex items-center justify-center">
          <Image
            src="/historia-icon.svg"
            alt="Imagen historia clinica"
            width={32}
            height={32}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
