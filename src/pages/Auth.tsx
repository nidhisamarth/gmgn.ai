import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { X, Eye, EyeOff } from "lucide-react";
import { MessageCircle } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes("Invalid login credentials")) {
            toast({
              title: "Login Failed",
              description: "Invalid email or password. Please try again.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Login Failed",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Success",
            description: "Logged in successfully!",
          });
          navigate("/dashboard");
        }
      } else {
        const { error } = await signUp(email, password, fullName);
        if (error) {
          if (error.message.includes("User already registered")) {
            toast({
              title: "Sign Up Failed",
              description:
                "An account with this email already exists. Please try logging in instead.",
              variant: "destructive",
            });
          } else {
            toast({
              title: "Sign Up Failed",
              description: error.message,
              variant: "destructive",
            });
          }
        } else {
          toast({
            title: "Success",
            description:
              "Account created successfully! Please check your email to confirm your account.",
          });
          // Switch to login view after successful signup
          setIsLogin(true);
          setPassword("");
          setFullName("");
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black/80 backdrop-blur-sm text-white flex items-center justify-center p-4 relative">
      {/* Background overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative bg-gray-900/95 backdrop-blur-md rounded-2xl p-8 w-full max-w-md border border-gray-700/50">
        {/* Close button */}
        <button
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
          onClick={() => (user ? navigate("/dashboard") : navigate("/"))}
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-2">
              {isLogin ? "Log In" : "Sign Up"}
            </h1>
            {isLogin ? (
              <p className="text-gray-400 text-sm">
                Don't have an account yet?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(false);
                    setPassword("");
                    setFullName("");
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Sign Up
                </button>
              </p>
            ) : (
              <p className="text-gray-400 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(true);
                    setPassword("");
                    setFullName("");
                  }}
                  className="text-blue-400 hover:text-blue-300 underline"
                >
                  Log In
                </button>
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={!isLogin}
                  className="bg-gray-800/50 border-gray-600 text-white h-12 rounded-lg placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Full Name"
                />
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800/50 border-gray-600 text-white h-12 rounded-lg placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-800/50 border-gray-600 text-white h-12 rounded-lg placeholder:text-gray-500 pr-12 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Password"
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {isLogin && (
                <div className="text-right mt-2">
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300 text-sm"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold h-12 rounded-lg"
            >
              {loading ? "Loading..." : isLogin ? "Log In" : "Sign Up"}
            </Button>
          </form>

          {/* Divider */}
          <div className="text-center">
            <p className="text-gray-500 text-sm">OR</p>
          </div>

          {/* Social login buttons */}
          <div className="flex justify-center space-x-6">
            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <MessageCircle size={20} className="text-white" />
              </button>
              <span className="text-gray-400 text-xs">Telegram</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="9" cy="10" r="1.5" />
                  <circle cx="15" cy="10" r="1.5" />
                  <path d="M9 14s1 2 3 2 3-2 3-2" />
                </svg>
              </button>
              <span className="text-gray-400 text-xs">Phantom</span>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <button className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <rect x="8" y="8" width="8" height="8" rx="1" />
                </svg>
              </button>
              <span className="text-gray-400 text-xs">APP Scan</span>
            </div>
          </div>

          {/* Connect with extension wallet */}
          <div className="text-center">
            <button className="text-gray-400 text-sm hover:text-gray-300 flex items-center justify-center space-x-2 mx-auto">
              <span>Connect with extension wallet</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 4L16 12L8 20" />
              </svg>
            </button>
          </div>

          {/* Footer links */}
          <div className="flex justify-center space-x-4 text-gray-500 text-xs pt-4">
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
