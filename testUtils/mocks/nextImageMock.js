export const nextImageMock = () => jest.mock('next/image', () => ({
	__esModule: true,
	// eslint-disable-next-line react/display-name
	default: props => <img {...props} />,
}));
