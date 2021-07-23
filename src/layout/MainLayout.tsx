import {FC} from 'react';

import {Header} from 'components/Header';

export const MainLayout: FC = ({children}) => (
	<>
		<Header />
		<main>
			{children}
		</main>
	</>
);
