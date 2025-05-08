import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Breadcrumb from '../../components/layout/Breadcrumb';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    emailPhone: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      if (formData.emailPhone && formData.password) {
        // Success toast would appear here
      } else {
        setError('Please fill all required fields');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Header */}
      

      {/* Breadcrumb */}
      <Breadcrumb/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg w-full max-w-md mx-auto overflow-hidden">
          <div className="p-8">
            {/* <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Access Your BYTO Account
            </h1> */}

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <div className="text-orange-500 border-b-2 border-orange-500 px-4 py-2 font-medium">
                Login
              </div>
              <Link
                to="/signup"
                className="text-gray-700 px-4 py-2 font-medium"
              >
                Sign Up
              </Link>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="emailPhone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email / Phone
                </label>
                <input
                  type="text"
                  id="emailPhone"
                  name="emailPhone"
                  value={formData.emailPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter email or phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-500 hover:text-orange-500"
                  >
                    {showPassword ? (
                      <EyeOffIcon size={20} />
                    ) : (
                      <EyeIcon size={20} />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-orange-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {error && <div className="text-red-500 text-sm">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-400 ${loading ? 'opacity-70 cursor-not-allowed' : 'transform hover:scale-[1.03] active:scale-95'}`}
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full flex justify-center items-center space-x-2 border border-orange-500 text-orange-500 py-2 rounded-lg hover:bg-orange-50"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Sign in with Google</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-orange-500 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Secure Payments & Data</span>
              </div>

              <p className="text-xs text-gray-500">
                By continuing, you agree to our{' '}
                <Link to="/privacy" className="text-orange-500 hover:underline">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="text-orange-500 hover:underline">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50">
            Need Help?
          </button>
        </div>
      </main>

      {/* Footer */}
     
    </div>
  );
}
