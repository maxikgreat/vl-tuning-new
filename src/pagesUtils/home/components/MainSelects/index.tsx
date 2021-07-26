import {Dispatch, SetStateAction, useEffect, useState, VFC} from 'react';
import Select, {ActionMeta, OptionTypeBase} from 'react-select';
import {useRouter} from 'next/router';

import {appRoutes} from 'src/routes';

const vendors = ['Audi', 'BMW', 'Tesla'] as const;

type Models = Record<typeof vendors[number], string[]>

const models: Models = {
	Audi: ['A1', 'A2', 'A3'],
	BMW: ['Z4', '3', '5'],
	Tesla: ['Model X'],
};

interface VendorOption extends OptionTypeBase {
  label: typeof vendors[number];
  value: typeof vendors[number];
}

interface ModelOption extends OptionTypeBase {
  label: string;
  value: string;
}

const getVendorOptions = (): VendorOption[] =>
	vendors.map(vendor => ({label: vendor, value: vendor}));

const getModelsOptions = (vendor: typeof vendors[number]): ModelOption[] =>
	models[vendor].map(model => ({label: model, value: model}));

export const MainSelects: VFC = () => {
	const {push} = useRouter();

	const [vendor, setVendor] = useState<string | undefined>();
	const [model, setModel] = useState<string | undefined>();

	useEffect(() => {
		if (!vendor || !model) {
			return;
		}

		push(appRoutes.categories(vendor, model));
	}, [vendor, model, setVendor, setModel, push]);

	function onChangeHandler<T extends OptionTypeBase>(
		value: T | null,
		setValue: Dispatch<SetStateAction<string | undefined>>,
		action: ActionMeta<T>,
	) {
		if (!value) {
			setValue(undefined);
			return;
		}

		if (action.action === 'select-option') {
			setValue(value.value);
		}
	}

	const onChangeVendorHandler = (value: VendorOption | null, action: ActionMeta<VendorOption>) => {
		onChangeHandler(value, setVendor, action);
	};

	const onChangeModelHandler = (value: ModelOption | null, action: ActionMeta<ModelOption>) => {
		onChangeHandler(value, setModel, action);
	};

	const noOptionMessageHandler = () => 'Нет совпадений';

	return (
		<form data-testid="form" className="main-select absolute absolute-x-center top-40p w-10/12 sm:w-3/5">
			<Select
				isClearable
				name="vendor"
				options={getVendorOptions()}
				onChange={onChangeVendorHandler}
				noOptionsMessage={noOptionMessageHandler}
				placeholder="Выбери марку авто"
				className="mb-3 text-xl sm:text-2xl md:text-3xl"
				classNamePrefix="main-select"
			/>
			{vendor && (
				<Select
					isClearable
					name="model"
					options={getModelsOptions(vendor as typeof vendors[number])}
					onChange={onChangeModelHandler}
					noOptionsMessage={noOptionMessageHandler}
					placeholder="Выбери модель авто"
					className="text-xl sm:text-2xl md:text-3xl"
					classNamePrefix="main-select"
				/>
			)}
		</form>
	);
};

