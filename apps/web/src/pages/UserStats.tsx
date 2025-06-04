import { useAppSelector } from '../store/hooks';
import { useGetUserStatsQuery } from '../gql';

export const UserStats = () => {
  const userId:string = useAppSelector((state) => state.auth.token) as string;
  const { data, loading, error } = useGetUserStatsQuery({
    variables: { userId },
    skip: !userId,
  });

  return (
    <div className="min-h-[calc(100vh-200px)] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
            User Statistics
          </h1>

          {loading && (
            <div className="flex justify-center p-8">
              <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          )}

          {error && (
            <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 max-w-2xl mx-auto">
              Error: {error.message}
            </div>
          )}

          {data?.userStats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-blue-600 mr-2">📈</span>
                  <h3 className="text-gray-600 font-medium">Total Trading Volume</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {data.userStats.totalTradingVolume.toLocaleString()}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-blue-600 mr-2">💰</span>
                  <h3 className="text-gray-600 font-medium">Total Fees</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {data.userStats.totalFees.toLocaleString()}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <span className="text-blue-600 mr-2">🏦</span>
                  <h3 className="text-gray-600 font-medium">Total Commission</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {data.userStats.totalCommission.toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 