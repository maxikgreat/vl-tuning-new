import {render} from '@testing-library/react';

import {MainLayout} from './MainLayout';

describe('Main layout', () => {
	it('should render correctly with header and footer and children', () => {
		const {container, getByText} = render(
			<MainLayout>
				<h1>Hello</h1>
			</MainLayout>,
		);

	  expect(container.querySelector('header')).toBeInTheDocument();
	  expect(container.querySelector('footer')).toBeInTheDocument();

	  expect(getByText('Hello')).toBeTruthy();
	});
});
