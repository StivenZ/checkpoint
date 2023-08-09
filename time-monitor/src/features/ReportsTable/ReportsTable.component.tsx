/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectReports, selectReportsTable } from "../../store/personas/pesonas.selector";
import styles from "./ReportsTable.module.css";

function ReportsTable() {
	const reports = useAppSelector(selectReports)
	const reportsTable = useAppSelector(selectReportsTable);

	const [showName, setShowName] = useState<boolean>(true)
	const [showLastName, setShowLastName] = useState<boolean>(true)
	const [showId, setShowId] = useState<boolean>(true)
	const [showType, setShowType] = useState<boolean>(true)
	const [showArea, setShowArea] = useState<boolean>(true)
	const [showDate, setShowDate] = useState<boolean>(true)
	const [showTime, setShowTime] = useState<boolean>(true)
	const [showReportType, setShowReportType] = useState<boolean>(true)

	return (
		<table className={styles['soft-ui-table']}>
			<thead className={styles['thead']}>
				{reportsTable.length !== 0 &&
					<tr className={styles['trow']}>
						{showName && <th>nombre</th>}
						{showLastName && <th>apellidos</th>}
						{showId && <th>cedula</th>}
						{showType && <th>tipo</th>}
						{showArea && <th>area</th>}
						{showDate && <th>fecha</th>}
						{showTime && <th>hora</th>}
						{showReportType && <th>tipo de registro</th>}
					</tr>
				}
				{reportsTable.length === 0 &&
					<tr className={styles['trow']}>
						<th>cedula</th>
						<th>fecha</th>
						<th>hora</th>
						<th>tipo_registro</th>
					</tr>
				}

			</thead>
			<tbody className={styles['tbody']}>
				{reportsTable && reportsTable.map((report, index) => {
					return (
						<tr key={index} className={styles['trow']}>
							{showName && <td>{report.nombre}</td>}
							{showLastName && <td>{report.apellidos}</td>}
							{showId && <td>{report.cedula || "empty"}</td>}
							{showType && <td>{report.tipo || "empty"}</td>}
							{showArea && <td>{report.area || "empty"}</td>}
							{showDate && <td>{report.registro?.fecha || "empty"}</td>}
							{showTime && <td>{report.registro?.hora || "empty"}</td>}
							{showReportType && <td>{report.registro?.tipo_registro || "empty"}</td>}
						</tr>
					)
				})}
				{reportsTable.length === 0 && reports && reports.map((report, index) => {
					return (
						<tr key={index} className={styles['trow']}>
							<td>{report.cedula}</td>
							<td>{report.fecha}</td>
							<td>{report.hora}</td>
							<td>{report.tipo_registro}</td>
						</tr>
					)
				})
				}
			</tbody>
		</table>
	);
};

export default ReportsTable;
