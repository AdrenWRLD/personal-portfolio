import { useState, useEffect } from 'react';
import { Button, Card, Container, Spinner } from 'react-bootstrap';

export const AdvancedJavaPage = () => {
	const [Projects, setProjects] = useState(null);

	const [Fetching, setFetching] = useState(true);

	const [SelectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		setFetching(true);

		fetch(
			'https://raw.githubusercontent.com/jacobschnettler/advanced-java/main/projects.json'
		)
			.then((response) => response.json())
			.then((data) => {
				const projects = data;

				setProjects(projects);

				let params = new URL(document.location).searchParams;

				let project = params.get('project');

				if (project)
					projects.forEach((p) => {
						if (p.id == project) setSelectedProject(p);
					});

				setFetching(false);
			})
			.catch((err) => {
				console.log(err);

				alert(
					'Unexpected error while trying to fetch course projects.'
				);
			});
	}, []);

	return !Fetching ? (
		SelectedProject ? (
			<Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<h1 className='h2'>{SelectedProject.label}</h1>

					<a
						href='/projects/advanced-java'
						style={{ paddingLeft: '25px' }}
					>
						Other Projects
					</a>
				</div>

				<div className='row' style={{ marginBottom: '15px' }}>
					<div className='col-md-8' />

					<div className='col-md-4 text-center'>
						<a href='#' style={{ fontSize: '30px' }}>
							<i className='fas fa-arrow-up'></i>
						</a>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-8' style={{ minHeight: '420px' }}>
						<iframe
							width='100%'
							height='100%'
							src={SelectedProject.youtube}
							title='YouTube video player'
							frameborder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
							allowfullscreen
						></iframe>
					</div>
					<div className='col-md-4'>
						{[
							SelectedProject.previews[0]
								? SelectedProject.previews[0]
								: null,
							SelectedProject.previews[1]
								? SelectedProject.previews[1]
								: null,
						].map((image) => {
							return (
								<img
									src={image}
									style={{ width: '100%', cursor: 'pointer' }}
								/>
							);
						})}
					</div>
				</div>

				<div className='row' style={{ marginTop: '15px' }}>
					<div className='col-md-8'>
						<h1 className='h2' style={{ paddingTop: '15px' }}>
							Description:
						</h1>

						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Error maxime nemo corporis dolore facilis
							optio. Praesentium, repellendus sed natus, pariatur
							ipsa ratione est ut, consequatur ea voluptatem
							molestiae cupiditate officiis? Lorem ipsum dolor
							sit, amet consectetur adipisicing elit. Error maxime
							nemo corporis dolore facilis optio. Praesentium,
							repellendus sed natus, pariatur ipsa ratione est ut,
							consequatur ea voluptatem molestiae cupiditate
							officiis? Lorem ipsum dolor sit, amet consectetur
							adipisicing elit. Error maxime nemo corporis dolore
							facilis optio. Praesentium, repellendus sed natus,
							pariatur ipsa ratione est ut, consequatur ea
							voluptatem molestiae cupiditate officiis? Lorem
							ipsum dolor sit, amet consectetur adipisicing elit.
							Error maxime nemo corporis dolore facilis optio.
							Praesentium, repellendus sed natus, pariatur ipsa
							ratione est ut, consequatur ea voluptatem molestiae
							cupiditate officiis?
						</p>
					</div>

					<div className='col-md-4 text-center'>
						<a href='#' style={{ fontSize: '30px' }}>
							<i className='fas fa-arrow-down'></i>
						</a>

						<hr />

						<Button
							size='lg'
							style={{ width: '100%', fontWeight: '700' }}
							variant='secondary'
							target='_blank'
							href={SelectedProject.repo}
						>
							Github Repository
						</Button>
					</div>
				</div>
			</Container>
		) : (
			<Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
				<h1 className='h2'>Advanced Java Projects</h1>

				<p>Projects</p>

				<div className='row'>
					{Projects.map((project) => (
						<div
							className='col-md-4'
							style={{ marginBottom: '20px' }}
						>
							<Card body>
								<a
									href={
										'/projects/advanced-java?project=' +
										project.id
									}
								>
									<Card.Img
										src={project.previews[0]}
										style={{ cursor: 'pointer' }}
									/>
								</a>

								<Card.Title
									style={{
										paddingTop: '15px',
										fontWeight: '700',
									}}
								>
									{project.label}
								</Card.Title>

								<hr />

								<a
									href={
										'/projects/advanced-java?project=' +
										project.id
									}
								>
									<Button
										style={{
											marginTop: '10px',
											width: '100%',
											fontWeight: '700',
										}}
									>
										View Project
									</Button>
								</a>

								<Button
									href={project.repo}
									target='_blank'
									variant='secondary'
									style={{
										marginTop: '10px',
										width: '100%',
										fontWeight: '700',
									}}
								>
									Github Repository
								</Button>
							</Card>
						</div>
					))}
				</div>
			</Container>
		)
	) : (
		<div className='text-center' style={{ paddingTop: '85px' }}>
			<Spinner
				animation='border'
				role='status'
				style={{
					height: '125px',
					width: '125px',
					fontSize: '25px',
				}}
			>
				<span className='visually-hidden'>Loading...</span>
			</Spinner>

			<p
				style={{
					paddingTop: '20px',
					fontStyle: 'italic',
					fontSize: '30px',
					fontWeight: '700',
				}}
			>
				Fetching Projects...
			</p>
		</div>
	);
};
