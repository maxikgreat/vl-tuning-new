export const appRoutes = {
	home: '/',
	categories: (vendor: string, model: string) =>
		`/${vendor.toLowerCase()}/${model.toLowerCase().replace(/\s/g, '-')}`,
};
