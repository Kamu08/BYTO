import { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import PersonalInfoStep from './PersonalInfoSetup';
import VehicleDetailsStep from './VehicleDetailsStep';
import DocumentsStep from './DocumentsStep';
import OtpVerification from './OtpVerification';
import Button from '../../common/Button';
import { Loader2, ArrowLeft, ArrowRight } from 'lucide-react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(60);
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const phoneInputRef = useRef(null);

  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      vehicleType: '',
      licenseNumber: '',
      registrationNumber: '',
      licenseFile: null,
      rcFile: null,
      otp: ''
    },
    mode: 'onChange'
  });

  const phone = watch('phone');

  useEffect(() => {
    if (showOtpModal && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  }, [showOtpModal]);

  useEffect(() => {
    let interval;
    if (otpSent && otpCountdown > 0) {
      interval = setTimeout(() => setOtpCountdown(prev => prev - 1), 1000);
    } else if (otpCountdown === 0) {
      setOtpSent(false);
      setOtpCountdown(60);
    }
    return () => clearTimeout(interval);
  }, [otpSent, otpCountdown]);

  const validateStep = async (currentStep) => {
    if (currentStep === 1) {
      return await trigger(['name', 'email', 'phone', 'password']);
    } else if (currentStep === 2) {
      return await trigger(['vehicleType', 'licenseNumber', 'registrationNumber']);
    } else if (currentStep === 3) {
      return await trigger(['licenseFile', 'rcFile']);
    }
    return true;
  };

  const handleNext = async () => {
    const isValid = await validateStep(step);
    if (!isValid) return;

    if (step === 1) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setOtpSent(true);
        setShowOtpModal(true);
      }, 2000);
    } else {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleVerifyOtp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowOtpModal(false);
      setStep(prev => prev + 1);
      setValue('otp', '');
      setOtpCountdown(60);
      setOtpSent(false);
      alert('Phone number verified! Continuing Registration...');
    }, 2000);
  };

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Registration successful! Your application is under review.');
      setStep(1);
      setValue('name', '');
      setValue('email', '');
      setValue('phone', '');
      setValue('password', '');
      setValue('vehicleType', '');
      setValue('licenseNumber', '');
      setValue('registrationNumber', '');
      setValue('licenseFile', null);
      setValue('rcFile', null);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep register={register} errors={errors} />;
      case 2:
        return <VehicleDetailsStep register={register} errors={errors} />;
      case 3:
        return <DocumentsStep register={register} errors={errors} setValue={setValue} />;
      default:
        return null;
    }
  };

  return (
    <section className="py-12 px-6" id="registration-form">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Register as a Partner</h2>
        <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] mx-auto md:w-1/2">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Step {step} of 3</h3>
            <p className="text-[#666666] mb-4">
              {step === 1 && 'Personal Information'}
              {step === 2 && 'Vehicle Details'}
              {step === 3 && 'Documents'}
            </p>
            <div className="mb-4">
              <div className="bg-[#e0e0e0] rounded-full h-2 mb-2">
                <motion.div
                  className="bg-[#ff914d] h-2 rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between text-xs text-[#666666]">
                <span>Personal</span>
                <span>Vehicle</span>
                <span>Documents</span>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              {showOtpModal && (
                <OtpVerification
                  phone={phone}
                  register={register}
                  setValue={setValue}
                  otpSent={otpSent}
                  otpCountdown={otpCountdown}
                  handleVerifyOtp={handleVerifyOtp}
                  handleResendOtp={() => {
                    setOtpCountdown(60);
                    setOtpSent(true);
                    console.log("Resending OTP...");
                  }}
                  loading={loading}
                />
              )}
            </AnimatePresence>
          </div>
          <div className="p-6 flex justify-between">
            <Button
              variant="secondary"
              onClick={handleBack}
              disabled={step === 1}
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back
            </Button>
            <Button
              onClick={step === 3 ? handleSubmit(onSubmit) : handleNext}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  {step === 3 ? 'Submitting...' : 'Loading...'}
                </>
              ) : (
                <>
                  {step !== 3 ? 'Next' : 'Submit'}
                  {step !== 3 && <ArrowRight className="ml-2 w-5 h-5" />}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiStepForm;