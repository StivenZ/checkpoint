
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IdInput from '../NumberInput/NumberInput';
import RoleInput from '../RoleInput/RoleInput.component';
import styles from './Login.module.css'

type Prop = React.PropsWithChildren

export default function Login({ children }: Prop) {
	const navigate = useNavigate();
	const [role, setRole] = useState<string>("");
	const [id, setId] = useState<number | undefined>();


	const handleSetRole = (value: string) => {
		setRole(value);
		console.log("This is the Role:", value);
		return undefined
	}
	const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log("This is the login state:", id, role);
		event.preventDefault()
		if (!id || !role) return;
		navigate('/admin-panel')
	}
	const handleSetId = (value: string) => {
		const chars: Record<string, string> = {
			'.': '',
			',': '',
		}
		setId(parseInt(value.replace(/[,.]/g, m => chars[m])));
		console.log("This is the ID:", value);
		return
	}
	return (
		<div className={styles['container-item']}>
			<section className={styles.data}>
				<RoleInput handleSetRole={handleSetRole} />
				<IdInput handleSetId={handleSetId} />
			</section>
			<button disabled={!id || !role.length} onClick={handleLogin} className={styles.button}>iniciar sesión</button>
		</div>
	);
};
