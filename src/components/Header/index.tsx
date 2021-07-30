import {VFC} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from 'images/icons/logo.svg';
import {LocationInfo} from 'components/Header/LocationInfo';

export const Header: VFC = () => (
	<header className="flex justify-between items-center p-4">
		<LocationInfo isMobile={false} />
		<Link href="/">
			<div className="w-24 sm:w-28 md:w-32 lg:w-36">
				<Image src={Logo} alt="company logo" placeholder="empty" />
			</div>
		</Link>
		<div className="text-base sm:text-xl">
			<h3 className="mb-0 sm:mb-3"><a href="tel:+380972713473" rel="nofollow noopener noreferrer">+380 97 271 34 73</a></h3>
			<h3 className="mb-3 sm:mb-0"><a href="mailto:vltuning@gmail.com" rel="nofollow noopener noreferrer">vltuning@gmail.com</a></h3>
			<LocationInfo isMobile={true} />
		</div>
	</header>
);
