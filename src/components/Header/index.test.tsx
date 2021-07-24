import {render} from '@testing-library/react';

import {Header} from './index';

describe('Header component', () => {
	it('should render correctly and match snapshot', () => {
		const {asFragment, baseElement} = render(<Header />);

		expect(baseElement).toBeInTheDocument();
		expect(asFragment).toMatchSnapshot();
	});
});
