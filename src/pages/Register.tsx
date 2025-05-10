
import { useNavigate } from 'react-router-dom';
import RegisterForm from '@/components/auth/RegisterForm';
import RegisterHeader from '@/components/auth/RegisterHeader';
import RegisterFooter from '@/components/auth/RegisterFooter';
import AuthLayout from '@/components/auth/AuthLayout';
import { useAuth } from '@/contexts/auth';
import { useEffect } from 'react';

const Register = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleRegistrationSuccess = () => {
    navigate('/login');
  };

  return (
    <AuthLayout>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 p-8">
        <RegisterHeader />
        <RegisterForm onSuccess={handleRegistrationSuccess} />
      </div>
      
      <RegisterFooter />
    </AuthLayout>
  );
};

export default Register;
