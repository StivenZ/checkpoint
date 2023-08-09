import React from 'react';
import './MainItems.module.css'

type Prop = React.PropsWithChildren

const MainItem = ({ children }: Prop) => {
	return (
		<section className="main-item">
			{children}
		</section>
	);
};

export default MainItem;