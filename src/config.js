import { OverlayTrigger, Tooltip } from 'react-bootstrap';

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
		route: '/items-tracker',
		page: SecuritySystemPage,
	},
];

const Icon = ({ src, label }) => (
	<OverlayTrigger
		placement='left'
		overlay={(props) => (
			<Tooltip id='button-tooltip' {...props}>
				{label}
			</Tooltip>
		)}
	>
		<img
			src={src}
			style={{ height: '30px', width: '30px', cursor: 'grab' }}
		/>
	</OverlayTrigger>
);

const Stack = [
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/186884153-99edc188-e4aa-4c84-91b0-e2df260ebc33.png'
				label='Ubuntu OS'
			/>
		),
	},
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png'
				label='Javascript'
			/>
		),
	},
	{
		line: '1',
		icon: <Icon src='/icons/lua.png' label='Lua' />,
	},
	{
		line: '1',
		label: 'Ubuntu OS',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png'
				label='HTML'
			/>
		),
	},
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png'
				label='CSS'
			/>
		),
	},
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/117201156-9a724800-adec-11eb-9a9d-3cd0f67da4bc.png'
				label='Java'
			/>
		),
	},
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
				label='React JS'
			/>
		),
	},
	{
		line: '1',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'
				label='Node JS'
			/>
		),
	},
	{
		line: '2',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png'
				label='Express JS'
			/>
		),
	},
	{
		line: '2',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png'
				label='MySQL'
			/>
		),
	},
	{
		line: '2',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png'
				label='MongoDB'
			/>
		),
	},
	{
		line: '2',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png'
				label='Nginx'
			/>
		),
	},
	{
		line: '2',
		icon: (
			<Icon
				src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'
				label='Git'
			/>
		),
	},
	{
		line: '2',
		icon: <Icon src='/icons/arduino.png' label='Arduino' />,
	},
	// mysql, mongodb, python,
];

export const Config = {
	avatar: '/picture.jpg',
	email: 'jacobschnettler13@gmail.com',
	github: 'https://github.com/IamAdren',
	projects: Projects,
	stack: Stack,
};
