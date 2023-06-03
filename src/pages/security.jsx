import { isMobile } from 'react-device-detect';

const Categories = [
	{
		id: 'intro',
		label: 'Introduction',
		post: () => (
			<p>
				Introducing my Personal Security System—an innovative solution
				that brings peace of mind and robust surveillance to my
				surroundings. Fueled by my passion for DIY projects and a desire
				to have full control over my security setup, I embarked on a
				journey to create a custom security camera system using
				ESP32-Cams. By combining my technical skills, creativity, and
				the power of 3D printing, I not only constructed durable camera
				cases but also developed my own software to effortlessly view
				live feeds. Inspired by the desire to maintain my privacy and
				avoid relying on big companies like Ring or Blink, my Personal
				Security System is a testament to the possibilities that arise
				when one takes matters into their own hands.
			</p>
		),
	},
	{
		id: 'eletronics',
		label: 'Eletronics',
		post: () => (
			<div style={{ paddingBottom: '10px' }}>
				<div style={{ paddingBottom: '15px' }}>
					<img
						src='/esp32/asset_1.png'
						style={
							isMobile
								? {
										width: '100%',
										marginTop: '10px',
										marginBottom: '10px',
								  }
								: {
										height: '200px',
										margin: '10px',
										marginLeft: '0',
								  }
						}
					/>

					<img
						src='/esp32/asset_2.png'
						style={
							isMobile
								? {
										width: '100%',
										marginTop: '10px',
										marginBottom: '10px',
								  }
								: { height: '200px', margin: '10px' }
						}
					/>
				</div>

				<p>
					The Electronics component of my project was an exhilarating
					foray into new territory, as I delved into the world of
					Arduino for the first time. Central to the heart of the
					system was the remarkable ESP32-Cams, which served as the
					backbone of my security camera setup. To ensure seamless
					integration, I employed a converter board, which allowed me
					to connect and harness the full potential of the ESP32-Cams.
					Recognizing the importance of a strong and reliable wireless
					connection, I strategically added an antenna to enhance the
					Wi-Fi signal strength, ensuring uninterrupted transmission
					of live feeds. This combination of Arduino, converter board,
					and antenna showcased the convergence of hardware and
					innovation, empowering me to create a robust and efficient
					Personal Security System.
				</p>
			</div>
		),
	},
	{
		id: '3d-modeling',
		label: '3D Modeling',
		post: () => (
			<p>
				Embarking on my first 3D modeling endeavor, I undertook the task
				of customizing publicly available models to suit the specific
				requirements of my project. With careful attention to detail, I
				skillfully edited the designs to incorporate precise ports that
				would seamlessly accommodate the antennas. This meticulous
				customization ensured optimal positioning for enhanced signal
				reception. As a novice in the realm of 3D printing, I navigated
				the intricacies of the technology with precision and
				perseverance. Through resourcefulness and a steep learning
				curve, I successfully transformed virtual designs into tangible
				objects, effectively integrating them into my Personal Security
				System.
			</p>
		),
	},
	{
		id: 'software',
		label: 'Software',
		post: () => (
			<div style={{ paddingBottom: '10px' }}>
				<div style={{ paddingBottom: '15px' }}>
					<img
						src='https://camo.githubusercontent.com/bb964fe18551082f75b669f7e9e4aa996ccae5202604c8742fc884845faa6bfd/68747470733a2f2f692e696d6775722e636f6d2f30726d6f704f782e706e67'
						style={
							isMobile
								? {
										width: '100%',
										marginTop: '10px',
										marginBottom: '10px',
								  }
								: {
										height: '200px',
										margin: '10px',
										marginLeft: '0',
								  }
						}
					/>
				</div>

				<p>
					Utilizing my extensive expertise in React JS, I embarked on
					a dynamic endeavor to craft a cutting-edge software solution
					for my project. Leveraging the robust capabilities of React
					JS, I seamlessly integrated the application with the
					powerful Home Assistant software. Harnessing the versatility
					of Home Assistant, I established a seamless connection to
					effortlessly retrieve and pull the live feeds from the ESP32
					cameras into the React app. Through careful coding and
					implementation, I ensured a smooth and efficient flow of
					data, enabling real-time access to the camera feeds within
					the user-friendly interface. This integration not only
					streamlined the process of managing and monitoring the feeds
					but also provided me with unparalleled control and
					convenience in overseeing the security of my surroundings.
					By leveraging the combined potential of React JS and Home
					Assistant, I successfully created a comprehensive and
					powerful software solution that perfectly complemented the
					hardware components of my Personal Security System.
				</p>
			</div>
		),
	},
	// {
	// 	id: 'showcase',
	// 	label: 'Showcase',
	// 	post: () => (
	// 		<p>
	// 			The inspiration for this project came from not wanting too use a
	// 			security service like Ring or Blink.
	// 		</p>
	// 	),
	// },
];

const TableOfContents = () => (
	<div style={{ paddingTop: '45px', paddingBottom: '25px' }}>
		<h1 className='h5'>Table of Contents</h1>

		<div style={{ paddingTop: '10px' }}>
			{Categories.map((category) => (
				<p>
					<a href={'#' + category.id} key={category.id}>
						{category.label}
					</a>
				</p>
			))}
		</div>
	</div>
);

export const SecuritySystemPage = () => {
	return (
		<div className='container'>
			<div className='title text-center' style={{ paddingTop: '45px' }}>
				<h1 className='h3'>Personal Security System</h1>

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

					{/* hr */}
				</div>
			</div>

			<div style={{ width: isMobile ? '85%' : '60%', margin: 'auto' }}>
				<TableOfContents />

				{Categories.map((category) => (
					<div
						id={category.id}
						key={category.id}
						style={{ paddingBottom: '25px' }}
					>
						<h1 className='h5'>{category.label}</h1>

						{category.post && <category.post />}
					</div>
				))}
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
