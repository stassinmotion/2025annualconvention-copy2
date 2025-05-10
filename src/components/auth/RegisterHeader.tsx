
import { Link } from 'react-router-dom';

const RegisterHeader = () => {
  return (
    <>
      <div className="flex justify-center mb-6">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-racing-red rounded-full flex items-center justify-center">
            <span className="text-white font-display font-bold">500</span>
          </div>
          <div className="font-display font-bold text-xl">
            <span className="text-racing-black">MAS</span>
            <span className="text-racing-red">2025</span>
          </div>
        </Link>
      </div>
      
      <h2 className="text-2xl font-display font-bold text-center mb-6">Create an account</h2>
    </>
  );
};

export default RegisterHeader;
