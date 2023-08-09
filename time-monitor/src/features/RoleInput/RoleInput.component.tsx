import React from 'react';
import styles from './RoleInput.module.css';

type Props = {
	handleSetRole: (value: string) => void;
}

const RoleInput = ({ handleSetRole }: Props) => {
	return (
		<div className={styles['container-item']}>
			<label htmlFor="cargos">CARGO</label>
			<select onChange={(event) => handleSetRole(event.target.value)} className={styles['select-item']} name="cargos" id="cargos">
				<option value="" >SELECCIONA UNO</option>
				<option value="admin">ADMIN</option>
				<option value="guard">CELADOR</option>
			</select>
		</div>
	);
};

export default RoleInput;