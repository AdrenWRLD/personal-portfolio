const Projects = [
	{
		name: 'NFL Team Picker',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/NFLTeamPicker.java',
	},
	{
		name: 'NIM 753',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/NIM753.java',
	},
	{
		name: 'Dice Bet',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/DiceBet.java',
	},
	{
		name: 'Hangman Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/Hangman.java',
	},
	{
		name: 'Millionare Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/Millionare.java',
	},
	{
		name: 'Pizza Picker',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/PizzaPicker.java',
	},
	{
		name: 'Yes Or No Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/YesOrNo.java',
	},
	{
		name: 'Number Time Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/NumberTime.java',
	},
	{
		name: 'Deal or No Deal Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/DealOrNoDeal.java',
	},
	{
		name: 'Connect Four',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/ConnectFour.java',
	},
	{
		name: 'Image Guesser',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/ImageGuesser.java',
	},
	{
		name: 'Battle Ship Game',
		src: 'https://github.com/IamAdren/advanced-java/blob/main/BattleshipGame.java',
	},
	{
		name: 'Survivor Game',
        src: 'https://github.com/IamAdren/advanced-java/blob/main/SurvivorGame.java'
	},
];

export const AdvancedJavaPage = () => {
	return (
		<div style={{ padding: '30px' }}>
			<h1 className='h2'>Advanced Java Projects</h1>

			<p>Projects</p>

			<ul>
				{Projects.map((project) => (
					<li>
                        <a href={project.src} target="_blank">{project.name}</a>
                    </li>
				))}
			</ul>
		</div>
	);
};
