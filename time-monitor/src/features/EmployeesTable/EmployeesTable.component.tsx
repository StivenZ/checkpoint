import { useAppSelector } from "../../store/hooks";
import { selectPersons } from "../../store/personas/pesonas.selector";
import styles from "./EmployeesTable.module.css";

function EmployeesTable() {
	const personas = useAppSelector(selectPersons)

	return (
		<table className={styles['soft-ui-table']}>
			<thead className={styles['thead']}>
				<tr className={styles['trow']}>
					<th>nombre</th>
					<th>apellidos</th>
					<th>cédula</th>
					<th>tel</th>
					<th>tipo</th>
					<th>área</th>
					<th>Date of Birth</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody className={styles['tbody']}>
				{personas && personas.map((item: any, index: any) => {
					return (
						<tr className={styles['trow']} key={index}>
							<td>{item.nombre}</td>
							<td>{item.apellidos}</td>
							<td>{item.cedula}</td>
							<td>{item.tel}</td>
							<td>{item.dob}</td>
							<td>{item.tipo}</td>
							<td>{item.area}</td>
							<td>{item.email}</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	);
};

export default EmployeesTable;
