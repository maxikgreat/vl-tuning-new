import {VFC} from 'react';
import Image from 'next/image';

import Logo from 'images/logo.svg';

export const Header: VFC = () => (
	<header className="flex justify-between items-center p-4">
		<div>
			<h3 className="mb-3">Украина | Харьков</h3>
			{/* eslint-disable-next-line react/no-unescaped-entities */}
			<h3>Торговый центр "Лоск"</h3>
		</div>
		<Image src={Logo} alt="company logo" />
		<div>
			<h3 className="mb-3"><a href="tel:+380972713473">+380 97 271 34 73</a></h3>
			<h3><a href="mailto:vltuning@gmail.com">vltuning@gmail.com</a></h3>
		</div>
	</header>
);
