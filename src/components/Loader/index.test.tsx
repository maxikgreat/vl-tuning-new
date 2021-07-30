import {render} from '@testing-library/react';

import {Loader} from './index';

describe('Loader component', () => {
	it('should render and match snapshot', () => {
		const {container, asFragment} = render(<Loader />);

		expect(container.querySelector('.lds-roller')).toBeInTheDocument();
		expect(asFragment()).toMatchSnapshot();
	});
});
