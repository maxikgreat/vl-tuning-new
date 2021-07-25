import {fireEvent, render} from '@testing-library/react';
import selectEvent from 'react-select-event';
import {Input} from './index';

describe('Input component', () => {
	it('should work correctly', async () => {
		const {getByTestId} = render(<Input />);

		expect(getByTestId('form')).toHaveFormValues({vendor: ''});

		const input = getByTestId('form').querySelector('input') as HTMLInputElement;

		await selectEvent.openMenu(input);
		await fireEvent.change(input, {target: {value: 'Au'}});
		await selectEvent.select(input, ['Audi']);

		expect(getByTestId('form')).toHaveFormValues({vendor: 'Audi'});
	});
});
