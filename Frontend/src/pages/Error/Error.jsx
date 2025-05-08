import { useState } from 'react';
import ErrorSection from '../../components/Error/ErrorSection';

const ErrorPage = () => {
  const [loading, setLoading] = useState(false);

  const handleTryAgain = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000); // 1 second delay
  };

  const handleContactSupport = () => {
    alert('Opening support chat...');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-gradient-to-br from-[#FFF5EB] to-[#FFEFD5] min-h-screen flex flex-col items-center justify-center font-['Poppins',sans-serif]">
      <ErrorSection onTryAgain={handleTryAgain} onContactSupport={handleContactSupport} loading={loading} handleGoBack={handleGoBack} />
    </div>
  );
};

export default ErrorPage;