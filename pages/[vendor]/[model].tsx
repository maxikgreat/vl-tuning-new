import {VFC} from 'react';
import {useRouter} from 'next/router';
import {MainLayout} from 'layout/MainLayout';
import {upperFirst} from 'lodash';

import {Seo} from 'components/Seo';
import {CategoryCard} from 'pagesUtils/model/components/CategoryCard';

const categories = ['Ветровики', 'Ветровики хром', 'Спойлер заднего стелка', 'Мухобойки'];

interface QueryParams {
	vendor: string,
	model: string
}

const Categories: VFC = () => {
	// @ts-expect-error
	const {query: {vendor, model}}: {query: QueryParams} = useRouter();

	return (
		<MainLayout>
			<Seo />
			<div className="sm:absolute sm:left-1/2 top-40p transform-none sm:transform sm:-translate-x-2/4 w-10/12 md:w-3/5 mx-auto my-7 sm:m-0">
				<h1 className="mb-2 text-2xl">{upperFirst(vendor)} - {upperFirst(model)}</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{categories.map(category => (
						<CategoryCard key={category} category={category} />
					))}
				</div>
			</div>
		</MainLayout>

	);
};

export default Categories;
