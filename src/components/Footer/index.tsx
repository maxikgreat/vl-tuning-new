import {VFC} from 'react';
import Image from 'next/image';

import Facebook from 'images/icons/facebook.svg';
import Instagram from 'images/icons/instagram.svg';

interface FooterProps {
  isVisible?: boolean;
  isAbsolute?: boolean;
}

const absoluteClasses = 'absolute left-1/2 bottom-4 transform -translate-x-2/4';
const marginClasses = 'sm:m-0 mt-10 mb-3';

const getClasses = (isAbsolute?: boolean): string => {
	if (isAbsolute) {
		return absoluteClasses;
	}

	const transformedAbsoluteClasses = absoluteClasses
		.split(' ')
		.map(className => `sm:${className}`)
		.join(' ');

	return `${transformedAbsoluteClasses} ${marginClasses}`;
};

export const Footer: VFC<FooterProps> = ({isVisible = true, isAbsolute = true}) => {
	if (!isVisible) {
		return null;
	}

	return (
		<footer
			data-testid="footer-test"
			className={`flex flex-col items-center ${getClasses(isAbsolute)}`}
		>
			<div>
				<a href="https://facebook.com" target="_blank" rel="nofollow noopener noreferrer">
					<Image src={Facebook} alt="facebook icon" placeholder="empty" />
				</a>
				<a href="https://instagram.com" target="_blank" rel="nofollow noopener noreferrer">
					<Image src={Instagram} alt="instgram icon" placeholder="empty" />
				</a>
			</div>
			<span className="text-center">© VL-Tuning | Все права защищены | 2021</span>
		</footer>
	);
};
