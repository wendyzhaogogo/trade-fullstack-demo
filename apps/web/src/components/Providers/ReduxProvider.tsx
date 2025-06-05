import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

interface ReduxProviderProps {
  children: ReactNode;
}

export const ReduxProvider = ({ children }: ReduxProviderProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}; 