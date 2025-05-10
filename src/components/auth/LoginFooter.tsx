
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const LoginFooter = () => {
  return (
    <div className="mt-4 text-center flex justify-center space-x-4">
      <Link to="/" className="inline-flex items-center text-sm text-racing-gray hover:text-racing-blue">
        <ArrowLeft size={16} className="mr-1" />
        Back to home
      </Link>
      <Link to="/" className="inline-flex items-center text-sm text-racing-gray hover:text-racing-blue">
        <Home size={16} className="mr-1" />
        Home
      </Link>
    </div>
  );
};

export default LoginFooter;
