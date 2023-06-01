import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';


import { Config } from './config';

import App from './App';

import Resume from './pages/resume';

import samplePDF from './certifications/red_cross.pdf';

const root = ReactDOM.createRoot(document.getElementById('root'));

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		document.documentElement.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant',
		});
	}, [pathname]);

	return null;
};

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ScrollToTop />

			<Routes>
				<Route path='/' element={<App />} />

				<Route path='/resume' element={<Resume />} />

				<Route path='/red' element={() => {
					return (
						<Document file={samplePDF}>
							<Page pageNumber={1} />
						</Document>
					);
				}} />

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
