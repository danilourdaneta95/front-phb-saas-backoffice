"use client";

import { useSelector } from "react-redux";
import Generales from "@/app/_components/_convenio/_generales/generales-tailwind";
import Header from "@/app/_components/_header/header";

const NuevoConvenio = () => {
  const convenios = useSelector((state: any) => state.convenios);

  return (
    <>
      <form>
        <Header text="Nuevo Convenio #" breadCrumb="Inicio / Convenios / Nuevo Convenio" />
        <div className="pt-[30px] pl-[20px] pr-[10px] pb-[20px]">
          <Generales/>
        </div>
      </form>
    </>
  );
};

export default NuevoConvenio