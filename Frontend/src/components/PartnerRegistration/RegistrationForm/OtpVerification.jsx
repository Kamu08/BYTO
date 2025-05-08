import { motion } from 'framer-motion';
import Button from '../../common/Button';
import { Loader2 } from 'lucide-react';

const OtpVerification = ({ phone, register, setValue, otpSent, otpCountdown, handleVerifyOtp, handleResendOtp, loading }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 space-y-4">
      <h3 className="text-lg font-semibold text-[#333333]">Verify Phone Number</h3>
      <p className="text-[#666666]">Enter the 6-digit code sent to {phone}</p>
      <input
        {...register('otp')}
        type="text"
        placeholder="Enter OTP"
        onChange={(e) => setValue('otp', e.target.value)}
        className="w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50"
      />
      {otpSent && (
        <p className="text-sm text-[#666666] mb-2">
          Resend code in {otpCountdown} seconds
          {otpCountdown === 0 && (
            <button
              onClick={handleResendOtp}
              className="text-[#ff914d] underline ml-1"
            >
              Resend
            </button>
          )}
        </p>
      )}
      <Button
        onClick={handleVerifyOtp}
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Verifying...
          </>
        ) : (
          'Verify OTP'
        )}
      </Button>
    </div>
  </motion.div>
);

export default OtpVerification;