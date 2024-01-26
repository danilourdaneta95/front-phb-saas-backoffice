"use client";

import { Button } from "@/components/ui/button";
import { HeaderTypes } from "./types";
import "./style.css";

const Header = ({
  text,
  breadCrumb,
  onCancel,
  onSave,
  onNew,
  newBtnText = "Nuevo +",
  saveBtnText = "Guardar",
  cancelBtnText = "Cancelar",
  showNewBtn = false,
  hasTabs = false,
}: HeaderTypes) => {
  console.log(onCancel || onNew || onSave);
  return (
    <header
      className={`col-start-2 row-start-1 min-h-[80px] ${
        !hasTabs && "border-b border-solid border-gray-300"
      }`}
    >
      <div className="flex flex-row w-full">
        <div className="w-full min-h-[80px]">
          <div className="ml-[20px] mt-[16px] text-[12px] min-h-[16px]">
            {breadCrumb ? (
              <ol className="inline-flex items-center space-x-1">
                <li className="inline-flex items-center">
                  <a href="#" className="text-black">
                    {breadCrumb}
                  </a>
                </li>
              </ol>
            ) : null}
          </div>
          <h1 className="my-0 ml-[20px] font-extrabold text-[24px] leading-29 tracking-tighter text-left">
            {text}
          </h1>
        </div>
        {(onCancel || onNew || onSave) && (
          <div className="flex flex-row items-center content-center mt-[16px] mr-[20px]">
            {onNew && showNewBtn && (
              <Button className="bg-primary whitespace-nowrap">
                {newBtnText}
              </Button>
            )}
            {onCancel && (
              <button className="mx-[4px] rounded h-[36px] bg-white text-black w-[104px] border-[1px] border-[#A8A29E]">
                {cancelBtnText}
              </button>
            )}
            {onSave && (
              <button className="mx-[4px] rounded h-[36px] bg-primary text-white w-[104px]">
                {saveBtnText}
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
