import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = [
  {
    id: 1,
    nombre: "Convenio Prueba",
    descripcion: "Descripción convenio prueba",
  },
];

const convenioSlice = createSlice({
  name: "convenio",
  initialState,
  reducers: {
    crearConvenio: (state, action: PayloadAction<any>) => {
      const { id, nombre, descripcion } = action.payload;
      state.push({ id, nombre, descripcion });
    },
  },
});

export const { crearConvenio } = convenioSlice.actions;
export default convenioSlice.reducer;
