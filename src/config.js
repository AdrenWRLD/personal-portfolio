import {
	AdrenWorldPage,
	AdvancedJavaPage,
	ItemTrackerPage,
	SecuritySystemPage,
	BPSoftwarePage,
	CoursesPage,
	APComputerSciencePage,
	APComputerSciencePrincipalsPage,
} from './pages';

const Projects = [
	// {
	// 	name: 'Adren World',
	// 	route: '/adren-world',
	// 	page: AdrenWorldPage,
	// },
	{
		name: 'Breaking Point Software',
		route: '/breaking-point',
		page: BPSoftwarePage,
	},
	// {
	// 	name: 'Coding Tutorials/Courses',
	// 	route: '/coding-tutorials',
	// 	page: CoursesPage,
	// },
	// {
	// 	name: 'Items Tracker',
	// 	route: '/items-tracker',
	// 	page: ItemTrackerPage,
	// },
	{
		name: 'Security Camera System Write-up',
		route: '/security-system',
		page: SecuritySystemPage,
	},
];

const HSProjects = [
	{
		name: 'AP CSA 2023-2024',
		route: '/ap-computer-science-a',
		page: APComputerSciencePage,
	},
	{
		name: 'AP CSP 2023-2024',
		route: '/ap-computer-science-principals',
		page: APComputerSciencePrincipalsPage,
	},
	{
		name: 'Advanced Java 2022-2023',
		route: '/advanced-java',
		page: AdvancedJavaPage,
	},
];

export const Config = {
	avatar: '/picture2.jpg',
	email: 'jacobschnettler13@gmail.com',
	github: 'https://github.com/jacobschnettler',
	youtube: 'https://www.youtube.com/@jschnettler_',
	projects: Projects,
	hs_projects: HSProjects,
	quote: () => (
		<span style={{ fontSize: '22px', fontStyle: 'italic' }}>
			“It is hard to fail, but it is worse never to have tried to
			succeed.”
			<br /> – Theodore Roosevelt
			<br />
		</span>
	),
};
