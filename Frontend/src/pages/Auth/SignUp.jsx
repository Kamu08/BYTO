import { useState } from "react";
import { Link } from "react-router-dom";
import { EyeIcon, EyeOffIcon, CheckCircleIcon, XIcon } from "lucide-react";
import Breadcrumb from "../../components/layout/Breadcrumb";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    emailPhone: "",
    password: "",
    businessType: "",
    agreeTerms: false,
    otp: ["", "", "", "", "", ""]
  });
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(60);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === "checkbox" ? checked : value 
    });
    
    if (name === "password") {
      // Simple password strength calculation
      let strength = 0;
      if (value.length >= 8) strength += 1;
      if (value.match(/[A-Z]/)) strength += 1;
      if (value.match(/[0-9]/)) strength += 1;
      if (value.match(/[^a-zA-Z0-9]/)) strength += 1;
      setPasswordStrength(strength);
    }
    
    setError("");
  };

  const handleOtpChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...formData.otp];
      newOtp[index] = value;
      setFormData({ ...formData, otp: newOtp });
      
      // Auto focus to next input if value is entered
      if (value !== "" && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Validation
    if (!formData.name || !formData.emailPhone || !formData.password || !formData.businessType || !formData.agreeTerms) {
      setError("Please fill all required fields");
      setLoading(false);
      return;
    }
    
    // Simulate API call for validation
    setTimeout(() => {
      setLoading(false);
      setShowOtpModal(true);
      
      // Start countdown for OTP
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1500);
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setShowOtpModal(false);
      // Here would be navigation to dashboard or onboarding
    }, 1500);
  };

  const handleResendOtp = () => {
    if (countdown === 0) {
      setCountdown(60);
      
      // Start countdown again
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
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
            
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              <Link to="/login" className="text-gray-700 px-4 py-2 font-medium">Login</Link>
              <div className="text-orange-500 border-b-2 border-orange-500 px-4 py-2 font-medium">Sign Up</div>
            </div>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="emailPhone" className="block text-sm font-medium text-gray-700 mb-1">Email / Phone</label>
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Create password (min. 8 characters)"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-2 text-gray-500 hover:text-orange-500"
                  >
                    {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                  </button>
                </div>
                
                {/* Password strength meter */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-300 ${
                          passwordStrength === 0 ? 'w-0' :
                          passwordStrength === 1 ? 'w-1/4 bg-red-500' :
                          passwordStrength === 2 ? 'w-2/4 bg-yellow-500' :
                          passwordStrength === 3 ? 'w-3/4 bg-blue-500' :
                          'w-full bg-green-500'
                        }`}
                      ></div>
                    </div>
                    <p className="text-xs mt-1 text-gray-500">
                      {passwordStrength === 0 ? 'Enter password' :
                       passwordStrength === 1 ? 'Weak' :
                       passwordStrength === 2 ? 'Fair' :
                       passwordStrength === 3 ? 'Good' :
                       'Strong'}
                    </p>
                  </div>
                )}
              </div>
              
              <div>
                <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                <select
                  id="businessType"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                >
                  <option value="" disabled>Select business type</option>
                  <option value="retailer">Retailer</option>
                  <option value="wholesaler">Wholesaler</option>
                  <option value="manufacturer">Manufacturer</option>
                  <option value="logistics">Logistics Provider</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-700">
                  I agree to the <Link to="/terms" className="text-orange-500 hover:underline">Terms & Conditions</Link>
                </label>
              </div>
              
              {error && <div className="text-red-500 text-sm">{error}</div>}
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-400 ${loading ? "opacity-70 cursor-not-allowed" : "transform hover:scale-[1.03] active:scale-95"}`}
              >
                {loading ? "Processing..." : "Sign Up"}
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
                <span>Sign up with Google</span>
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-orange-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Secure Payments & Data</span>
              </div>
              
              <p className="text-xs text-gray-500">
                By continuing, you agree to our{" "}
                <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link> and{" "}
                <Link to="/terms" className="text-orange-500 hover:underline">Terms & Conditions</Link>
              </p>
            </div>
          </div>
        </div>
        
        {/* Need Help Button */}
        <div className="mt-8 text-center">
          <button className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg hover:bg-orange-50">
            Need Help?
          </button>
        </div>
      </main>
      
      {/* Footer */}
     
      
      {/* OTP Verification Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">OTP Verification</h3>
              <button 
                onClick={() => setShowOtpModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XIcon size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-4">
              We've sent a 6-digit OTP to {formData.emailPhone}
            </p>
            
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div className="flex justify-between gap-2">
                {formData.otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="w-10 h-12 text-center border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                ))}
              </div>
              
              <div className="text-center text-sm text-gray-500">
                {countdown > 0 ? (
                  <p>Resend OTP in <span className="font-medium">{countdown}s</span></p>
                ) : (
                  <button 
                    type="button"
                    onClick={handleResendOtp}
                    className="text-orange-500 hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
              
              <button
                type="submit"
                disabled={loading || formData.otp.some(digit => digit === "")}
                className={`w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-400 ${
                  (loading || formData.otp.some(digit => digit === "")) ? 
                  "opacity-70 cursor-not-allowed" : 
                  "transform hover:scale-[1.03] active:scale-95"
                }`}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* Onboarding Modal - would appear after successful signup */}
      
      {/* Multi-Factor Authentication Toggle - would appear in user settings */}
    </div>
  );
}