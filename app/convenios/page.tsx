"use client";

import { useSelector } from "react-redux";
import Header from "@/app/_components/_header/header";
import Datatable from "../_components/_atoms/_date-picker/date";

export type Payment = {
  id: string;
  name: string;
  company: string;
  rut: string;
  chains: string;
  type: string;
  creationDate: string;
  startDate: string;
  endDate: string;
  status: string;
};

const data: any = {
  headers: [
    "",
    "Nombre",
    "Empresa",
    "Rut",
    "Cadenas",
    "Tipo",
    "Fecha Creación",
    "Inicio Cobertura",
    "Término Cobertura",
    "Estado",
  ],
  values: [
    {
      id: "1",
      name: "BONO 1",
      company: "SB",
      rut: "19.123.456-7",
      chains: "",
      type: "Capitado",
      creationDate: "",
      startDate: "",
      endDate: "",
      status: "Activo",
    },
    {
      id: "2",
      name: "BONO 2",
      company: "SB",
      rut: "19.123.456-7",
      chains: "",
      type: "Capitado",
      creationDate: "",
      startDate: "",
      endDate: "",
      status: "Activo",
    },
    {
      id: "3",
      name: "BONO",
      company: "SB",
      rut: "19.123.456-7",
      chains: "",
      type: "Capitado",
      creationDate: "",
      startDate: "",
      endDate: "",
      status: "Activo",
    },
    {
      id: "4",
      name: "BONO",
      company: "SB",
      rut: "19.123.456-7",
      chains: "",
      type: "Capitado",
      creationDate: "",
      startDate: "",
      endDate: "",
      status: "Activo",
    },
    {
      id: "5",
      name: "BONO",
      company: "SB",
      rut: "19.123.456-7",
      chains: "",
      type: "Capitado",
      creationDate: "",
      startDate: "",
      endDate: "",
      status: "Activo",
    },
  ],
};

const ListaConvenios = () => {
  const convenios = useSelector((state: any) => state.convenios);

  return (
    <>
      <Header
        text="Convenios"
        breadCrumb="Inicio / Convenios"
        showNewBtn={true}
        onNew={(event) => {
          console.log("click");
        }}
      />
      <div className="pt-[30px] pl-[20px] pr-[10px] pb-[20px]">
        <Datatable data={data} selectable={true} />
      </div>
    </>
  );
};

export default ListaConvenios;
