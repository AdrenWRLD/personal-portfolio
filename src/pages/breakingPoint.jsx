import { isMobile } from 'react-device-detect';

export const BPSoftwarePage = () => {
	return (
		<div
			className='text-center'
			style={{
				paddingTop: '45px',
				paddingBottom: !isMobile ? '85px' : null,
			}}
		>
			<img
				src='https://breakingpoint.software/logo.png'
				style={{ height: '165px', borderRadius: '18px' }}
			/>

			<p style={{ fontSize: '28px', paddingTop: '15px' }}>
				What is{' '}
				<a href='https://www.breakingpoint.software' target='_blank'>
					Breaking Point Software
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
				Breaking Point Software is a technology consulting company
				created too manage local businesses.
			</p>
		</div>
	);
};
