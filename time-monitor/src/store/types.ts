export type Visita = {
	cedula: string,
	nombre: string,
	apellidos: string,
	tel: number,
	email?: string
}

export type Personal = {
	cedula: string,
	nombre: string,
	apellidos: string,
	tel: string,
	email: string,
	dob: string,
	tipo: string,
	area?: string,
}

export type Registro = {
	cedula: string,
	fecha: string,
	hora: string,
	tipo_registro: string
}

export type Filtro = {
	cedula?: string[],
	fechas?: {
		desde?: string,
		hasta?: string,
	},
	horas?: {
		desde?: string,
		hasta?: string,
	},
	areas?: string[],
	tipos?: string[],
	status?: 'idle' | 'pending' | 'fulfilled' | 'failed';
}

export type TablaDeReporte = {
	cedula?: string,
	nombre?: string,
	apellidos?: string,
	tipo?: string,
	area?: string,
	registro?: {
		fecha: string,
		hora: string,
		tipo_registro: "INGRESO" | "SALIDA",
	},
}

export type Checkpoint = {
	check: 'ingreso' | 'salida';
}