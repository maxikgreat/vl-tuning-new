const buildCategoriesRoute = (brand: string, model: string, year: string) => {
	const yearTransformed = year.replace(/\s/g, '');

	return `/${brand}/${model}/${yearTransformed}`;
};

export const appRoutes = {
	home: '/',
	categories: (brand: string, model: string, year: string) => buildCategoriesRoute(brand, model, year),
};
