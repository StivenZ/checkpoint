import React, { useEffect, useState } from 'react';
import FormPersona from '../FormPersona/FormPersona.component';
import ReportsPanel from '../ReportsPanel/ReportsPanel.component';
// import { useNavigate } from 'react-router-dom';
import styles from './AdminPanel.module.css'
import EmployeesTable from '../EmployeesTable/EmployeesTable.component';
import ReportsTable from '../ReportsTable/ReportsTable.component';
import { useAppDispatch } from '../../store/hooks';
import { getPersonsThunk, getReportsThunk } from '../../store/personas/personas.slice';
import GlobalStatus from '../GlobalStatus/GlobalStatus.component';

type Prop = React.PropsWithChildren

export default function AdminPanel({ children }: Prop) {
	const dispatch = useAppDispatch();
	const [isAddPerson, setIsAddPerson] = useState<boolean>(false);
	const [reportType, setReportType] = useState<string>("reportes");

	const toggleAdd = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		setIsAddPerson(!isAddPerson);
	}
	const onReportTypeChange = (report: string) => {
		setReportType(report);
	}

	useEffect(() => {
		dispatch(getReportsThunk());
		dispatch(getPersonsThunk());
	}, [dispatch]);


	return (
		<section className={styles['section-container']}>
			<div id={styles['report-1']} className={styles['container-item']}>
				<div className={styles['switch-button-container']}>
					<span>
						{isAddPerson
							? <button onClick={toggleAdd}>Administrar Reportes</button>
							: <button onClick={toggleAdd}>Registrar Persona</button>
						}
					</span>
				</div>
				<div className={styles['config-panel-container']}>
					{isAddPerson
						? <FormPersona />
						: <ReportsPanel onReportTypeChange={onReportTypeChange} />
					}
				</div>
			</div>
			<div id={styles['report-2']} className={styles['container-item']}>
				<section>
					<GlobalStatus />
				</section>
				{reportType && reportType === "reportes" && <ReportsTable />}
				{reportType && reportType === "personal" && <EmployeesTable />}
			</div>
		</section>
	);
};
