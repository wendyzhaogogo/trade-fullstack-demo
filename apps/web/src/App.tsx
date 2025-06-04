import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { ApolloProvider } from './components/Providers/ApolloProvider';
import { ReduxProvider } from './components/Providers/ReduxProvider';
import './App.css'

function App() {
  return (
    <ReduxProvider>
      <ApolloProvider>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ReduxProvider>
  );
}

export default App;
