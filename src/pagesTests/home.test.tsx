import {render} from '@testing-library/react';
// @ts-ignore
import Home from 'pages/index';

describe('Home page', () => {
	it('should throw no error', () => {
		expect(render(<Home />)).toBeTruthy();
	});
});

