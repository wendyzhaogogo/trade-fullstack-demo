import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { setToken } from '../store/slices/authSlice';

export const Login = () => {
  const [userId, setUserId] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId.trim()) {
      setError('Please enter a user ID');
      return;
    }

    // 模拟登录成功
    dispatch(setToken(userId));
    navigate('/stats');
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-xl w-full mx-auto px-4">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
            Welcome Back
          </h1>

          <div className="mb-6 text-center text-gray-600">
            <p>Demo user IDs: 1, 2</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                  setError(null);
                }}
                placeholder="Enter your user ID"
                className={`w-full px-4 py-3 rounded-lg border ${
                  error ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              />
              {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}; 