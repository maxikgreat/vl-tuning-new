import 'styles/globals.css';
import type {AppProps} from 'next/app';
import NextNprogress from 'nextjs-progressbar';

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<NextNprogress
				color="#7f81c0"
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				showOnShallow={true}
				options={{showSpinner: false}}
			/>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
