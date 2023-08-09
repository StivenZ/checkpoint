import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import AdminPanel from '../features/AdminPanel/AdminPanel.component';
import App from '../App';
import Ingresar from '../features/Login/Login.component';
import Puerta from '../features/Puerta/Puerta.component';
import RegistrarVisitante from '../features/RegistrarVisitante/RegistrarVisitante.component';
import Reportes from '../features/Reportes/Reportes.component';

export const router = createBrowserRouter(createRoutesFromElements(
	<>
		<Route path='/' element={<App />}>
			<Route index element={<Puerta />} />
			<Route path='visitante' element={<RegistrarVisitante />} />
			<Route path='/login' element={<Ingresar />} />
			<Route path='/reportes' element={<Reportes />} />
			<Route path='/admin-panel' element={<AdminPanel />} />
		</Route>
	</>
));