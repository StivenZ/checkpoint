import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.module.css'

type Prop = React.PropsWithChildren

const Navbar = ({ children }: Prop) => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleBack = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		navigate(-1)
	}
	const handleLogout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		navigate('/');
	}

	return (
		<nav>
			<ul>
				{location.pathname.split("/")[1] === "login"
					? <button onClick={handleBack} >Atrás</button>
					: location.pathname.split("/")[1] === "admin-panel"
						? <button onClick={handleLogout} >cerrar sesión</button>
						: <Link className='link-item' to="/login">iniciar sesión</Link>
				}
				<Link className='link-item' to="/reportes">reportes</Link>
			</ul>
		</nav>
	);
};

export default Navbar;