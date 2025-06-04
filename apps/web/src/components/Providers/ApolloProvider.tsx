import { ApolloClient, InMemoryCache, createHttpLink, ApolloProvider as BaseApolloProvider } from '@apollo/client';
import type { ReactNode } from 'react';

// Create the Apollo Client instance
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
  credentials: 'include',
});

const apolloClient = new ApolloClient({
  link: httpLink,
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