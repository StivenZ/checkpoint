import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RegistrarVisitante.module.css';
import { registerVisitorThunk } from '../../store/personas/personas.slice';
import { useAppDispatch } from '../../store/hooks';

export default function RegistrarVisitante() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	// const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
	// const [additionalComments, setAdditionalComments] = useState('');
	const [nombre, setNombre] = useState<string>('');
	const [apellidos, setApellidos] = useState<string>('');
	const [id, setId] = useState<string>('');
	const [tel, setTel] = useState<string>('');

	const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		navigate('/');
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (nombre && apellidos && id && tel) {
			dispatch(registerVisitorThunk({
				nombre,
				apellidos,
				cedula: id,
				tel: parseInt(tel),
			}))
		}
		// Handle form submission here
	};

	return (
		<div className={styles['visitante']}>
			<button onClick={handleBack}>Volver a Principal</button>
			<form className={styles['visitor-form']} onSubmit={handleSubmit}>
				<div className={styles['input-container']}>
					<label htmlFor="name-input">Nombre:</label>
					<input onChange={(event) => setNombre(event.target.value)} type="text" id="name-input" required />
				</div>

				<div className={styles['input-container']}>
					<label htmlFor="last-name-input">Apellidos:</label>
					<input onChange={(event) => setApellidos(event.target.value)} type="text" id="last-name-input" required />
				</div>

				<div className={styles['input-container']}>
					<label htmlFor="document-input">Número de Identificación:</label>
					<input onChange={(event) => setId(event.target.value)} type="text" id="document-input" required />
				</div>
				<div className={styles['input-container']}>
					<label htmlFor="document-input">Teléfono:</label>
					<input onChange={(event) => setTel(event.target.value)} type="tel" id="document-input" required />
				</div>

				{/* <div className="form-row">
					<label htmlFor="additional-info-input">Datos adicionales:</label>
					<select id="additional-info-input" onChange={handleAdditionalInfoChange}>
						<option value="no">No</option>
						<option value="yes">Sí</option>
					</select>
				</div>

				{showAdditionalInfo && (
					<div className="form-row">
						<label htmlFor="comments-input">Comentarios adicionales:</label>
						<input type="text" id="comments-input" value={additionalComments} onChange={handleCommentsChange} />
					</div>
				)} */}

				<button type="submit">Registrar</button>
			</form>
		</div>
	);
};
