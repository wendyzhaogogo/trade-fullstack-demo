import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider as BaseApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { store } from '../../store';
import { clearToken } from '../../store/slices/authSlice';
import type { ReactNode } from 'react';

// Create the Apollo Client instance
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
});

const authLink = setContext((_, { headers }) => {
  const token = store.getState().auth.token;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

interface NetworkError extends Error {
  statusCode?: number;
}

// Handle authentication errors
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (networkError) {
    const statusCode = (networkError as NetworkError).statusCode;
    if (statusCode === 401) {
      // Clear token and redirect to login
      store.dispatch(clearToken());
      window.location.href = '/';
    }
  }

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === 'UNAUTHENTICATED') {
        // Clear token and redirect to login
        store.dispatch(clearToken());
        window.location.href = '/';
      }
    }
  }
});

const apolloClient = new ApolloClient({
  link: errorLink.concat(authLink).concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
});

interface ApolloProviderProps {
  children: ReactNode;
}

export const ApolloProvider = ({ children }: ApolloProviderProps) => {
  return (
    <BaseApolloProvider client={apolloClient}>
      {children}
    </BaseApolloProvider>
  );
}; 