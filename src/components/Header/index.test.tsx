import {render} from '@testing-library/react';

import {Header} from './index';

describe('Header component', () => {
	it('should render correctly and match snapshot', () => {
		const {asFragment, container} = render(<Header />);

		expect(container.querySelector('header')).toBeInTheDocument();
		expect(asFragment).toMatchSnapshot();
	});
});
