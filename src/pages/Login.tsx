
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/auth';
import AuthLayout from '@/components/auth/AuthLayout';
import LoginHeader from '@/components/auth/LoginHeader';
import LoginForm from '@/components/auth/LoginForm';
import LoginFooter from '@/components/auth/LoginFooter';
import { checkAdminStatus } from '@/services/admin';

const Login = () => {
  const { isAdmin, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || (isAdmin ? '/admin' : '/');

  useEffect(() => {
    checkAdminStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      console.log("User is authenticated, redirecting to:", from);
      navigate(from);
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <AuthLayout>
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-100 p-8">
        <LoginHeader />
        <LoginForm />
      </div>
      
      <LoginFooter />
    </AuthLayout>
  );
};

export default Login;
