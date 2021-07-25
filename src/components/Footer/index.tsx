import {VFC} from 'react';
import Image from 'next/image';

import Facebook from 'images/icons/facebook.svg';
import Instagram from 'images/icons/instagram.svg';

interface FooterProps {
  isVisible?: boolean;
}
export const Footer: VFC<FooterProps> = ({isVisible = true}) => isVisible ? (
	<footer className="flex flex-col items-center absolute absolute-x-center bottom-4">
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
