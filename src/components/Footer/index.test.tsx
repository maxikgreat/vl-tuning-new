import {render} from '@testing-library/react';

import {Footer} from './index';

describe('Footer component', () => {
	it('should render correctly and match snapshot', () => {
		const {asFragment, container} = render(<Footer />);

		expect(container.querySelector('footer')).toBeInTheDocument();
		expect(asFragment).toMatchSnapshot();
	});

	it('should return null', () => {
		const {container} = render(<Footer isVisible={false} />);

		expect(container.querySelector('footer')).toBeFalsy();
	});
});
