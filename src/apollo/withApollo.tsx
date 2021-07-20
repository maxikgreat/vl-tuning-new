import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import {useRouter} from 'next/router';
import nextWithApollo from 'next-with-apollo';

import {isServer} from 'src/utils';

export const withApollo = nextWithApollo(
	({initialState, headers}) => new ApolloClient({
		ssrMode: isServer(),
		link: new HttpLink({
			uri: process.env.API_URL,
		}),
		headers: {
			...(headers as Record<string, string>),
		},
		cache: new InMemoryCache().restore(initialState ?? {}),
	}), {
		// eslint-disable-next-line react/display-name
		render: ({Page, props}) => {
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const router = useRouter();

			return (
				<ApolloProvider client={props.apollo}>
					<Page {...props} {...router} />
				</ApolloProvider>
			);
		},
	},
);
