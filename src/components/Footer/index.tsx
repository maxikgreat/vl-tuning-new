import {VFC} from 'react';
import Image from 'next/image';

import Facebook from 'images/icons/facebook.svg';
import Instagram from 'images/icons/instagram.svg';

interface FooterProps {
  isVisible?: boolean;
}
export const Footer: VFC<FooterProps> = ({isVisible = true}) => isVisible ? (
	<footer
		className="flex flex-col items-center sm:absolute sm:left-1/2 sm:bottom-4 sm:transform sm:-translate-x-2/4 sm:m-0 mt-10 mb-3"
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
) : null;
