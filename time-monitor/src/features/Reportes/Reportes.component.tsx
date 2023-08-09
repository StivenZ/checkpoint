import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Reportes.module.css'

type Prop = React.PropsWithChildren

const Reportes = ({ children }: Prop) => {
	const navigate = useNavigate();

	const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()
		navigate('/');
	}
	return (
		<>
			{/* check if logged in */}
			{/* no: render login and select role */}
			{/* yes: render reports view */}
			<div className={styles['container-item']}>
				<button className={styles.button} onClick={handleBack}>Volver a Principal</button>
				<p>Reportes aquí</p>
			</div>
		</>
	);
};

export default Reportes;