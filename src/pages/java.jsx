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

export const AdvancedJavaPage = () => {
	const [Projects, setProjects] = useState([]);

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/jacobschnettler/advanced-java/main/projects.json'
		)
			.then((response) => response.json())
			.then((data) => setProjects(data));
	}, []);

	return (
		<Container style={{ paddingTop: '30px' }}>
			<h1 className='h2'>Advanced Java Projects</h1>

			<p>Projects</p>

			<div className='row'>
				{Projects.map((project) => (
					<div
						className='col-md-4'
						style={{ cursor: 'pointer', marginBottom: '20px' }}
					>
						<Card body>
							<Card.Img src={project.previews[0]} />

							<Card.Title style={{ paddingTop: '15px' }}>
								{project.label}
							</Card.Title>

							<hr />

							<Button
								style={{ marginTop: '10px', width: '100%' }}
							>
								View Project
							</Button>
						</Card>
					</div>
				))}
			</div>
		</Container>
	);
};
