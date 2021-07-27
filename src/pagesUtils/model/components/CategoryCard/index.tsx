import {VFC} from 'react';
import Image from 'next/image';

import Deflectors from 'public/images/deflectors.png';
import DeflectorsChrome from 'public/images/deflectors-chrome.png';
import SpoilerBack from 'public/images/spoiler-back.png';
import FlyDamage from 'public/images/fly-damage.png';

interface CategoryCardProp {
  category: string
}

const applyImage = (category: string) => {
	if (category === 'Ветровики') {
		return Deflectors;
	}

	if (category === 'Ветровики хром') {
		return DeflectorsChrome;
	}

	if (category === 'Спойлер заднего стелка') {
		return SpoilerBack;
	}

	return FlyDamage;
};

export const CategoryCard: VFC<CategoryCardProp> = ({category}) => (
	<div className="flex h-32 bg-white bg-opacity-60 rounded overflow-hidden">
		<div className="flex flex-1 justify-center items-center p-2">
			<h3 className="mb-0 sm:mb-5 text-xl text-center">{category}</h3>
		</div>
		<div className="flex-1 relative">
			<Image src={applyImage(category)} layout="fill" objectFit="cover" />
		</div>
	</div>
);
