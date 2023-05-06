import { Link } from 'react-router-dom';
import { Config } from './config';

function App() {
	return (
		<div
			style={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<header
				style={{
					width: '500px',
					marginTop: '3.5vh',
				}}
			>
				<div className='text-center' style={{ padding: '25px' }}>
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

				<div>
					<p
						className='text-center'
						style={{
							fontWeight: '700',
							fontSize: '20px',
							margin: '0',
							padding: '0',
						}}
					>
						My Stack
					</p>

					<div
						style={{
							width: '500px',
							paddingTop: '10px',
							display: 'flex',
							justifyContent: 'center',
						}}
					>
						{Config.stack.map(
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
							width: '500px',
							display: 'flex',
							justifyContent: 'center',
							paddingTop: '5px',
							paddingBottom: '15px',
						}}
					>
						{Config.stack.map(
							(item) =>
								item.line == '2' && (
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

				<div>
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
							width: '500px',
							paddingTop: '15px',
							paddingBottom: '35px',
						}}
					>
						{Config.projects.map((project) => (
							<Link
								className='btn btn-primary'
								to={'/projects' + project.route}
								style={{
									width: '100%',
									marginBottom: '10px',
									fontWeight: '700',
								}}
							>
								{project.name}
							</Link>
						))}
					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
