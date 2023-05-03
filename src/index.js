import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Config } from './config';

import App from './App';

import Resume from './pages/resume';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />

				<Route path='/resume' element={<Resume />} />

				{Config.projects.map((project) => (
					<Route
						path={'/projects' + project.route}
						element={<project.page />}
					/>
				))}
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
