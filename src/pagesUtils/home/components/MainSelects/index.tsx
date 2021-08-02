import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import Select, {ActionMeta, OptionTypeBase} from 'react-select';
import {useRouter} from 'next/router';

import {Brand, CarItem, useCarItemsByBrandQuery} from 'apollo/types';
import {appRoutes} from 'src/routes';
import {Loader} from 'components/Loader';

const transformBrandOptions = (brands: string[]): OptionTypeBase[] =>
	brands.map(brand => ({label: brand, value: brand}));

const transformModelOptions = (carItems?: CarItemByBrand[]): OptionTypeBase[] => {
	if (!Array.isArray(carItems)) {
		return [];
	}

	return carItems.map(({id, model, yearStart, yearEnd}) => {
		const year = (yearEnd ? `${yearStart} - ${yearEnd}` : yearStart).toString();

		const label = `${model} (${year})`;
		const value: ModelWithYearState = {
			id,
			model,
			year,
		};

		return {label, value};
	});
};

type CarItemByBrand = Pick<CarItem, 'id' | 'model' | 'yearStart' | 'yearEnd'>;

interface OnChangeHandlerPayload<T, K> {
  value: T | null,
  setValue: Dispatch<SetStateAction<K | undefined>>,
  action: ActionMeta<T>,
}

interface MainSelectsProps {
  brands: Brand[]
}

interface ModelWithYearState {
	id: string;
	model: string;
	year: string;
}

export const MainSelects: FC<MainSelectsProps> = ({brands}) => {
	const {push} = useRouter();

	const [brand, setBrand] = useState<Brand | undefined>();
	const [modelWithYear, setModelWithYear] = useState<ModelWithYearState | undefined>();

	const {data, error, loading} = useCarItemsByBrandQuery({
		variables: {brand},
		skip: !brand,
	});

	useEffect(() => {
		if (!brand || !modelWithYear) {
			return;
		}

		const {model, year} = modelWithYear;

		push(appRoutes.categories(brand, model, year));
	}, [brand, modelWithYear, setBrand, setModelWithYear, push]);

	function onChangeHandler<T extends OptionTypeBase, K>({
		value,
		setValue,
		action,
	}: OnChangeHandlerPayload<T, K>) {
		if (!value) {
			setValue(undefined);
			return;
		}

		if (action.action === 'select-option') {
			setValue(value.value);
		}
	}

	const onChangeVendorHandler = (value: OptionTypeBase | null, action: ActionMeta<OptionTypeBase>) => {
		onChangeHandler({
			value,
			setValue: setBrand,
			action,
		});
	};

	const onChangeModelHandler = (value: OptionTypeBase | null, action: ActionMeta<OptionTypeBase>) => {
		onChangeHandler({
			value,
			setValue: setModelWithYear,
			action,
		});
	};

	const noOptionMessageHandler = () => 'Нет совпадений';

	return (
		<form data-testid="form"
			className="main-select absolute left-1/2 transform top-40p -translate-x-2/4 w-10/12 sm:w-3/5">
			<Select
				isClearable
				name="vendor"
				options={transformBrandOptions(brands)}
				onChange={onChangeVendorHandler}
				noOptionsMessage={noOptionMessageHandler}
				placeholder="Выбери марку авто"
				className="mb-3 text-xl sm:text-2xl md:text-3xl"
				classNamePrefix="main-select"
			/>
			{brand && (
				<>
					{loading && !error && (
						<Loader/>
					)}

					{!loading && !error && data && (
						<Select
							isClearable
							name="model"
							options={transformModelOptions(data.carItems)}
							onChange={onChangeModelHandler}
							noOptionsMessage={noOptionMessageHandler}
							placeholder="Выбери модель авто"
							className="text-xl sm:text-2xl md:text-3xl"
							classNamePrefix="main-select"
						/>
					)}

					{!loading && error && !data && (
						<h1>Error</h1>
					)}
				</>
			)}
		</form>
	);
};

