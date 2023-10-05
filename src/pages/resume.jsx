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
						Email me at{' '}
						<strong>
							<a href='mailto:jacobschnettler12@gmail.com'>
								jacobschnettler12@gmail.com
							</a>
						</strong>{' '}
						to talk to me further about my work.
					</p>
					{/* <h2 className='subtitle is-3 text-focus-in2 mb-1'>About Me:</h2>
					<p className='text-focus-in2'></p>
					<ul className='mb-2'>
						<li>
							- Student &amp; Developer in High School, currently
							exporing new technologies and tools
						</li>
						<li>- Full-Stack Developer for 3 years</li>
						<li>- Passionate about nature &amp; outdoors</li>
					</ul>
					<strong>Current Education: </strong>Enrolled at Pocono
					Mountain East HS
					<br />
					Algebra 2, English, Physics, Spanish, US History, and PE.
					<p></p> */}
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
						<li>- CompTIA A+ Certification</li>
						<li>- <a
								href='/certifications/cybersecurity_foundations.pdf'
								target='_blank'
							>Google Foundations of Cybersecurity Certficate
							</a></li>
						<li>- Google Data Analytics Certification</li>
						<li>
							-{' '}
							<a
								href='/certifications/red_cross.pdf'
								target='_blank'
							>
								Red Cross Lifeguarding with CPR/AED for
								Professional Rescuers and First Aid
							</a>
						</li>
					</ul>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						Independent Business
					</h2>
					<div style={{ paddingLeft: '20px' }}>
						<div>
							<a href="https://breakingpoint.software" target="_blank" style={{ textDecoration: 'underline' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>Breaking Point Software</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>Breaking Point Software was created too help create websites & software for local businesses. The company works with small businesses too optimize their businesses for the web.</p>
						</div>
						<div>
							<a href="https://adrencad.com" target="_blank" style={{ textDecoration: 'underline' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>AdrenCAD</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>AdrenCAD is a company that makes mock police computer aided dispatching software for Grand Theft Auto Five roleplaying servers. To date it has over 25k users & Ive been the lead developer & owner of the project.</p>
						</div>
					</div>

					<hr />

					<h2 className='subtitle is-3 text-focus-in3 mb-1'>
						School Projects
					</h2>
					{/* <div style={{ paddingLeft: '20px' }}>
						<div>
							<a href="https://adrencad.com" target="_blank" style={{ textDecoration: 'underline' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>AdrenCAD</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>AdrenCAD is a company that makes mock police computer aided dispatching software for Grand Theft Auto Five roleplaying servers. To date it has over 25k users & Ive been the lead developer & owner of the project.</p>
						</div>
						<div>
							<a href="https://breakingpoint.software" target="_blank" style={{ textDecoration: 'underline' }}>
								<h3 className='subtitle is-5 mb-0'>
									<strong>Breaking Point Software</strong>
								</h3>
							</a>
							<p style={{ paddingLeft: '20px' }}>Breaking Point Software was created too help create websites & software for local businesses.</p>
						</div>
					</div> */}

					{/* <hr />
					<h2 className='subtitle is-3 text-focus-in3 mb-1'>Skills:</h2>
					<p className='text-focus-in2 mb-2'>
						Here are some skills that help in my growth and
						progression as a developer.
					</p>
					<strong>Personality Traits:</strong>
					<ul>
						<li>
							- Willing to work with others even during difficult
							times or situations.
						</li>
						<li>- Always interested in learning new skills.</li>
						<li>
							- Passionate in teaching others skills I've learned.
						</li>
					</ul>
					<strong>Languages:</strong>
					<ul className='mb-2'>
						<li>
							<abbr title='Server-Side JavaScript Executor'>
								- Node JS
							</abbr>
						</li>
						<li>
							<abbr title='Hyper Text Markup Language/Cascading Style Sheets'>
								- HTML/CSS
							</abbr>
						</li>
						<li>
							<abbr title='TypeScript'>- TypeScript</abbr>
						</li>
						<li>
							<abbr title='JavaScript'>- JavaScript</abbr>
						</li>
						<li>
							<abbr title='Vue JS'>- Vue JS</abbr>
						</li>
						<li>
							<abbr title='Structured Query Language'>
								- MySQL
							</abbr>
						</li>
					</ul>
					<strong>Tools:</strong>
					<ul>
						<li>
							- Fluent in other tools such as{' '}
							<a
								href='https://workspace.google.com/'
								target='_blank'
							>
								G-Suite
							</a>{' '}
							which includes Google Docs, Slids, Sheets, Forms,
							ect.
						</li>
						<li>
							- Proficient at troubleshooting problems and finding
							a solution when it comes to Technology.
						</li>
						<li>
							- Also have have some experience with Cisco Meraki
							and their networking solutions.
						</li>
					</ul> */}
					<hr />

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
						{/* <div className='column is-half'>
							<h3 className='subtitle is-5 mb-0'>
								<strong>Snowside Hosting</strong>
							</h3>
							<a
								href='https://snowsidehosting.com/'
								target='_blank'
							>
								Visit our Website
							</a>
							<ul className='mt-2'>
								<li>
									- Assist cleints with techincal issues they
									experience
								</li>
								<li>
									- Answer client questions about billing,
									tech, ect.
								</li>
								<li>
									- Maintain a professional manner and uphold
									the company's image.
								</li>
								<li>
									- Hundreds of happy customers and steady
									monthly growth.
								</li>
							</ul>
						</div> */}
					</div>
					{/* <center>
						<p className='text-focus-in4'>
							Copyright © Jacob Schnettler{' '}
							{new Date().getFullYear()} - All Rights Reserved
						</p>
					</center> */}
				</div>
			</section>
		</body>
	</div>
);

export default Resume;
