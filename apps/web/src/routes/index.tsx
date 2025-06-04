import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Login } from '../pages/Login';
import { UserStats } from '../pages/UserStats';
import { store } from '../store';

// 简单的认证检查函数
const isAuthenticated = () => {
  return !!store.getState().auth.token;
};

// 受保护的路由组件
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'stats',
        element: (
          <ProtectedRoute>
            <UserStats />
          </ProtectedRoute>
        ),
      },
    ],
  },
]); 