import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPersonsCountThunk } from '../../store/personas/personas.slice';
import styles from './GlobalStatus.module.css';
import { selectPersonsTotal, selectWorkingHours } from '../../store/personas/pesonas.selector';

export default function GlobalStatus() {
	const workingHours = (useAppSelector(selectWorkingHours) / 3600).toPrecision(3);
	const personsTotal = useAppSelector(selectPersonsTotal);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getPersonsCountThunk());
	}, [dispatch]);
	return (
		<span className={styles['span']}>
			<article className={styles['stats-col-1']}>
				<h4>Total de Personas Registradas:</h4>
				<div>
					{personsTotal}
				</div>
			</article>
			<article className={styles['stats-col-2']}>
				<h4>Horas dentro de las instalaciones:</h4>
				<div>
					{workingHours || "Utiliza los filtros para ver horas trabajadas"}
				</div>
			</article>
		</span>
	)
};