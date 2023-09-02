import { isMobile } from 'react-device-detect';

export const AdrenWorldPage = () => {
	return (
		<div
			className='text-center'
			style={{
				paddingTop: '45px',
				paddingBottom: !isMobile ? '85px' : null,
			}}
		>
			<p style={{ fontSize: '28px' }}>
				What is{' '}
				<a href='https://www.adren.world' target='_blank'>
					Adren World
				</a>
				?
			</p>

			<p
				style={{
					fontSize: '24px',
					width: isMobile ? '80%' : '45vw',
					margin: 'auto',
				}}
			>
				Adren World is a management company that creates Software as a
				Service (SaaS) websites for the GTA-5 Multipleplayer
				Modification{' '}
				<a href='https://fivem.net/' target='_blank'>
					FiveM
				</a>
				. Adren World manages 8+ websites, with a combined user count of
				85,000+ users.
			</p>

			<p
				style={{
					fontSize: '28px',
					paddingTop: '25px',
					width: isMobile ? '80%' : '45vw',
					margin: 'auto',
				}}
			>
				Our Brands
			</p>

			<div
				style={{
					fontSize: '24px',
					width: isMobile ? '80%' : '45vw',
					margin: 'auto',
				}}
			>
				<p>
					<a target='_blank' href='https://www.adrencad.com'>
						AdrenCAD
					</a>{' '}
					- A Simulated Police Computer Aided Dispatch System.
				</p>

				<p>
					<a target='_blank' href='https://www.gbans.xyz'>
						Global Bans
					</a>{' '}
					- FiveM protection management service, and Admin Tools.
				</p>

				<p>
					<a target='_blank' href='https://www.fivem.design'>
						Fivem Designs
					</a>{' '}
					- A FiveM Website Creater, similar to Wix or Squarespace.
				</p>

				<p>
					<a target='_blank' href='https://www.fivemshare.com'>
						Fivem Share
					</a>{' '}
					- A custom made forums, to share FiveM plugins.
				</p>

				<p>
					<a href='#'>FM Monitor</a> - Free and open-source tool too
					manage FiveM Servers.
				</p>

				{/* <p>
					<a target='_blank' href='https://www.adrensbot.com'>
						Adrens Bot
					</a>{' '}
					- A Multi Purpose Discord Bot
				</p> */}
			</div>
		</div>
	);
};
