"use client";

import { ConvenioGeneralesType } from "@/app/_types/types";
import { useForm } from "react-hook-form"

const Generales = () => {

  const form = useForm<ConvenioGeneralesType>()
  const { register, formState: { errors } } = form

  return (
    <>
      <div className="form-general-tab">
        <div className="form-section">
          <h1 className="form-title-section">Datos Generales</h1>
          <div className="field-control-c">
            <label htmlFor="nombre">Nombre *</label>
            <input className="" type="text" id="name" {...register("nombre",{
              required: {
                value: true,
                message: "Campo nombre es obligatorio"
              }
              })}/>
            <p className="warning">Máximo 120 caracteres</p>
            <p className="error">{errors.nombre?.message}</p>
          </div>
          <div className="field-control-c">
            <label htmlFor="descripcion">Descripción *</label>
            <textarea className="" id="description" {...register("descripcion",{
              required: {
                value: true,
                message: "Campo descripción es obligatorio"
              }
              })}/>
            <p className="warning">Máximo 500 caracteres</p>
            <p className="error">{errors.descripcion?.message}</p>
          </div>
          <div className="field-control-c">
            <label htmlFor="grupo">Grupo o empresa *</label>
            <select className="select-l" {...register("grupo",{
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
          <div className="field-control-r">
            <div className="sub-field-control-c">
              <label htmlFor="convenio">Tipo Convenio</label>
              <select className="select-m" {...register("convenio",{
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
            <div className="sub-field-control-c">
              <label htmlFor="subConvenio">Subtipo Convenio</label>
              <select className="select-m" {...register("subConvenio",{
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
          <div className="field-control-c">
            <label htmlFor="moneda">Moneda</label>
            <select className="select-l" {...register("moneda",{
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
          <div className="field-control-r">
            <div className="sub-field-control-c">
              <label htmlFor="estado">Estado</label>
              <select className="select-m" {...register("estado",{
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

        <div className="form-section">
          <h1 className="form-title-section">Negocios</h1>
          <div className="field-control-c">
            <label htmlFor="codigoFactura">Código Facturación *</label>
            <select className="select-l" {...register("codigoFactura",{
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
          <div className="field-control-r">
            <div className="sub-field-control-c">
              <label htmlFor="codigoDescuento">Código Decuento</label>
              <select className="select-m" {...register("codigoDescuento",{
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
          <div className="field-control-c">
            <label htmlFor="bono">Glosa Bonifica por</label>
            <select className="select-l" {...register("bono",{
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
          <div className="field-control-r">
            <div className="sub-field-control-c">
              <label htmlFor="unidadNegocio">Unidad de Negocio *</label>
              <select className="select-m" {...register("unidadNegocio",{
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
          <div className="field-control-c">
            <label htmlFor="ejecutivoComercial">Ejecutivo Comercial</label>
            <select className="select-l" {...register("ejecutivoComercial",{
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
          <div className="field-control-c">
            <label htmlFor="ejecutivoComercial">Opciones</label>
            <div className="field-control-check">
              <input type="checkbox" id="1" name="valida_credencial" value="1000" />
              <label className="label-checkbox" htmlFor="valida_credencial">Valida Credencial</label>
            </div>
            <div className="field-control-check">
              <input type="checkbox" id="2" name="fecha_fin_tratamiento" value="1001" />
              <label className="label-checkbox" htmlFor="fecha_fin_tratamiento">Indicar fecha fin tratamiento</label>
            </div>
            <div className="field-control-check">
              <input type="checkbox" id="3" name="activacion_automatica" value="1002" />
              <label className="label-checkbox" htmlFor="activacion_automatica">Activacion automática</label>
            </div>
            <div className="field-control-check">
              <input type="checkbox" id="4" name="indicar_escalamiento" value="1003" />
              <label className="label-checkbox" htmlFor="indicar_escalamiento">Indicar escalamiento</label>
            </div>
          </div>
        </div>

      </div>
      
    </>
    
  );
};

export default Generales;
