import {VFC} from 'react';
import {getDataFromTree} from '@apollo/client/react/ssr';
import {withApollo} from 'src/apollo/withApollo';

import {Seo} from 'components/Seo';
import {MainLayout} from 'layout/MainLayout';
import {MainSelects} from 'pagesUtils/home/components/MainSelects';

import {Brand} from 'apollo/types';

const globalStyles = (
	<style jsx global>{`
		body {
			height: 100vh;
		}
	`}</style>
);

const Home: VFC = () => {
	const brands = Object.values(Brand);

	return (
		<MainLayout>
			{globalStyles}
			<Seo/>

			{brands && brands?.length !== 0 && (
				<MainSelects brands={brands}/>
			)}

			{brands?.length === 0 && (
				<h2>Empty array of brands here</h2>
			)}
		</MainLayout>
	);
};

export default withApollo(Home, {getDataFromTree});
