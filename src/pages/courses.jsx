import { isMobile } from 'react-device-detect';

export const CoursesPage = () => {
	return (
		<div
			className='text-center'
			style={{
				paddingTop: '45px',
				paddingBottom: !isMobile ? '85px' : null,
			}}
		>
			<p style={{ fontSize: '28px' }}>Coding Tutorials</p>
		</div>
	);
};
