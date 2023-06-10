import {
	AdrenWorldPage,
	AdvancedJavaPage,
	ItemTrackerPage,
	SecuritySystemPage,
	BPSoftwarePage,
} from './pages';

const Projects = [
	{
		name: 'Adren World',
		route: '/adren-world',
		page: AdrenWorldPage,
	},
	{
		name: 'Breaking Point Software',
		route: '/breaking-point',
		page: BPSoftwarePage,
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
	avatar: '/picture2.jpg',
	email: 'jacobschnettler13@gmail.com',
	github: 'https://github.com/jacobschnettler',
	youtube: 'https://www.youtube.com/@jschnettler_',
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
