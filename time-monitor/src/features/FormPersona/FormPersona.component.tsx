import React, { useState } from 'react';
import styles from './FormPersona.module.css'
import { registerStaffThunk } from '../../store/personas/personas.slice';
import { useAppDispatch } from '../../store/hooks';

type Prop = React.PropsWithChildren

export default function FormPersona({ children }: Prop) {
	const dispatch = useAppDispatch();
	const [personType, setPersonType] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [dob, setDob] = useState<string>('');
	const [tel, setTel] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [workArea, setWorkArea] = useState<string>('');

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log({
			name,
			lastName,
			id,
			tel,
			dob,
			email,
			personType,
			workArea
		});
		dispatch(registerStaffThunk({
			nombre: name,
			apellidos: lastName,
			cedula: id,
			tel,
			dob,
			email,
			tipo: personType,
			area: workArea
		}))
	};

	return (
		<form className={styles["person-form"]} onSubmit={handleSubmit}>
			<div className="form-row">
				<label htmlFor="name-input">Nombres:</label>
				<input onChange={(e) => setName(e.target.value)} type="text" id="name-input" required />
			</div>

			<div className="form-row">
				<label htmlFor="last-name-input">Apellidos:</label>
				<input onChange={(e) => setLastName(e.target.value)} type="text" id="last-name-input" required />
			</div>

			<div className="form-row">
				<label htmlFor="document-input">Documento de Identidad:</label>
				<input onChange={(e) => setId(e.target.value)} type="text" id="document-input" required />
			</div>

			<div className="form-row">
				<label htmlFor="birth-date-input">Fecha de Nacimiento:</label>
				<input onChange={(e) => setDob(e.target.value)} type="date" id="birth-date-input" required />
			</div>

			<div className="form-row">
				<label htmlFor="phone-input">Teléfono:</label>
				<input onChange={(e) => setTel(e.target.value)} type="text" id="phone-input" required />
			</div>

			<div className="form-row">
				<label htmlFor="email-input">Email:</label>
				<input onChange={(e) => setEmail(e.target.value)} type="email" id="email-input" />
			</div>

			<div className="form-row">
				<label htmlFor="person-type-input">Tipo de Persona:</label>
				<select onChange={(e) => setPersonType(e.target.value)} id="person-type-input" required>
					<option value="">SELECCIONA UNO</option>
					<option value="proveedor">Proveedor</option>
					<option value="empleado">Empleado</option>
					<option value="visitante">Visitante</option>
				</select>
			</div>

			{personType === 'empleado' && (
				<div className="form-row">
					<label htmlFor="work-area-input">Área de Trabajo:</label>
					<select onChange={(e) => setWorkArea(e.target.value)} id="work-area-input" required>
						<option value="">SELECCIONA UNA</option>
						<option value="sistemas">Sistemas</option>
						<option value="mercado">Mercado</option>
						<option value="produccion">Producción</option>
					</select>
				</div>
			)}

			<button type="submit">Registrar</button>
		</form>
	);
};
