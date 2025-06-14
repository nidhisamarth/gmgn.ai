
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { X, Eye, EyeOff } from 'lucide-react';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast({
              title: "Login Failed",
              description: "Invalid email or password. Please try again.",
              variant: "destructive"
            });
          } else {
            toast({
              title: "Login Failed",
              description: error.message,
              variant: "destructive"
            });
          }
        } else {
          toast({
            title: "Success",
            description: "Logged in successfully!"
          });
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes('User already registered')) {
            toast({
              title: "Sign Up Failed",
              description: "An account with this email already exists. Please try logging in instead.",
              variant: "destructive"
            });
          } else {
            toast({
              title: "Sign Up Failed",
              description: error.message,
              variant: "destructive"
            });
          }
        } else {
          toast({
            title: "Success",
            description: "Account created successfully! Please check your email to confirm your account."
          });
          // Switch to login view after successful signup
          setIsLogin(true);
          setPassword('');
          setFullName('');
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4 relative">
      {/* Close button */}
      <button 
        className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
        onClick={() => navigate('/')}
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-sm space-y-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-2">
            {isLogin ? 'Log In' : 'Sign Up'}
          </h1>
          {isLogin ? (
            <p className="text-gray-400">
              Don't have an account yet?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(false);
                  setPassword('');
                  setFullName('');
                }}
                className="text-green-400 hover:text-green-300"
              >
                Sign Up
              </button>
            </p>
          ) : (
            <p className="text-gray-400">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => {
                  setIsLogin(true);
                  setPassword('');
                  setFullName('');
                }}
                className="text-green-400 hover:text-green-300"
              >
                Log In
              </button>
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div>
              <label htmlFor="fullName" className="block text-white text-base font-medium mb-3">
                Full Name
              </label>
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required={!isLogin}
                className="bg-gray-800 border-gray-600 text-white h-14 text-base rounded-xl placeholder:text-gray-500"
                placeholder="Enter Full Name"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-white text-base font-medium mb-3">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-600 text-white h-14 text-base rounded-xl placeholder:text-gray-500"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-white text-base font-medium mb-3">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-800 border-gray-600 text-white h-14 text-base rounded-xl placeholder:text-gray-500 pr-12"
                placeholder="Enter Password"
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {isLogin && (
              <div className="text-right mt-3">
                <button
                  type="button"
                  className="text-green-400 hover:text-green-300 text-sm"
                >
                  Forgot Password?
                </button>
              </div>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold h-14 text-base rounded-xl"
          >
            {loading ? 'Loading...' : (isLogin ? 'Log In' : 'Sign Up')}
          </Button>
        </form>

        <div className="text-center">
          <p className="text-gray-500 text-sm mb-8">OR</p>
          
          {/* Social login buttons */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </button>
              <span className="text-gray-400 text-sm">Telegram</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="8"/>
                  <circle cx="8" cy="10" r="2"/>
                  <circle cx="16" cy="10" r="2"/>
                </svg>
              </button>
              <span className="text-gray-400 text-sm">Phantom</span>
            </div>
            
            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 9h6v6H9z"/>
                </svg>
              </button>
              <span className="text-gray-400 text-sm">APP Scan</span>
            </div>
          </div>

          <button className="text-gray-400 text-base mb-8 flex items-center justify-center space-x-2">
            <span>Connect with extension wallet</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 4L16 12L8 20"/>
            </svg>
          </button>

          <div className="flex justify-center space-x-4 text-gray-500 text-sm">
            <button className="hover:text-gray-300">Terms of Service</button>
            <span>|</span>
            <button className="hover:text-gray-300">Privacy Policy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
