"use client";

import { ConvenioGeneralesType } from "@/app/_types/types";
import { useForm } from "react-hook-form"

const Generales = () => {

  const form = useForm<ConvenioGeneralesType>()
  const { register, formState: { errors } } = form

  return (
    <>
      <div className="flex w-full">
        <div className="w-[500px] h-[700px]">
          <h1 className="font-bold">Datos Generales</h1>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="nombre">Nombre *</label>
            <input className="border border-gray-300 h-8 rounded-sm px-2" type="text" id="name" {...register("nombre",{
              required: {
                value: true,
                message: "Campo nombre es obligatorio"
              }
              })}/>
            <p className="text-[10px] text-gray-600 mt-2">Máximo 120 caracteres</p>
            <p className="error">{errors.nombre?.message}</p>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="descripcion">Descripción *</label>
            <textarea className="border border-gray-300 w-[458px] h-20 p-2" id="description" {...register("descripcion",{
              required: {
                value: true,
                message: "Campo descripción es obligatorio"
              }
              })}/>
            <p className="text-[10px] text-gray-600 mt-2">Máximo 500 caracteres</p>
            <p className="error">{errors.descripcion?.message}</p>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="grupo">Grupo o empresa *</label>
            <select className="w-full h-8 text-[14px] border border-gray-300" {...register("grupo",{
              required: {
                value: true,
                message: "Campo grupo/empresa es obligatorio"
              }
              })}>
              <option value="metlife">METLIFE</option>
              <option value="sura">SURA</option>
            </select>
            <p className="error">{errors.grupo?.message}</p>
          </div>
          <div className="flex flex-row justify-between max-w-xs md:max-w-[458px] mt-4">
            <div className="flex flex-col w-[220px]">
              <label className="text-[12px] mb-1" htmlFor="convenio">Tipo Convenio</label>
              <select className="w-[220px] h-[32px] text-[14px] border border-gray-300" {...register("convenio",{
                required: {
                  value: true,
                  message: "Campo convenio es obligatorio"
                }
                })}>
                <option value="capitado">Capitado</option>
                <option value="no-capitado">No Capitado</option>
              </select>
              <p className="error">{errors.convenio?.message}</p>
            </div>
            <div className="flex flex-col w-[220px]">
              <label className="text-[12px] mb-1" htmlFor="subConvenio">Subtipo Convenio</label>
              <select className="w-[220px] h-[32px] text-[14px] border border-gray-300" {...register("subConvenio",{
                required: {
                  value: true,
                  message: "Campo subtipo convenio es obligatorio"
                }
                })}>
                <option value="seguro">Seguro</option>
                <option value="no-seguro">No Seguro</option>
              </select>
              <p className="error">{errors.subConvenio?.message}</p>
            </div>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="moneda">Moneda</label>
            <select className="w-full h-8 text-[14px] border border-gray-300" {...register("moneda",{
              required: {
                value: true,
                message: "Campo moneda es obligatorio"
              }
              })}>
              <option value="MXN">Peso mexicano</option>
              <option value="PEN">Peso Chileno</option>
              <option value="COP">Peso Colombiano</option>
              <option value="CLP">Sol Peruano</option>
            </select>
            <p className="error">{errors.moneda?.message}</p>
          </div>
          <div className="flex flex-row justify-between max-w-xs md:max-w-[458px] mt-4">
            <div className="flex flex-col w-[220px]">
              <label className="text-[12px] mb-1" htmlFor="estado">Estado</label>
              <select className="w-[220px] h-[32px] text-[14px] border border-gray-300" {...register("estado",{
                required: {
                  value: true,
                  message: "Campo convenio es obligatorio"
                }
                })}>
                <option value="capitado">Inactivo</option>
                <option value="no-capitado">Activo</option>
              </select>
              <p className="error">{errors.estado?.message}</p>
            </div>
          </div>
        </div>

        <div className="w-[500px] h-[700px]">
          <h1 className="font-bold">Negocios</h1>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="codigoFactura">Código Facturación *</label>
            <select className="w-full h-8 text-[14px] border border-gray-300" {...register("codigoFactura",{
              required: {
                value: true,
                message: "Campo código facturación es obligatorio"
              }
              })}>
              <option value="DISC1">Descuento Pharma Benefits(24)</option>
              <option value="DISC2">Descuento Test</option>
            </select>
            <p className="error">{errors.codigoFactura?.message}</p>
          </div>
          <div className="flex flex-row justify-between max-w-xs md:max-w-[458px] mt-4">
            <div className="flex flex-col w-[220px]">
              <label className="text-[12px] mb-1" htmlFor="codigoDescuento">Código Decuento</label>
              <select className="w-[220px] h-[32px] text-[14px] border border-gray-300" {...register("codigoDescuento",{
                required: {
                  value: true,
                  message: "Campo código descuento es obligatorio"
                }
                })}>
                <option value="0">Seleccionar</option>
                <option value="1">Descuento Test</option>
              </select>
              <p className="error">{errors.codigoDescuento?.message}</p>
            </div>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="bono">Glosa Bonifica por</label>
            <select className="w-full h-8 text-[14px] border border-gray-300" {...register("bono",{
              required: {
                value: true,
                message: "Campo glosa bonifica por es obligatorio"
              }
              })}>
              <option value="metlife">METLIFE</option>
              <option value="sura">Sura</option>
            </select>
            <p className="error">{errors.bono?.message}</p>
          </div>
          <div className="flex flex-row justify-between max-w-xs md:max-w-[458px] mt-4">
            <div className="flex flex-col w-[220px]">
              <label className="text-[12px] mb-1" htmlFor="unidadNegocio">Unidad de Negocio *</label>
              <select className="w-[220px] h-[32px] text-[14px] border border-gray-300" {...register("unidadNegocio",{
                required: {
                  value: true,
                  message: "Campo unidad de negocio es obligatorio"
                }
                })}>
                <option value="0">PHB</option>
                <option value="1">TEST</option>
              </select>
              <p className="error">{errors.unidadNegocio?.message}</p>
            </div>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="ejecutivoComercial">Ejecutivo Comercial</label>
            <select className="w-full h-8 text-[14px] border border-gray-300" {...register("ejecutivoComercial",{
              required: {
                value: true,
                message: "Campo ejecutivo comercial es obligatorio"
              }
              })}>
              <option value="1">Juan Perez</option>
              <option value="2">Maria Aristizabal</option>
            </select>
            <p className="error">{errors.ejecutivoComercial?.message}</p>
          </div>
          <div className="flex flex-col max-w-xs md:max-w-[458px] mt-4">
            <label className="text-[12px] mb-1" htmlFor="ejecutivoComercial">Opciones</label>
            <div className="flex items-start mb-2">
              <input className="mt-1 cursor-pointer w-[15px] h-[15px]" type="checkbox" id="1" name="valida_credencial" value="1000" />
              <label className="mt-[2px] ml-[10px] p-0" htmlFor="valida_credencial">Valida Credencial</label>
            </div>
            <div className="flex items-start mb-2">
              <input className="mt-1 cursor-pointer w-[15px] h-[15px]" type="checkbox" id="2" name="fecha_fin_tratamiento" value="1001" />
              <label className="mt-[2px] ml-[10px] p-0" htmlFor="fecha_fin_tratamiento">Indicar fecha fin tratamiento</label>
            </div>
            <div className="flex items-start mb-2">
              <input className="mt-1 cursor-pointer w-[15px] h-[15px]" type="checkbox" id="3" name="activacion_automatica" value="1002" />
              <label className="mt-[2px] ml-[10px] p-0" htmlFor="activacion_automatica">Activacion automática</label>
            </div>
            <div className="flex items-start mb-2">
              <input className="mt-1 cursor-pointer w-[15px] h-[15px]" type="checkbox" id="4" name="indicar_escalamiento" value="1003" />
              <label className="mt-[2px] ml-[10px] p-0" htmlFor="indicar_escalamiento">Indicar escalamiento</label>
            </div>
          </div>
        </div>

      </div>
      
    </>
    
  );
};

export default Generales;
