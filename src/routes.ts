export const appRoutes = {
	home: '/',
	categories: (brand: string, model: string) =>
		`/${brand.toLowerCase()}/${model.toLowerCase().replace(/\s/g, '-')}`,
};
