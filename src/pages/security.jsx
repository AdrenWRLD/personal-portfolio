const Categories = [
	{
		id: 'intro',
		label: 'Introduction',
	},
	{
		id: 'eletronics',
		label: 'Eletronics',
		post: () => <div style={{paddingBottom:'10px'}}>
			<img
				src='/esp32/asset_1.png'
				style={{ height: '200px', margin: '10px',marginLeft:'0' }}
			/>

			<img
				src='/esp32/asset_2.png'
				style={{ height: '200px', margin: '10px' }}
			/>
		</div>
	},
	{
		id: '3d-modeling',
		label: '3D Modeling',
	},
	{
		id: 'software',
		label: 'Software',
		post: () => <div style={{paddingBottom:'10px'}}>
			<img
				src='https://camo.githubusercontent.com/bb964fe18551082f75b669f7e9e4aa996ccae5202604c8742fc884845faa6bfd/68747470733a2f2f692e696d6775722e636f6d2f30726d6f704f782e706e67'
				style={{ height: '200px', margin: '10px',marginLeft:'0' }}
			/>
		</div>
	},
	{
		id: 'showcase',
		label: 'Showcase',
	}
]

const TableOfContents = () => <div style={{ paddingTop: '45px', paddingBottom: '25px' }}>
	<h1 className="h5">Table of Contents</h1>

	<div>
		{Categories.map((category) => <p><a href={'#' + category.id} key={category.id}>{category.label}</a></p>)}
	</div>
</div>

export const SecuritySystemPage = () => {
	return (
		<div className='container'>
			<div className='title text-center' style={{ paddingTop: '45px' }}>
				<h1 className="h3">Personal Security System</h1>

				<div style={{ fontSize: '22px', paddingTop: '10px' }}>
					<p style={{ padding: '0', margin: '0', fontSize: '22px' }}>
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

					{/* <p
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
					</p> */}
				</div>
			</div>

			<div style={{ width: '60%', margin: 'auto' }}>
				<TableOfContents />

				{Categories.map((category) =>
					<div id={category.id} key={category.id} style={{ paddingBottom: '25px' }}>
						<h1 className="h5">{category.label}</h1>

						{category.post && <category.post />}

						<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam eius quasi nam quos. Id, asperiores ex eum soluta obcaecati quae qui officiis corrupti, harum reprehenderit perferendis consequuntur porro! Quibusdam, modi?</p>
					</div>
				)}
			</div>

			{/* <hr /> */}

			{/* <div>
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
			</div> */}
		</div>
	);
};
