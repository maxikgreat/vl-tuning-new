import {VFC} from 'react';
import {useRouter} from 'next/router';
import {MainLayout} from 'layout/MainLayout';
import {upperFirst} from 'lodash';
import {getDataFromTree} from '@apollo/client/react/ssr';

import {Seo} from 'components/Seo';
import {CategoryCard} from 'pagesUtils/categories/components/CategoryCard';
import {withApollo} from 'apollo/withApollo';
import {Brand, useCategoriesByCarItemQuery} from 'apollo/types';
import {getTranslatedCategories} from 'pagesUtils/categories/utils';

interface QueryParams {
  brand: Brand,
  model: string,
  year: string
}

const globalStyles = (
	<style jsx global>{`
		body {
			height: 100vh;
		}
		
		@media (max-width: 640px) {
	    body {
	      height: 100%;
	    }
	  }
	`}</style>
);

const Categories: VFC = () => {
	// @ts-expect-error
	const {query: {brand, model, year}}: {query: QueryParams} = useRouter();

	const [yearStart, yearEnd] = year.split('-').map(year => parseInt(year, 10));

	const {data} = useCategoriesByCarItemQuery({
		variables: {brand, model, yearStart, yearEnd},
	});

	const translatedCategories = getTranslatedCategories(data);

	return (
		<MainLayout isFooterAbsolute={false}>
			{globalStyles}
			<Seo />
			<div className="sm:absolute sm:left-1/2 top-1/3 transform-none sm:transform sm:-translate-x-2/4 w-10/12 md:w-3/5 mx-auto my-7 sm:m-0">
				<h1 className="mb-2 text-3xl">
					{upperFirst(brand)}<span className="text-indigo-700"> {upperFirst(model)} ({year})</span>
				</h1>
				<div className={`grid grid-cols-1 sm:grid-cols-${translatedCategories.length < 2 ? 1 : 2} gap-4`}>
					{translatedCategories.map(category => (
						<CategoryCard key={category} category={category} />
					))}
				</div>
			</div>
		</MainLayout>
	);
};

export default withApollo(Categories, {getDataFromTree});
