
import React, { useState } from "react";
import styles from "./SwitchButton.module.css";

type Props = {
	onSwitchChange: (option: boolean) => void;
}
const ToggleSwitch = ({ onSwitchChange }: Props) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
		if (onSwitchChange) {
			onSwitchChange(!isChecked);
		}
	};

	return (
		<label className="toggle-switch">
			<input type="checkbox" checked={isChecked} onChange={handleChange} />
			<span className="slider"></span>
		</label>
	);
};

export default ToggleSwitch;
