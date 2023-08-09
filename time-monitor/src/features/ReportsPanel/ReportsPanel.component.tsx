import React, { useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { onFilterSubmitThunk } from '../../store/personas/personas.slice';
import { Filtro } from '../../store/types';
import MemoFilterButtons from '../TimeFilterButtons/TimeFilterButtons.component';
import styles from './ReportsPanel.module.css'

type Prop = {
	onReportTypeChange: (report: string) => void;
}

export default function ReportsPanel({ onReportTypeChange }: Prop) {
	const dispatch = useAppDispatch();
	const [report, setReport] = useState<string>("reportes");

	const onSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setReport(event.target.value);
		onReportTypeChange(event.target.value);
	}
	const onFilterClickHandler = (filter: Filtro) => {
		console.log("estado de los filtros", filter);
		dispatch(onFilterSubmitThunk(filter))

	}

	return (
		<section className={styles['section-container']}>
			<span id='report-type-span' className={styles['report-type-span']}>
				<input name='report' type="radio" onChange={onSwitchChange} value='personal' />
				<label>personal</label>

				<input name='report' type="radio" onChange={onSwitchChange} value='reportes' defaultChecked />
				<label>reportes</label>
			</span>
			{report && report === 'personal' &&
				<div>Filtros para personas</div>
			}
			{report && report === 'reportes' &&
				<MemoFilterButtons onFilterClickHandler={onFilterClickHandler} />
			}
		</section>
	);
};
