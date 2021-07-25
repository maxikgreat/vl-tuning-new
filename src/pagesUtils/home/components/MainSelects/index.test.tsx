import {render, fireEvent} from '@testing-library/react';
import selectEvent from 'react-select-event';

import {MainSelects} from './index';

describe('Input component', () => {
	it('should work correctly', async () => {
		const {getByTestId} = render(<MainSelects />);

		const form = getByTestId('form');

		expect(form).toHaveFormValues({vendor: ''});

		const vendorInput = form.querySelector('input[name="vendor"]') as HTMLInputElement;

		await selectEvent.openMenu(vendorInput);
		await selectEvent.select(vendorInput, 'Audi');

		expect(form).toHaveFormValues({vendor: 'Audi', model: ''});

		const modelInput = form.querySelector('input[name="model"]') as HTMLInputElement;

		await selectEvent.openMenu(modelInput);
		await selectEvent.select(modelInput, 'A1');

		expect(form).toHaveFormValues({vendor: 'Audi', model: 'A1'});
	});
});
