import {VFC} from 'react';
import Async from 'react-select/async';
import {ActionMeta, FocusEventHandler, OptionTypeBase} from 'react-select';

const data = ['Audi', 'BMW', 'Toyota', 'Mercedes-Benz', 'Hyindai', 'Tesla', 'Ford', 'Maserati'] as const;

interface SelectValue extends OptionTypeBase {
	label: typeof data[number];
	value: typeof data[number];
}

const filterData = (inputValue: string): SelectValue[] => data
	.filter(vendor => vendor.toLowerCase().includes(inputValue.toLowerCase()))
	.map(vendor => ({
		label: vendor,
		value: vendor,
	}));

const getVendor = (inputValue: string): Promise<SelectValue[]> => new Promise(resolve => {
	setTimeout(() => resolve(filterData(inputValue)), 1000);
});

const blurClassName = 'select-in-focus';

export const Input: VFC = () => {
	const onFocusHandler: FocusEventHandler = () => {
		document.body.classList.add(blurClassName);
	};

	const onBlurHandler: FocusEventHandler = () => {
		document.body.classList.remove(blurClassName);
	};

	const onChangeHandler = (value: SelectValue | null, _: ActionMeta<SelectValue>) => {
		if (!value) {
			return;
		}

		console.log(value);
	};

	const noOptionMessageHandler = ({inputValue}: {inputValue: string}) =>
		inputValue
			? 'Нет совпадений. Измените параметры поиска'
			: 'Нет совпадений';

	return (
		<div className="main-select absolute absolute-x-center top-40p w-10/12 sm:w-3/5">
			<Async
				isClearable
				loadOptions={getVendor}
				onChange={onChangeHandler}
				noOptionsMessage={noOptionMessageHandler}
				onFocus={onFocusHandler}
				onBlur={onBlurHandler}
				placeholder="Выбери марку авто"
				loadingMessage={() => 'Загрузка'}
				className="text-xl sm:text-2xl md:text-3xl"
				classNamePrefix="main-select"
			/>
		</div>
	);
};

