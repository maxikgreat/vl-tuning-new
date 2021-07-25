import {VFC} from 'react';
import {useRouter} from 'next/router';
import {MainLayout} from 'layout/MainLayout';
import {Seo} from 'components/Seo';

const Categories: VFC = () => {
	const {query} = useRouter();
	return (
		<MainLayout>
			<Seo />
			<h1>categories for {JSON.stringify(query)}</h1>
		</MainLayout>

	);
};

export default Categories;
