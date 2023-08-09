import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NumberInput from '../NumberInput/NumberInput';
import RetiroAnticipado from '../RetiroAnticipado/RetiroAnticipado.component';
import styles from './Puerta.module.css';
import { selectStatus } from '../../store/personas/pesonas.selector';
import { checkPersonThunk, setEntryThunk } from '../../store/personas/personas.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const Puerta: React.FC = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const [isEarlyCheckout, setIsEarlyCheckout] = useState<boolean>(false);
	const [id, setId] = useState<string>('');
	const status = useAppSelector(selectStatus);

	const handleSetId = (value: string) => {
		const chars: Record<string, string> = {
			'.': '',
			',': '',
		}
		setId(value.replace(/[,.]/g, m => chars[m]));
		return
	}

	const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		navigate('/visitante');
	}

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;
		if (id.length < 1) {
			console.log("please enter your full ID");
			return;
		}
		console.log("Nice!", id)
		dispatch(checkPersonThunk(id));
	}

	useEffect(() => {
		if (status === 'fulfilled') {
			dispatch(setEntryThunk(id))
		}
	}, [dispatch, id, status])

	return (
		<div className={styles['puerta']}>
			<button onClick={handleBack} >registrar visitante</button>
			{isEarlyCheckout
				? <RetiroAnticipado />
				: <div className={styles['puerta-input-container']}><NumberInput handleSetId={handleSetId} handleKeyPress={handleKeyPress} /></div>
			}
		</div>
	);
};

export default Puerta;