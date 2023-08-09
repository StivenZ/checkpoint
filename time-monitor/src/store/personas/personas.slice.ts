import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { agregarPersona, agregarVisitante, aplicarFiltros, getPersonsCount, registrarPaso, traerPersonas, traerRegistros, verificarPersona } from '../../services/personas.services';
import { Filtro, Personal, Registro, TablaDeReporte, Visita } from '../types';

export const NOMBRE_PERSONAS = 'personas'

export type estadoPersonal = {
	visita: Visita[];
	personal: Personal[];
	registros: Registro[];
	totalPersonas: number;
  filtros: Filtro;
  tablaDeReportes: TablaDeReporte[];
  horas: number;
	status: 'idle' | 'pending' | 'fulfilled' | 'failed';
  test?: any[]
}
const initialState: estadoPersonal = {
  visita: [],
  personal: [],
  registros: [],
  totalPersonas: 0,
  filtros: {
    cedula: [],
    fechas: {
      desde: "",
      hasta: "",
    },
    areas: [],
    horas: {
      desde: "",
      hasta: "",
    },
    tipos: [],
    status: 'idle'
  },
  tablaDeReportes: [],
  horas: 0,
  status: 'idle',
  test: []
};


// Thunks
// thunk to check if the person exists in database
export const checkPersonThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/checkPerson`,
	async (cedula: string) => {
	  const response = await verificarPersona(cedula);
	  console.log("this is the resposne from the api", response);
	  return {
		response,
		cedula
	};
  }
);

// register an entry
export const setEntryThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/setEntry`,
	async (cedula: string) => {
	  const response = await registrarPaso(cedula);
	  return response
  }
);

// register a visitor
export const registerVisitorThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/registerVisitor`,
	async (data: Visita) => {
	  const response = await agregarVisitante(data);
	  return response;
  }
);

// register a new employee or stakeholder
export const registerStaffThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/registerStaff`,
	async (data: Personal) => {
	  const response = await agregarPersona(data);
	  return response;
  }
);

// get all persons thunk
export const getPersonsThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/getAllPersons`,
	async () => {
	  const response = await traerPersonas();
	  return response;
  }
);

// get all reports thunk
export const getReportsThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/getReports`,
	async () => {
	  const response = await traerRegistros();
	  return response.data;
  }
);

// filter thunk
export const onFilterSubmitThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/filter`,
	async (filter: Filtro) => {
	  const response = await aplicarFiltros(filter);
    // const fecha = response.data
	  return response;
  }
);

// get number of persons in total, and number in the building
export const getPersonsCountThunk = createAsyncThunk(
	`${NOMBRE_PERSONAS}/getPersonsCount`,
	async () => {
	  const { data } = await getPersonsCount();
	  return data.data;
  }
);

// Slice and Reducers
export const personasSlice = createSlice({
  name: NOMBRE_PERSONAS,
  initialState,
  reducers: {
    // addBook: (state, action: PayloadAction<BaseBook>) => {
    //   state.allBooks.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
    // set entry thunk
      .addCase(setEntryThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(setEntryThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.test?.push(action.payload);
        state.status ='idle';
      })
      .addCase(setEntryThunk.rejected, (state) => {
        state.status = 'failed';
      })
    // check person thunk
      .addCase(checkPersonThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(checkPersonThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
      })
      .addCase(checkPersonThunk.rejected, (state) => {
        state.status = 'failed';
      })
      // add register visitor / add new person thunk
      .addCase(registerVisitorThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(registerVisitorThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
      })
      .addCase(registerVisitorThunk.rejected, (state) => {
        state.status = 'failed';
      })
      // get persons thunk
      .addCase(getPersonsThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPersonsThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.personal = action.payload.data.data;
        console.log("data",action.payload.data.data);
      })
      .addCase(getPersonsThunk.rejected, (state) => {
        state.status = 'failed';
      })
      // get all reports
      .addCase(getReportsThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getReportsThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.registros.push(...action.payload.data)
        console.log("REGISTROS",action.payload.data);
      })
      .addCase(getReportsThunk.rejected, (state) => {
        state.status = 'failed';
      })
      // getPersonsCountThunk
      .addCase(getPersonsCountThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(getPersonsCountThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.totalPersonas = action.payload;
        console.log("CONTEO", action.payload);
      })
      .addCase(getPersonsCountThunk.rejected, (state) => {
        state.status = 'failed';
      })
      // onFilterSubmitThunk
      .addCase(onFilterSubmitThunk.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(onFilterSubmitThunk.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.tablaDeReportes = action.payload.data;
        state.horas = action.payload.horas;
        console.log("tabla actual:", action.payload);
      })
      .addCase(onFilterSubmitThunk.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

// export const {  } = personasSlice.actions;

export default personasSlice.reducer;
