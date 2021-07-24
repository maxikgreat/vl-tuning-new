module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/testUtils/setup.js'],
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/node_modules/',
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/testUtils/mocks/fileMock.js',
		'\\.(css|less)$': '<rootDir>/testUtils/mocks/styleMock.js',
		'^src/(.*)$': '<rootDir>/src/$1',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^pages/(.*)$': '<rootDir>/pages/$1',
		'^images/(.*)$': '<rootDir>/public/images/$1',
		'^styles/(.*)$': '<rootDir>/src/styles/$1',
		'^layout/(.*)$': '<rootDir>/src/layout/$1',
		'^apollo/(.*)$': '<rootDir>/src/apollo/$1',
	},
};
