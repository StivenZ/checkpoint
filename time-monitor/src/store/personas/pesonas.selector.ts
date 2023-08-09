import { RootState } from "../store";

export const selectStatus = (state: RootState) => state.personas.status;
export const selectPersons = (state: RootState) => state.personas.personal;
export const selectReports = (state: RootState) => state.personas.registros;
export const selectPersonsTotal = (state: RootState) => state.personas.totalPersonas;
export const selectFilter = (state: RootState) => state.personas.filtros;
export const selectReportsTable = (state: RootState) => state.personas.tablaDeReportes;
export const selectWorkingHours = (state: RootState) => state.personas.horas;