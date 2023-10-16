import { Helmet } from 'react-helmet';

const Resume = () => (
	<div>
		<Helmet>
			<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'
			/>

			<style>
				{`
				a {
					text-decoration-color: black !important;
				}
				`}
			</style>
		</Helmet>

		<body data-new-gr-c-s-check-loaded='14.1107.0' data-gr-ext-installed=''>
			<section className='section'>
				<div className='container'>
					<h1 className='title is-1 text-focus-in'>Jacob Schnettler</h1>
					{/* <h2 className='subtitle is-2 text-focus-in mb-0'>
						Student &amp; Developer
					</h2> */}
					<p className='text-focus-in mb-4'>
						Email: {' '}
						<strong>
							<a href='mailto:jacobschnettler12@gmail.com'>
								jacobschnettler12@gmail.com
							</a>
						</strong>
					</p>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						Education:
					</h2>
					<ul style={{ paddingLeft: '20px' }}>
						<li>
							Pocono Mountain East High School – Class of 2024
						</li>
						<li>
							ASVAB Score: 60
						</li>
						<li>
							AP COURSEWORK
						</li>
						<li style={{ paddingLeft: '15px' }}>
							Current: AP Computer Science A, AP Computer Science Principles
						</li>
					</ul>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						Certifications:
					</h2>

					<ul style={{ paddingLeft: '20px' }}>
						{/* <li>- CompTIA Security+ Certification</li> */}
						<li>- <a
							href='/certifications/cybersecurity_foundations.pdf'
							target='_blank'
						>Google Foundations of Cybersecurity Certificate
						</a></li>
						<li>- <a
							href='/certifications/data_analytics.pdf'
							target='_blank'
						>Google Foundations of Data Analytics Certificate
						</a></li>
						<li>
							-{' '}
							<a
								href='/certifications/red_cross.pdf'
								target='_blank'
							>
								Red Cross Lifeguarding with CPR/AED and First Aid
							</a>
						</li>
					</ul>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						Recommendation Letters:
					</h2>

					<ul style={{ paddingLeft: '20px' }}>
						{/* <li>- CompTIA Security+ Certification</li> */}
						<li>- <a
							href='/letters/luciano_recommendation.pdf'
							target='_blank'
						>Robert Luciano - PMSD Computer Science Teacher
						</a></li>
						<li>- <a
							href='/letters/ludka_recommendation.pdf'
							target='_blank'
						>Richard Ludka - PMSD Swimming & PhysEd Teacher
						</a></li>
					</ul>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						Independent Business
					</h2>
					<div style={{ paddingLeft: '20px' }}>
						<div>
							<a href="https://breakingpoint.software" target="_blank" style={{ textDecoration: 'none' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>Breaking Point Software - www.breakingpoint.software</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>Breaking Point Software was created too help create websites & software for local businesses. The company works with small businesses too optimize their businesses for the web.</p>
						</div>
						<div>
							<a href="https://adrencad.com" target="_blank" style={{ textDecoration: 'none' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>AdrenCAD - www.adrencad.com</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>AdrenCAD is a company that makes mock police computer aided dispatching software for Grand Theft Auto Five roleplaying servers. To date it has over 15k users & Ive been the lead developer & owner of the project.</p>
						</div>
					</div>

					<hr />

					{/* <h2 className='subtitle is-3 text-focus-in3 mb-1'>
						School Projects
					</h2>

					<h2
						className='subtitle mb-0'
						style={{ fontSize: '24px', paddingLeft: '10px' }}
					><strong>Advanced Java - 2022-2023</strong></h2>

					<ul className='mt-1' style={{ paddingLeft: '15px' }}>
						{[
							{ name: 'MC Frogger (Final Project)' },
							{ name: 'Battleship' },
							{ name: 'Image Guesser' },
							{ name: 'Who wants to be a Millionare' },
							{ name: 'Hangman' },
							{ name: 'NIM 753' },
							{ name: 'Battleship' },
							{ name: 'Number Time' },
							{ name: 'NFL Team Picker' },
							{ name: 'Dice Bet' },
							{ name: 'Pizza Picker' }
						].map((item => <li>- {item.name}</li>))}
					</ul>

					<hr /> */}

					<h2 className='subtitle is-3 text-focus-in4' style={{ marginBottom: "0", paddingBottom: '0', paddingBottom: '15px' }}>
						Work Experience:
					</h2>

					<h2
						className='subtitle mb-0'
						style={{ paddingBottom: '10px', fontSize: '24px', paddingLeft: '10px' }}
					><strong>Camelback Resort (2020 - Present)</strong></h2>

					<div className='text-focus-in4 is-multiline' style={{ paddingLeft: "20px" }}>
						<div>
							<h3 className='subtitle is-5 mb-0'>
								<strong>Aquatics Dept.</strong>
							</h3>
							<ul className='mt-2'>
								<li>- Worked with other employees too maintain safety.</li>
								<li>- Make sure guests felt welcomed while in the park.</li>
							</ul>
						</div>

						<div style={{ paddingTop: '20px' }}>
							<h3 className='subtitle is-5 mb-0'>
								<strong>Rentals Dept.</strong>
							</h3>
							<ul className='mt-2'>
								<li>- Managed inventory including snowboard & ski equipment.</li>
								<li>- Worked with other employees</li>
								<li>- Made guests feel welcome</li>
							</ul>
						</div>
					</div>

					<p style={{ paddingTop: '35px', fontSize: '18px' }}>jschnettler.com/resume</p>
				</div>
			</section>
		</body>
	</div>
);

export default Resume;
