// const Projects = [
// 	{
// 		name: 'NFL Team Picker',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/NFLTeamPicker.java',
// 	},
// 	{
// 		name: 'NIM 753',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/NIM753.java',
// 	},
// 	{
// 		name: 'Dice Bet',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/DiceBet.java',
// 	},
// 	{
// 		name: 'Hangman Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/Hangman.java',
// 	},
// 	{
// 		name: 'Millionare Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/Millionare.java',
// 	},
// 	{
// 		name: 'Pizza Picker',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/PizzaPicker.java',
// 	},
// 	{
// 		name: 'Yes Or No Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/YesOrNo.java',
// 	},
// 	{
// 		name: 'Number Time Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/NumberTime.java',
// 	},
// 	{
// 		name: 'Deal or No Deal Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/DealOrNoDeal.java',
// 	},
// 	{
// 		name: 'Connect Four',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/ConnectFour.java',
// 	},
// 	{
// 		name: 'Image Guesser',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/ImageGuesser.java',
// 	},
// 	{
// 		name: 'Battle Ship Game',
// 		src: 'https://github.com/IamAdren/advanced-java/blob/main/BattleshipGame.java',
// 	},
// 	{
// 		name: 'Survivor Game',
//         src: 'https://github.com/IamAdren/advanced-java/blob/main/SurvivorGame.java'
// 	},
// ];

import { useState, useEffect } from 'react';

import { Button, Card, Container } from 'react-bootstrap';

import { silentUpdate } from '../utils';

export const AdvancedJavaPage = () => {
	const [Projects, setProjects] = useState(null);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/jacobschnettler/advanced-java/main/projects.json'
		)
			.then((response) => response.json())
			.then((data) => {
				const projects = [
					{
						label: 'Battleship',
						id: 'battleship',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/efxfOku.png',
							'https://i.imgur.com/TMnbTAa.png',
						],
					},
					{
						label: 'Image Guesser',
						id: 'image-guesser',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/WR79WBl.png',
							'https://i.imgur.com/3nDyure.png',
						],
					},
					{
						label: 'Who wants to be a Millionare',
						id: 'millionare',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: ['https://i.imgur.com/2P9Wh5M.png'],
					},
					{
						label: 'Hangman',
						id: 'hangman',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: ['https://i.imgur.com/iFzWmbv.png'],
					},
					{
						label: 'NIM 753',
						id: 'nim-753',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/ITSmz2z.png',
							'https://i.imgur.com/JC1o1C9.png',
						],
					},
					{
						label: 'Number Time',
						id: 'number-time',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/teQ2UPO.png',
							'https://i.imgur.com/e7V73EN.png',
						],
					},
					{
						label: 'Casino Slots',
						id: 'casino-slots',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/rEOoQgB.png',
							'https://i.imgur.com/fds6uLd.png',
							'https://i.imgur.com/C5MZjyD.png',
						],
					},
					{
						label: 'NFL Team Picker',
						id: 'nfl-team-picker',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: ['https://i.imgur.com/vdgwRwj.png'],
					},
					{
						label: 'Dice Bet',
						id: 'dice-bet',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: [
							'https://i.imgur.com/mOo4iPh.png',
							'https://i.imgur.com/KbNaddg.png',
						],
					},
					{
						label: 'Simple Clock',
						id: 'simple-clock',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: ['https://i.imgur.com/pJ2qqYd.png'],
					},
					{
						label: 'Pizza Picker',
						id: 'pizza-picker',
						repo: 'https://github.com/marwin1991/profile-technology-icons#-javascript',
						previews: ['https://i.imgur.com/e7V73EN.png'],
					},
				];

				setProjects(projects);

				let params = new URL(document.location).searchParams;

				let project = params.get('project');

				if (project)
					projects.forEach((p) => {
						if (p.id == project) setSelectedProject(p);
					});
			});
	}, []);

	const [SelectedProject, setSelectedProject] = useState(null);

	useEffect(() => {
		if (!Projects) return;

		if (SelectedProject)
			silentUpdate(
				'/projects/advanced-java?project=' + SelectedProject.id
			);
		else silentUpdate('/projects/advanced-java');
	}, [Projects, SelectedProject]);

	return Projects ? (
		SelectedProject ? (
			<Container style={{ paddingTop: '30px', paddingBottom: '30px' }}>
				<h1 className='h2'>{SelectedProject.label}</h1>

				<div className='row'>
					<div className='col-md-8'>
						<img
							src={SelectedProject.previews[0]}
							style={{ width: '100%' }}
						/>
					</div>
					<div className='col-md-4'>
						{SelectedProject.previews.map((image) => {
							return (
								<img src={image} style={{ width: '100%' }} />
							);
						})}
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
								<Card.Img
									src={project.previews[0]}
									style={{ cursor: 'pointer' }}
									onClick={() => setSelectedProject(project)}
								/>

								<Card.Title
									style={{
										paddingTop: '15px',
										fontWeight: '700',
									}}
								>
									{project.label}
								</Card.Title>

								<hr />

								<Button
									onClick={() => setSelectedProject(project)}
									style={{
										marginTop: '10px',
										width: '100%',
										fontWeight: '700',
									}}
								>
									View Project
								</Button>

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
		'Fetching Projects'
	);
};
