import { useState, useEffect } from 'react';
import { Button, Card, Container, Spinner, Modal, Badge } from 'react-bootstrap';

const RepoSourcesModal = ({ show, setShow, files }) => {
	const handleClose = () => setShow(false);

	return (
		show &&
		files && (
			<Modal
				show={show}
				onHide={handleClose}
				size='lg'
				style={{ marginTop: '15vh' }}
			>
				<Modal.Header closeButton>
					<Modal.Title>Project Files</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{files.map((file, index) => (
						<Card
							body
							style={{ marginBottom: index == 0 ? '20px' : null }}
						>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
								}}
							>
								<Card.Title>{file.label}</Card.Title>

								<Button
									variant='secondary'
									target='_blank'
									href={file.source}
									style={{
										marginLeft: 'auto',
									}}
								>
									Project File
								</Button>
							</div>
						</Card>
					))}
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		)
	);
};

export const APComputerSciencePrincipalsPage = () => {
	const [Projects, setProjects] = useState(null);

	const [Fetching, setFetching] = useState(true);

	const [SelectedProject, setSelectedProject] = useState(null);

	const [ProjectFiles, setProjectFiles] = useState(null);

	const [ShowProjectFilesModal, setShowProjectFilesModal] = useState(false);

	const [MediaIndex, setMediaIndex] = useState(0);

	const [ShowFullScreenImg, setShowFullScreenImg] = useState(true);

	const [SelectedImage, setSelectedImage] = useState(null);

	useEffect(() => {
		setFetching(true);

		fetch(
			'https://raw.githubusercontent.com/jacobschnettler/ap-csp/main/projects.json'
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
		<div>
			{ProjectFiles && (
				<RepoSourcesModal
					show={ShowProjectFilesModal}
					setShow={setShowProjectFilesModal}
					files={ProjectFiles}
				/>
			)}

			{SelectedProject ? (
				<Container
					style={{ paddingTop: '30px', paddingBottom: '30px' }}
				>
					<div style={{ display: 'flex', alignItems: 'center' }}>
						<h1 className='h2'>{SelectedProject.label}</h1>

						<a
							href='/projects/advanced-java'
							style={{ paddingLeft: '25px' }}
						>
							Other Projects
						</a>
					</div>

					<div className='row' style={{ marginBottom: '15px', paddingTop: '25px' }}>
						<div
							className='col-md-8'
						>
							<div>
								<iframe
									width='100%'
									height='420px'
									src={SelectedProject.youtube}
									title='YouTube video player'
									frameborder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
									allowfullscreen={true}
								></iframe>

								<h1 className='h2' style={{ paddingTop: '15px' }}>
									Description:
								</h1>

								<p style={{ fontSize: '20px' }}>
									{SelectedProject && SelectedProject.description ? SelectedProject.description : "No Description Set."}
								</p>
							</div>
						</div>

						<div className='col-md-4 text-center'>
							<a
								href='#'
								style={{
									fontSize: '30px',
									color: MediaIndex == 0 ? 'black' : null,
								}}
								onClick={() => {
									if (!(MediaIndex == 0))
										setMediaIndex((index) => index - 1);
								}}
							>
								<i className='fas fa-arrow-up'></i>
							</a>

							{[
								SelectedProject.previews[MediaIndex]
									? SelectedProject.previews[MediaIndex]
									: null,
								SelectedProject.previews[MediaIndex + 1]
									? SelectedProject.previews[MediaIndex + 1]
									: null,
							].map((image, i) => {
								return (
									<a href={image} target="_blank">
										<img
											// onClick={() => {
											// 	setSelectedImage(image);

											// 	setShowFullScreenImg(true);
											// }}
											src={image}
											style={{
												width: '100%',
												cursor: 'pointer',
												marginBottom: i == 0 ? '15px' : null
											}}
										/>
									</a>
								);
							})}

							<a
								href='#'
								style={{
									fontSize: '30px',
									color:
										MediaIndex + 1 ==
											SelectedProject.previews.length - 1
											? 'black'
											: null,
								}}
								onClick={() => {
									if (
										!(
											MediaIndex + 1 ==
											SelectedProject.previews.length - 1
										)
									)
										setMediaIndex((index) => index + 1);
								}}
							>
								<i className='fas fa-arrow-down'></i>
							</a>

							<hr />

							{SelectedProject.repoSources ? (
								<Button
									size='lg'
									style={{ width: '100%', fontWeight: '700' }}
									variant='secondary'
									onClick={() => {
										setProjectFiles(
											SelectedProject.repoSources
										);

										setShowProjectFilesModal(true);
									}}
								>
									Project Files
								</Button>
							) : (
								SelectedProject.repo && (
									<Button
										size='lg'
										style={{
											width: '100%',
											fontWeight: '700',
										}}
										variant='secondary'
										target='_blank'
										href={SelectedProject.repo}
									>
										Project Files
									</Button>
								)
							)}

							{SelectedProject.grade &&
								<Card body style={{ marginTop: '25px' }}>
									<Card.Title
										style={{
											paddingTop: '15px',
											fontWeight: '700',
										}}
									>
										Final Grade
									</Card.Title>

									<Card.Title>{SelectedProject.grade}</Card.Title>
								</Card>}
						</div>
					</div>
				</Container>
			) : (
				<Container
					style={{ paddingTop: '30px', paddingBottom: '30px' }}
				>
					<h1 className='h2'>AP Computer Science Principals Course Files</h1>

					<p>Course Files</p>

					<div className='row'>
						{Projects.map((project) => (
							<div
								className='col-md-4'
								style={{ marginBottom: '20px' }}
							>
								<Card body>
									{/* <a
										href={
											'/projects/advanced-java?project=' +
											project.id
										}
									>
										{project.grade &&
											<div style={{ position: 'absolute', zIndex: '600', left: '15px', right: '15px' }}>
												<h1 className='h5'><Badge>Graded</Badge></h1>
											</div>
										}

										<Card.Img
											src={project.previews[0]}
											style={{ cursor: 'pointer' }}
										/>
									</a> */}

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
												marginBottom: '10px',
											}}
										>
											View Files
										</Button>
									</a>

									{project.repoSources ? (
										<Button
											style={{
												width: '100%',
												fontWeight: '700',
											}}
											variant='secondary'
											onClick={() => {
												setProjectFiles(
													project.repoSources
												);

												setShowProjectFilesModal(true);
											}}
										>
											Project Files
										</Button>
									) : (
										project.repo && (
											<Button
												style={{
													width: '100%',
													fontWeight: '700',
												}}
												variant='secondary'
												target='_blank'
												href={project.repo}
											>
												Github Repository
											</Button>
										)
									)}
								</Card>
							</div>
						))}
					</div>
				</Container>
			)}
		</div>
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
