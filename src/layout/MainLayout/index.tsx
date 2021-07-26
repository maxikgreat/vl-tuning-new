import {FC} from 'react';

import {Header} from 'components/Header';
import {Footer} from 'components/Footer';

export const MainLayout: FC = ({children}) => (
	<>
		<Header />
		<main>
			{children}
		</main>
		<Footer />
	</>
);
