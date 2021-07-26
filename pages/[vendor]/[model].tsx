import {VFC} from 'react';
import {useRouter} from 'next/router';
import {MainLayout} from 'layout/MainLayout';
import {Seo} from 'components/Seo';
import {CategoryCard} from 'pagesUtils/model/components/CategoryCard';

const categories = ['Ветровики', 'Ветровики хром', 'Спойлер заднего стелка', 'Мухобойки'];

const Categories: VFC = () => {
	const {query} = useRouter();
	return (
		<MainLayout>
			<Seo />
			<div className="absolute absolute-x-center top-40p w-10/12 sm:w-3/5 grid grid-cols-2 gap-4">
				{categories.map(category => (
					<CategoryCard key={category} category={category} />
				))}
			</div>
		</MainLayout>

	);
};

export default Categories;
