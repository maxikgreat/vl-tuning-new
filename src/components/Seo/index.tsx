import {VFC} from 'react';
import Head from 'next/head';

import {getDescription, getTitle} from './utils';

interface SeoProps {
  title?: string;
  description?: string;
}

export const Seo: VFC<SeoProps> = ({title, description}) => (
	<Head>
		<title>{getTitle(title)}</title>
		<meta name="description" content={getDescription(description)} />
		<link rel="icon" href="/favicon.ico" />
	</Head>
);
