import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RetiroAnticipado.module.css';

export default function RetiroAnticipado() {
	const navigate = useNavigate();
	const [reason, setReason] = useState<string | undefined>("");

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();
		setReason(event.target.value);
	}

	return (
		<>
			<h2>Hola, Juan de Dios</h2>
			<h5>Seleccione razón del retiro anticipado</h5>
			<select onChange={handleChange} name="reason" id="reason">
				<option value="cita-medica">Cita médica</option>
				<option value="calamidad-domestica">Calamidad doméstica</option>
				<option value="diligencia-personal">Diligencia personal</option>
			</select>
		</>
	);
};
