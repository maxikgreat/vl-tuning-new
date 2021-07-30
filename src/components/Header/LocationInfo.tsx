import {VFC} from 'react';

interface LocationInfoProps {
  isMobile: boolean;
}

export const LocationInfo: VFC<LocationInfoProps> = ({isMobile}) => (
	<div className={`${isMobile ? 'block sm:hidden' : 'hidden sm:block'}`}>
		<h3 className={`text-base sm:text-xl ${isMobile ? 'mb-0' : 'mb-3'}`}>Украина | Харьков</h3>
		{/* eslint-disable-next-line react/no-unescaped-entities */}
		<h3 className="text-base sm:text-xl">Торговый центр "Лоск"</h3>
	</div>
);
