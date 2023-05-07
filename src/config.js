import {
	AdrenWorldPage,
	AdvancedJavaPage,
	ItemTrackerPage,
	SecuritySystemPage,
} from './pages';

const Projects = [
	{
		name: 'Adren World',
		route: '/adren-world',
		page: AdrenWorldPage,
	},
	{
		name: 'Advanced Java',
		route: '/advanced-java',
		page: AdvancedJavaPage,
	},
	// {
	// 	name: 'Items Tracker',
	// 	route: '/items-tracker',
	// 	page: ItemTrackerPage,
	// },
	{
		name: 'Security Camera System',
		route: '/security-system',
		page: SecuritySystemPage,
	},
];

export const Config = {
	avatar: '/picture.jpg',
	email: 'jacobschnettler13@gmail.com',
	github: 'https://github.com/IamAdren',
	projects: Projects,
	quote: () => (
		<span style={{ fontSize: '22px', fontStyle: 'italic' }}>
			'“It is hard to fail, but it is worse never to have tried to
			succeed.”
			<br /> – Theodore Roosevelt
			<br />
		</span>
	),
};
