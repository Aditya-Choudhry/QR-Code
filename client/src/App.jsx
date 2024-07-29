
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Login from './Login';
// import Signup from './Signup';
// import Home from './Home';
// import Dashboard from './Dashboard';
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<PublicRoute component={Login} />} />
//         <Route path='/signup' element={<PublicRoute component={Signup} />} />
//         <Route
//           path='/dashboard'
//           element={
//             <PrivateRoute component={Dashboard} />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// App.jsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Dashboard from './Dashboard';
import useIsAuth from './useIsAuth'; // Import your custom hook

const App = () => {
  const isAuthenticated = useIsAuth();

  // Handle loading state (optional)
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or any loading spinner
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/login'
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" /> // Redirect to dashboard if already authenticated
              : <Login />
          }
        />
        <Route
          path='/signup'
          element={
            isAuthenticated
              ? <Navigate to="/dashboard" /> // Redirect to dashboard if already authenticated
              : <Signup />
          }
        />
        <Route
          path='/dashboard'
          element={
            isAuthenticated
              ? <Dashboard />
              : <Navigate to="/login" /> // Redirect to login if not authenticated
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
