import {render} from '@testing-library/react';
import Home from 'pages/index';

describe('Home page', () => {
	it('should throw no error', () => {
		expect(render(<Home />)).toBeTruthy();
	});
});

