import { base } from "./base-api";
import { Filtro, Personal, Registro, TablaDeReporte, Visita } from '../store/types';
import { AxiosError, AxiosResponse } from "axios";

// todos los registros de entradas
export const getPersonsCount = async () : Promise<{status: number, data: {data: number}}> => {
	try {
		const {data, status} = await base.get<any, AxiosResponse<{data: number}, any>, any>(
			'persons-count',
		);
		return {
			data,
			status
		}
	} catch (error) {
		console.log("an error occurred:", error);
		throw error;
	}
}

// todos los registros de entradas
export const traerRegistros = async () : Promise<{status: number, data: {data: Registro[]}}> => {
	try {
		const {data, status} = await base.get(
			'reports',
		);
		return {
			data,
			status
		}
	} catch (error) {
		console.log("an error occurred:", error);
		throw error;
	}
}

// agregar nuevo visitante
export const agregarVisitante = async (payload: Visita) => {
	try {
		const response = await base.post(
			'new-visitor',
			payload
		);
		console.log("this is the response from the server", response);
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		console.log("an error occurred while creating a new person:", error);
	}
}
// agregar personal de la empresa
export const agregarPersona = async (payload: Personal) => {
	try {
		const response = await base.post(
			'new-person',
			payload
		);
		console.log("this is the response from the server", response);
		return {
			data: response.data,
			status: response.status,
		};
	} catch (error) {
		console.log("an error occurred while creating a new staff member:", error);
	}
}

// verificar si una persona existe
type CheckResponse = {
	message: string,
	person?: {
		nombre: string,
		tipo: string
	}
}
export const verificarPersona = async (payload: string): Promise<{status: number, data: CheckResponse} | AxiosError> => {
	try {
		const {status, data} = await base.post(
			'check-person',
			{
				'cedula': payload
			}
		);
		return {
			data,
			status
		};
	} catch (error) {
		console.log("definitely, an error occurred:", error);
		throw error
	}
}

// registrar ingreso o salida
export const registrarPaso = async (
		payload: string,
	) : Promise<{status: number, data: string}> => {
	try {
		const {data, status} = await base.post(
			'checkpoint',
			payload,
		);
		return {
			data,
			status
		}
	} catch (error) {
		console.log("an error occurred:", error);
		throw error;
	}
}

// registrar ingreso o salida
export const traerPersonas = async () : Promise<{status: number, data: {data: Personal[]}}> => {
	try {
		const {data, status} = await base.get<any, AxiosResponse<{data: []}, any>, any>(
			'persons',
		);
		return {
			data,
			status
		}
	} catch (error) {
		console.log("an error occurred:", error);
		throw error;
	}
}


// filtrar por fecha
export const aplicarFiltros = async (filter: Filtro): Promise<{status: number, horas: number, data: TablaDeReporte[]}> => {
	try {
		console.log("inside the filter service, filters:", filter)
		const {status, data} = await base.post<any, AxiosResponse<{data: TablaDeReporte[], horas: number}, any>, any>(
			'full-filter',
			filter
		);
		return {
			data: data.data,
			horas: data.horas,
			status
		};
	} catch (error) {
		console.log("an error occured when filtering the reports:", error);
		throw error
	}
}