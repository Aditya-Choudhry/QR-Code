
// const Dashboard = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
      
//       {/* Sidebar */}
//       <div className="bg-gray-800 text-gray-100 w-64 flex flex-col justify-between">
//         {/* Sidebar content */}
//         <div className="p-4">
//           <h2 className="text-xl font-semibold uppercase">Dashboard</h2>
//           <ul className="mt-4">
//             <li className="mb-2"><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Home</a></li>
//             <li className="mb-2"><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Reports</a></li>
//             <li className="mb-2"><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Analytics</a></li>
//             <li className="mb-2"><a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Settings</a></li>
//           </ul>
//         </div>
//         {/* Sidebar footer */}
//         <div className="p-4">
//           <p className="text-gray-300">&copy; 2024 Your Company</p>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-10">
//         <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
//         <div className="mt-6">
//           {/* Example content */}
//           <div className="flex space-x-4">
//             <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
//               <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
//               <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Nullam eget felis eros.</p>
//             </div>
//             <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
//               <h2 className="text-lg font-semibold mb-4">Statistics</h2>
//               <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Nullam eget felis eros.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Dashboard;



import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate('/login');
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="bg-gray-800 text-gray-100 w-64 flex flex-col justify-between">
        {/* Sidebar content */}
        <div className="p-4">
          <h2 className="text-xl font-semibold uppercase">Dashboard</h2>
          <ul className="mt-4">
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Reports</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Analytics</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 block">Settings</a>
            </li>
          </ul>
        </div>
        {/* Sidebar footer */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
          >
            Logout
          </button>
          <p className="text-gray-300 mt-4">&copy; 2024 Your Company</p>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
        <div className="mt-6">
          {/* Example content */}
          <div className="flex space-x-4">
            <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Nullam eget felis eros.</p>
            </div>
            <div className="w-1/2 bg-white rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold mb-4">Statistics</h2>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec condimentum quam. Nullam eget felis eros.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
