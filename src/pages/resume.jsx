import { Helmet } from 'react-helmet';

const Resume = () => (
	<div>
		<Helmet>
			<link
				rel='stylesheet'
				href='https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css'
			/>
		</Helmet>

		<body data-new-gr-c-s-check-loaded='14.1107.0' data-gr-ext-installed=''>
			<section class='section'>
				<div class='container'>
					<h1 class='title is-1 text-focus-in'>Jacob Schnettler</h1>
					<h2 class='subtitle is-2 text-focus-in mb-0'>
						Student &amp; Developer
					</h2>
					<p class='text-focus-in mb-4'>
						Email me at{' '}
						<strong>
							<a href='mailto:jacobschnettler12@gmail.com'>
								jacobschnettler12@gmail.com
							</a>
						</strong>{' '}
						to talk to me further about my work.
					</p>
					<h2 class='subtitle is-3 text-focus-in2 mb-1'>About Me:</h2>
					<p class='text-focus-in2'></p>
					<ul class='mb-2'>
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
					<p></p>
					<hr />
					<h2 class='subtitle is-3 text-focus-in3 mb-1'>Skills:</h2>
					<p class='text-focus-in2 mb-2'>
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
					<ul class='mb-2'>
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
					</ul>
					<hr />
					<h2 class='subtitle is-3 text-focus-in4'>
						Past Work and Experiences:
					</h2>
					<div class='columns text-focus-in4 is-multiline '>
						<div class='column is-half'>
							<h3 class='subtitle is-5 mb-0'>
								<strong>Adren World</strong>
							</h3>
							<a href='https://snapout.nl/' target='_blank'>
								Visit our Website
							</a>
							<ul class='mt-2'>
								<li>
									- Team working skills with another
									developer.
								</li>
								<li>
									- Learned a new web development technology,
									Vue JS.
								</li>
								<li>
									- Working around barriers like time zones.
								</li>
								<li>
									- Lots of external research to get the best
									information on our site.
								</li>
								<li>
									- Gained over 15,000 unique visitors in the
									first month.
								</li>
							</ul>
						</div>

						<div class='column is-half'>
							<h3 class='subtitle is-5 mb-0'>
								<strong>Lifeguarding - Camelback Resort</strong>
							</h3>
							<a href='https://weblutions.com/' target='_blank'>
								Visit our Website
							</a>
							<ul class='mt-2'>
								<li>- Working with other Developers.</li>
								<li>
									- Assist clients with questions, installs,
									ect.
								</li>
								<li>
									- Helping create quality software solutions.
								</li>
								<li>- Over 800 clients and 2,000 purchases.</li>
							</ul>
						</div>
						<div class='column is-half'>
							<h3 class='subtitle is-5 mb-0'>
								<strong>Snowside Hosting</strong>
							</h3>
							<a
								href='https://snowsidehosting.com/'
								target='_blank'
							>
								Visit our Website
							</a>
							<ul class='mt-2'>
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
						</div>
					</div>
					<center>
						<p class='text-focus-in4'>
							Copyright © Jacob Schnettler{' '}
							{new Date().getFullYear()} - All Rights Reserved
						</p>
					</center>
				</div>
			</section>
		</body>
	</div>
);

export default Resume;
