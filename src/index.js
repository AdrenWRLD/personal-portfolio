import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import {
	AdvancedJavaPage,
	AdrenWorldPage,
	ItemTrackerPage,
	SecuritySystemPage,
} from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />

				<Route
					path='/projects/advanced-java'
					element={<AdvancedJavaPage />}
				/>

				<Route
					path='/projects/adren-world'
					element={<AdrenWorldPage />}
				/>

				<Route
					path='/projects/items-tracker'
					element={<ItemTrackerPage />}
				/>

				<Route
					path='/projects/security-system'
					element={<SecuritySystemPage />}
				/>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
