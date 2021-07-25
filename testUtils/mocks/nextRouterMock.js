export const nextRouterMock = () => {
	jest.mock('next/router', () => ({
		useRouter: () => ({
			push: jest.fn,
			query: {myProp: 'myValue'},
		}),
	}));
};
