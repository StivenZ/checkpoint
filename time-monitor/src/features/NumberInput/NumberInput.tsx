import React from 'react';
import { useAppSelector } from '../../store/hooks';

import './NumberInput.css';
import { selectStatus } from '../../store/personas/pesonas.selector';

type Props = {
	handleSetId: (value: string) => void;
	handleKeyPress?: (value: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function NumberInput({ handleSetId, handleKeyPress }: Props) {
	const status = useAppSelector(selectStatus)

	return (
		<div className="input-container">
			<label htmlFor="id-input">CÉDULA</label>
			<input disabled={status === 'pending'} onKeyDown={handleKeyPress} onChange={(event) => handleSetId(event.target.value)} type="number" id="id-input" />
		</div>
	);
};