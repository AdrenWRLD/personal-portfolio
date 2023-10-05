import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { isMobile } from 'react-device-detect';
import { Config } from './config';

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

function App() {
	const width = !isMobile ? '30vw' : '80%';

	const buttomWidth = '100%';

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
			line: isMobile ? '2' : '1',
			icon: (
				<Icon
					src='https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png'
					label='React JS'
				/>
			),
		},
		{
			line: isMobile ? '2' : '1',
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
			line: isMobile ? '3' : '2',
			icon: (
				<Icon
					src='https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png'
					label='Git'
				/>
			),
		},
		{
			line: isMobile ? '3' : '2',
			icon: <Icon src='/icons/arduino.png' label='Arduino' />,
		},
		// mysql, mongodb, python,
	];

	const Tools = [
		{
			line: '1',
			icon: <Icon src='/icons/photoshop.png' label='Adobe Photoshop' />,
		},
		{
			line: '1',
			icon: <Icon src='/icons/vegas.png' label='Sony Vegas' />,
		},
		{
			line: '1',
			icon: <Icon src='/icons/vscode.png' label='VS Code' />,
		},
	];

	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<header
				style={{
					width: width,
					height: '100vh',
					margin: 'auto',
				}}
			>
				<div
					className='text-center'
					style={{
						padding: '25px',
						paddingTop: '45px',
						textAlign: 'center',
					}}
				>
					<img src={Config.avatar} style={{ borderRadius: '100%' }} />

					<h1 style={{ paddingTop: '15px' }}>Jacob Schnettler</h1>

					<a
						href='/resume'
						style={{
							fontSize: '25px',
							padding: '5px',
							color: 'black',
						}}
					>
						Resume
					</a>

					<div style={{ paddingTop: '10px' }}>
						<a
							href={Config.github}
							target='_bl	ank'
							style={{
								fontSize: '35px',
								padding: '5px',
								color: 'black',
							}}
						>
							<i className='fab fa-github'></i>
						</a>
						<a
							href={Config.youtube}
							target='_bl	ank'
							style={{
								fontSize: '35px',
								padding: '5px',
								color: 'black',
							}}
						>
							<i className='fab fa-youtube'></i>
						</a>
						<a
							href={`mailto: ${Config.email}`}
							target='_blank'
							style={{
								fontSize: '35px',
								padding: '5px',
								color: 'black',
							}}
						>
							<i className='fas fa-envelope-square'></i>
						</a>
					</div>
				</div>

				<p className='text-center'>
					<Config.quote />
				</p>

				<div
					style={{
						width: '80%',
						margin: 'auto',
					}}
				>
					<p
						className='text-center'
						style={{
							fontWeight: '700',
							fontSize: '20px',
							margin: '0',
							padding: '0',
						}}
					>
						Experienced with
					</p>

					<div
						style={{
							width: '100%',
							paddingTop: '5px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{Tools.map(
							(item) =>
								item.line == '1' && (
									<p
										style={{
											color: 'black',
											margin: '0',
											padding: '0',
											fontSize: '30px',
											padding: '10px',
											// cursor: 'pointer',
										}}
									>
										{item.icon}
									</p>
								)
						)}
					</div>

					<p
						className='text-center'
						style={{
							fontWeight: '700',
							fontSize: '20px',
							margin: '0',
							padding: '0',
							paddingTop: '10px',
						}}
					>
						My Programming Stack
					</p>

					<div
						style={{
							width: '100%',
							paddingTop: '5px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{Stack.map(
							(item) =>
								item.line == '1' && (
									<p
										style={{
											color: 'black',
											margin: '0',
											padding: '0',
											fontSize: '30px',
											padding: '10px',
											// cursor: 'pointer',
										}}
									>
										{item.icon}
									</p>
								)
						)}
					</div>

					<div
						style={{
							width: '100%',
							paddingTop: '5px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{Stack.map(
							(item) =>
								item.line == '2' && (
									<p
										style={{
											color: 'black',
											margin: '0',
											padding: '0',
											fontSize: '30px',
											padding: '10px',
											// cursor: 'pointer',
										}}
									>
										{item.icon}
									</p>
								)
						)}
					</div>

					<div
						style={{
							width: buttomWidth,
							display: 'flex',
							justifyContent: 'center',
							paddingTop: '5px',
							paddingBottom: '15px',
							margin: 'auto',
						}}
					>
						{Stack.map(
							(item) =>
								item.line == '3' && (
									<p
										style={{
											color: 'black',
											margin: '0',
											padding: '0',
											fontSize: '30px',
											padding: '10px',
											paddingTop: '0',
											// cursor: 'pointer',
										}}
									>
										{item.icon}
									</p>
								)
						)}
					</div>
				</div>

				<div
					className='text-center'
					style={{ width: '100%', paddingTop: '10px' }}
				>
					<p
						className='text-center'
						style={{
							fontWeight: '700',
							fontSize: '20px',
							margin: '0',
							padding: '0',
						}}
					>
						Projects
					</p>

					<div
						style={{
							width: buttomWidth,
							paddingTop: '15px',
							paddingBottom: '35px',
							margin: 'auto',
						}}
					>
						{Config.projects.map((project) => (
							<a
								className='btn btn-primary'
								href={'/projects' + project.route}
								style={{
									width: '100%',
									marginBottom: '10px',
									fontWeight: '700',
								}}
							>
								{project.name}
							</a>
						))}
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
