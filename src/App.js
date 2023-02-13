import { Link } from 'react-router-dom';

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
			<header style={{ width: '500px', marginTop: '10vh' }}>
				<div className='text-center' style={{ padding: '25px' }}>
					<img src='/picture.jpg' style={{ borderRadius: '100%' }} />

					<h1 style={{ paddingTop: '15px' }}>Jacob Schnettler</h1>

					<div>
						<a
							href='https://github.com/IamAdren'
							target='_blank'
							style={{
								fontSize: '35px',
								padding: '5px',
								color: 'black',
							}}
						>
							<i className='fab fa-github'></i>
						</a>

						<a
							href='mailto: jacobschnettler12@gmail.com'
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

				<div style={{ width: '500px', paddingTop: '25px' }}>
					<Link
						className='btn btn-primary'
						to='/projects/adren-world'
						style={{
							width: '100%',
							marginBottom: '10px',
							fontWeight: '700',
						}}
					>
						Adren World
					</Link>

					<Link
						className='btn btn-primary'
						to='/projects/advanced-java'
						style={{
							width: '100%',
							marginBottom: '10px',
							fontWeight: '700',
						}}
					>
						Advanced Java
					</Link>

					<Link
						className='btn btn-primary'
						to='/projects/items-tracker'
						style={{
							width: '100%',
							marginBottom: '10px',
							fontWeight: '700',
						}}
					>
						Personal Items Tracker
					</Link>
				</div>
			</header>
		</div>
	);
}

export default App;
