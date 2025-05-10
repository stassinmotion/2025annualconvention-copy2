
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RegisterFooter = () => {
  return (
    <>
      <div className="text-center text-sm text-racing-gray mt-4">
        Already have an account?{' '}
        <Link to="/login" className="text-racing-blue hover:text-racing-red">
          Sign in
        </Link>
      </div>
      <div className="mt-4 text-center">
        <Link to="/" className="inline-flex items-center text-sm text-racing-gray hover:text-racing-blue">
          <ArrowLeft size={16} className="mr-1" />
          Back to home
        </Link>
      </div>
    </>
  );
};

export default RegisterFooter;
