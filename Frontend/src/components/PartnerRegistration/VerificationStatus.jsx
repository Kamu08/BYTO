import { CheckCircle, Loader2, XCircle } from 'lucide-react';
import Button from '../common/Button';

const VerificationStatus = ({ status }) => (
  <section className="py-12 px-6 bg-[#f5f5f5]">
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-bold text-[#333333] mb-8 text-center">Your Application Status</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex items-center gap-8 relative">
          <div className="flex flex-col items-center">
            {(status === 'Submitted' || status === 'Under Review' || status === 'Approved' || status === 'Rejected') ? (
              <CheckCircle className="h-8 w-8 text-green-500" />
            ) : (
              <div className="h-8 w-8 rounded-full border-2 border-[#e0e0e0]"></div>
            )}
            <p className="text-sm text-[#666666]">Submitted</p>
          </div>
          <div className={status === 'Under Review' || status === 'Approved' || status === 'Rejected' ? 'h-[2px] w-20 bg-[#ff914d]' : 'h-[2px] w-20 bg-[#e0e0e0]'}></div>
          <div className="flex flex-col items-center">
            {(status === 'Under Review' || status === 'Approved' || status === 'Rejected') ? (
              <Loader2 className="h-8 w-8 text-[#ff914d] animate-spin" />
            ) : (
              <div className="h-8 w-8 rounded-full border-2 border-[#e0e0e0]"></div>
            )}
            <p className="text-sm text-[#666666]">Under Review</p>
          </div>
          <div className={status === 'Approved' || status === 'Rejected' ? 'h-[2px] w-20 bg-[#ff914d]' : 'h-[2px] w-20 bg-[#e0e0e0]'}></div>
          <div className="flex flex-col items-center">
            {status === 'Approved' ? (
              <CheckCircle className="h-8 w-8 text-green-500" />
            ) : status === 'Rejected' ? (
              <XCircle className="h-8 w-8 text-red-500" />
            ) : (
              <div className="h-8 w-8 rounded-full border-2 border-[#e0e0e0]"></div>
            )}
            <p className="text-sm text-[#666666]">
              {status === 'Approved' ? 'Approved' : status === 'Rejected' ? 'Rejected' : ''}
            </p>
          </div>
        </div>
      </div>
      {status === 'Rejected' && (
        <div className="mt-8 text-center">
          <Button variant="secondary">
            Contact Support
          </Button>
        </div>
      )}
    </div>
  </section>
);

export default VerificationStatus;