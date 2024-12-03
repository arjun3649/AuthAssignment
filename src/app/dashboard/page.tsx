import React from 'react';

const Page = () => {
  const metrics = [
    { title: 'Total Revenue', value: '$45,231', change: '+20.1%', icon: '💰' },
    { title: 'Total Customers', value: '2,350', change: '+180.1%', icon: '👥' },
    { title: 'Total Sales', value: '12,234', change: '+19%', icon: '📊' },
  ];

  const transactions = [
    { id: '#3210', customer: 'John Doe', amount: '$250.00', status: 'Completed' },
    { id: '#3209', customer: 'Jane Smith', amount: '$175.50', status: 'Pending' },
    { id: '#3208', customer: 'Mike Johnson', amount: '$300.75', status: 'Completed' },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white shadow rounded-lg p-4 border">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{metric.title}</p>
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-sm text-green-500">{metric.change}</p>
              </div>
              <span className="text-3xl">{metric.icon}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded-lg p-4 border">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-2">Transaction ID</th>
                <th className="text-left p-2">Customer</th>
                <th className="text-left p-2">Amount</th>
                <th className="text-left p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{transaction.id}</td>
                  <td className="p-2">{transaction.customer}</td>
                  <td className="p-2">{transaction.amount}</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-xs ${
                        transaction.status === 'Completed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
