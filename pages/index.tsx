import {VFC} from 'react';
// Import {getDataFromTree} from '@apollo/client/react/ssr';

// import {withApollo} from 'src/apollo/withApollo';
import {Seo} from 'components/Seo';
import {Input} from 'components/Input';
import {MainLayout} from 'layout/MainLayout';
// Import {useProductsNamesQuery} from 'src/apollo/types';

const Home: VFC = () => (
	<MainLayout>
		<Seo />
		<Input />
	</MainLayout>
);

export default Home;

// Export default withApollo(Home, {getDataFromTree});
