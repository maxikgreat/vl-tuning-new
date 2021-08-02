import {CategoriesByCarItemQuery, Category} from 'apollo/types';

export const getTranslatedCategories = (data?: CategoriesByCarItemQuery): string[] => {
	if (!data?.carItems) {
		return [];
	}

	return data.carItems.map(({category}) => {
		if (category === Category.DoorDeflector) {
			return 'Ветровики';
		}

		if (category === Category.DoorDeflectorChrome) {
			return 'Ветровики хром';
		}

		if (category === Category.HoodDeflector) {
			return 'Мухобойки';
		}

		if (category === Category.RearDeflector) {
			return 'Спойлер заднего стекла';
		}

		return '';
	});
};
