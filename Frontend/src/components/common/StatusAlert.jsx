import { AlertCircle } from 'lucide-react';

const StatusAlert = () => {
  const statusAlert = { show: true, message: 'Delay detected: New ETA 4:00 PM' };
  if (!statusAlert.show) return null;
  return (
    <div className="bg-[#dc3545] text-white px-5 py-2.5 text-center relative flex justify-center items-center">
      <AlertCircle className="mr-2.5" size={24} />
      {statusAlert.message}
      <span className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer">✕</span>
    </div>
  );
};

export default StatusAlert;