import React from 'react';
import styles from './Board.module.css'

type Prop = React.PropsWithChildren


export default function Board({ children }: Prop) {

	return (
		<div className={styles.container}>
			{children}
		</div>
	);
};
