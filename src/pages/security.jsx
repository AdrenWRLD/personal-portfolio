export const SecuritySystemPage = () => {
	return (
		<div className='container'>
			<div className='title text-center' style={{ paddingTop: '45px' }}>
				<h1>ESP-32 Cam Security System</h1>

				<div style={{ fontSize: '24px', paddingTop: '15px' }}>
					<p style={{ padding: '0', margin: '0' }}>
						Written By: Jacob Schnettler
					</p>

					<p
						style={{
							padding: '0',
							margin: '0',
							paddingTop: '10px',
						}}
					>
						Last Updated On: {'5/6/2023'}
					</p>

					<p
						style={{
							padding: '0',
							margin: '0',
							paddingTop: '10px',
						}}
					>
						<a
							href='https://github.com/IamAdren/security-system'
							target='_blank'
						>
							<i className='fab fa-github'></i> Frontend Client
						</a>
					</p>
				</div>
			</div>

			<hr />

			<div className='text-center'>
				<p
					style={{
						padding: '0',
						margin: '0',
						fontWeight: '700',
						fontSize: '25px',
					}}
				>
					Hardware Showcase Images
				</p>

				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
					}}
				>
					<img
						src='/esp32/asset_1.png'
						style={{ height: '400px', margin: '20px' }}
					/>

					<img
						src='/esp32/asset_2.png'
						style={{ height: '400px', margin: '20px' }}
					/>
				</div>
			</div>
		</div>
	);
};
