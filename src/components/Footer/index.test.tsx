import {render} from '@testing-library/react';

import {Footer} from './index';

describe('Footer component', () => {
	it('should render correctly and match snapshot', () => {
		const {asFragment, getByTestId} = render(<Footer />);

		expect(getByTestId('footer-test')).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});

	it('should return null', () => {
		const {queryByTestId} = render(<Footer isVisible={false} />);

		expect(queryByTestId('footer-test')).toBeFalsy();
	});

	it('should be with absolute classes', () => {
		const {getByTestId} = render(<Footer isAbsolute={true} />);

		expect(getByTestId('footer-test').classList.contains('absolute'))
			.toBe(true);
	});
});
