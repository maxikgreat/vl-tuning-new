import {render} from '@testing-library/react';

import {Seo} from './index';
import {getTitle, getDescription, titleSuffix, defaultTitle, defaultDescription} from './utils';

describe('Seo', () => {
	describe('utils', () => {
		it('should work correctly', () => {
			expect(getTitle('Awesome Title')).toBe('Awesome Title' + titleSuffix);
			expect(getTitle()).toBe(defaultTitle + titleSuffix);

			expect(getDescription('Some awesome description')).toBe('Some awesome description');
			expect(getDescription()).toBe(defaultDescription);
		});
	});

	describe('component', () => {
		it('should render correctly', () => {
			expect(render(<Seo />).baseElement).toBeInTheDocument();
		});
	});
});

