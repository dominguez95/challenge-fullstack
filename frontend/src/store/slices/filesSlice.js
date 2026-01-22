import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "http://localhost:9000";

// Thunk para obtener la lista de archivos (carga inicial)
export const fetchFilesList = createAsyncThunk("files/fetchList", async () => {
  const response = await fetch(`${API_URL}/files/list`);
  const data = await response.json();
  return data;
});

// Thunk para filtrar por fileName
export const fetchFileByName = createAsyncThunk(
  "files/fetchByName",
  async (fileName) => {
    const response = await fetch(`${API_URL}/files/data?fileName=${fileName}`);
    const data = await response.json();
    return data;
  },
);

const filesSlice = createSlice({
  name: "files",
  initialState: {
    data: [], // Datos de la tabla (de /files/list o /files/data)
    loading: false,
    error: null,
    selectedFile: "", // Archivo seleccionado en el filtro
  },
  reducers: {
    clearFilter: (state) => {
      state.selectedFile = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchFilesList - carga inicial
      .addCase(fetchFilesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilesList.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchFilesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // fetchFileByName - filtrar por archivo
      .addCase(fetchFileByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFileByName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.selectedFile = action.meta.arg; // guarda el fileName usado
      })
      .addCase(fetchFileByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearFilter } = filesSlice.actions;
export default filesSlice.reducer;
