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
			<p style={{ fontSize: '28px' }}>
				What is{' '}
				<a href='https://www.breakingpoint.software' target='_blank'>
					Breaking Point Software
				</a>
				?
			</p>
		</div>
	);
};
