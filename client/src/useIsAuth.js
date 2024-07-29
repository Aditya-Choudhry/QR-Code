// useIsAuth.js
import { useState, useEffect } from 'react';

const useIsAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    // Example check for token validity (you can add more checks as needed)
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
};

export default useIsAuth;
