import {VFC} from 'react';
// Import {getDataFromTree} from '@apollo/client/react/ssr';

// import {withApollo} from 'src/apollo/withApollo';
import {Seo} from 'components/Seo';
import {MainLayout} from 'layout/MainLayout';
import {MainSelects} from 'pagesUtils/home/components/MainSelects';

// Import {useProductsNamesQuery} from 'src/apollo/types';

const globalStyles = (
	<style jsx global>{`
		body {
			height: 100vh;
		}
	`}</style>
);

const Home: VFC = () => (
	<MainLayout>
		{globalStyles}
		<Seo />
		<MainSelects />
	</MainLayout>
);

export default Home;

// Export default withApollo(Home, {getDataFromTree});
