import cn from '../../../utils/cn';

const DocumentsStep = ({ register, errors, setValue }) => {
  const handleFileChange = (e, fieldName) => {
    if (e.target.files && e.target.files[0]) {
      setValue(fieldName, e.target.files[0]);
    }
  };

  return (
    <>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#666666] mb-2">Upload License</label>
        <input
          type="file"
          {...register('licenseFile', { required: 'License file is required' })}
          onChange={(e) => handleFileChange(e, 'licenseFile')}
          className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.licenseFile && 'border-red-500')}
        />
        {errors.licenseFile && <p className="text-red-500 text-sm mt-1">{errors.licenseFile.message}</p>}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-[#666666] mb-2">Upload Vehicle RC</label>
        <input
          type="file"
          {...register('rcFile', { required: 'RC file is required' })}
          onChange={(e) => handleFileChange(e, 'rcFile')}
          className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.rcFile && 'border-red-500')}
        />
        {errors.rcFile && <p className="text-red-500 text-sm mt-1">{errors.rcFile.message}</p>}
      </div>
    </>
  );
};

export default DocumentsStep;