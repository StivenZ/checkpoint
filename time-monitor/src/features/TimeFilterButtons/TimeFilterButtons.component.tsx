import React, { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { selectPersons } from "../../store/personas/pesonas.selector";
import { Filtro } from "../../store/types";
import styles from './TimeFilterButtons.module.css'

const areas: string[] = [
	'marketing',
	'desarrollo',
	'ventas',
];

type Props = {
	onFilterClickHandler: (filter: Filtro) => void;
}

const TimeFilterButtons = ({ onFilterClickHandler }: Props) => {
	// TODOS:
	// create reusable component for all of the input elements.
	// filters.map((filter) => {
	// 	return <Input type={filter.type} placeholder={filter.placeholder} />
	// })
	const personas = useAppSelector(selectPersons)
	const [start, setStart] = useState<string>("");
	const [end, setEnd] = useState<string>("");
	const [fromTime, setFromTime] = useState<string>("");
	const [untilTime, setUntilTime] = useState<string>("");
	const [area, setArea] = useState<string[]>([]);
	const [persons, setPersons] = useState<string[]>([]);
	const [isAreaDropdown, setIsAreaDropdown] = useState<boolean>(false);
	const [isPersonsDropdown, setIsPersonsDropdown] = useState<boolean>(false);

	const onFilterClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log("cedula, areas, fechasdesde, fechasHasta, horadesde, horahasta", area, fromTime, untilTime, start, end)
		onFilterClickHandler({
			cedula: persons,
			areas: area,
			fechas: {
				desde: fromTime,
				hasta: untilTime,
			},
			horas: {
				desde: start,
				hasta: end,
			},
		});
	}

	const handleSetStart = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStart(e.target.value);
	}

	const handleSetEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEnd(e.target.value);
	}
	const handleSetFromDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFromTime(e.target.value);
	}

	const handleSetUntilDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUntilTime(e.target.value);
	}

	const handleAreaClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		event.stopPropagation();
	};
	const handlePersonClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		event.stopPropagation();
	};
	const handleSelectPerson = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (persons.includes(event.target.value)) setPersons(persons.filter(item => item !== event.target.value));
		else setPersons([...persons, event.target.value]);
	};
	const handleSelectArea = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (area.includes(event.target.value)) setArea(area.filter(item => item !== event.target.value));
		else setArea([...area, event.target.value]);
	};

	const toggleAreaDropdown = useCallback(() => {
		console.log("is Dropdown", isAreaDropdown);
		setIsAreaDropdown(!isAreaDropdown);
	}, [isAreaDropdown])

	const togglePersonsDropdown = useCallback(() => {
		console.log("is Dropdown", isPersonsDropdown);
		setIsPersonsDropdown(!isPersonsDropdown);
	}, [isPersonsDropdown]);

	// const formatTimeForBackend = useCallback((time: string) => {
	// 	return time;
	// }, []);

	// const handleFilterSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
	// 	event.preventDefault();
	// 	if (fromTime && untilTime) {
	// 		const formattedFromTime = formatTimeForBackend(fromTime);
	// 		const formattedUntilTime = formatTimeForBackend(untilTime);
	// 		dispatch(onFilterSubmitThunk({ from: formattedFromTime, until: formattedUntilTime }))
	// 	}
	// };

	useEffect(() => {
		console.log("this is the local state of filter:")
		console.log("start", start);
		console.log("end", end);
		console.log("fromTime", fromTime);
		console.log("untilTime", untilTime);
		console.log("area", area);
		console.log("persons", persons);
	}, [fromTime, untilTime, start, end, area, persons]);

	return (

		<div className={styles['cols']}>
			<div className={styles['col-1']}>
				<div className={styles["time-filter-wrapper"]}>
					<div className={styles["time-filter-container"]}>
						<label htmlFor="from">desde:</label>
						<input
							className={styles["input"]}
							type="date"
							id="from"
							value={fromTime}
							onChange={handleSetFromDate}
						/>
					</div>
					<div className={styles["time-filter-container"]}>
						<label htmlFor="until">hasta:</label>
						<input
							className={styles["input"]}
							type="date"
							id="until"
							value={untilTime}
							onChange={handleSetUntilDate}
						/>
					</div>
					<div className={styles["time-filter-container"]}>
						<label htmlFor="from">hora inicio:</label>
						<input
							className={styles["input"]}
							type="time"
							id="start"
							value={start}
							onChange={handleSetStart}
						/>
					</div>
					<div className={styles["time-filter-container"]}>
						<label htmlFor="until">hora finalización:</label>
						<input
							className={styles["input"]}
							type="time"
							id="end"
							value={end}
							onChange={handleSetEnd}
						/>
					</div>

					<div onClick={togglePersonsDropdown} className={`${styles["checkbox-dropdown"]} ${isPersonsDropdown ? styles['is-active'] : ""}`}>
						empleados
						<ul className={styles["checkbox-dropdown-list"]}>
							{personas.map((person, index) => {
								return (
									<li key={index} onClick={handlePersonClick} className={styles['li']}>
										<label className={styles['label']}>
											<input onChange={handleSelectPerson} type="checkbox" value={person.cedula} name="area" />{person.nombre}
										</label>
									</li>
								)
							})}
						</ul>
					</div>
					<div onClick={toggleAreaDropdown} className={`${styles["checkbox-dropdown"]} ${isAreaDropdown ? styles['is-active'] : ""}`}>
						area
						<ul className={styles["checkbox-dropdown-list"]}>
							{areas.map((area, index) => {
								return (
									<li key={index} onClick={handleAreaClick} className={styles['li']}>
										<label className={styles['label']}>
											<input onChange={handleSelectArea} type="checkbox" value={area} name="area" />{area}
										</label>
									</li>
								)
							})}
						</ul>
					</div>
					{/* testing zone */}
					{/* {area.map((item, index) => {
						return (
							<div key={index}>
								{item}
							</div>
						)
					})}
					{persons.map((cedula, index) => {
						return (
							<div key={index}>
								{cedula}
							</div>
						)
					})} */}
				</div>
			</div>
			<div className={styles['col-2']}>
			</div>
			<div className={styles["time-filter-container-wrapper"]} >
				<button className={styles["apply-filter-button"]} onClick={onFilterClick}>Filtrar</button>
			</div>
		</div>
	);
};

const MemoFilterButtons = React.memo(TimeFilterButtons);
export default MemoFilterButtons;