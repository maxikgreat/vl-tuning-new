import {FC} from 'react';

import {Header} from 'components/Header';
import {Footer} from 'components/Footer';

interface MainLayoutProps {
	globalStyles?: string;
	isFooterAbsolute?: boolean;
}

export const MainLayout: FC<MainLayoutProps> = ({children, isFooterAbsolute}) => (
	<>
		<Header />
		<main>
			{children}
		</main>
		<Footer isAbsolute={isFooterAbsolute} />
	</>
);
