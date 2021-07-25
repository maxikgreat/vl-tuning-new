import {VFC} from 'react';
// Import {getDataFromTree} from '@apollo/client/react/ssr';

// import {withApollo} from 'src/apollo/withApollo';
import {Seo} from 'components/Seo';
import {MainLayout} from 'layout/MainLayout';
import {MainSelects} from 'pagesUtils/home/components/MainSelects';

// Import {useProductsNamesQuery} from 'src/apollo/types';

const Home: VFC = () => (
	<MainLayout>
		<Seo />
		<MainSelects />
	</MainLayout>
);

export default Home;

// Export default withApollo(Home, {getDataFromTree});
