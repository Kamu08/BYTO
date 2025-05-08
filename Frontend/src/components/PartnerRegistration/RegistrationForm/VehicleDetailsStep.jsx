import cn from '../../../utils/cn';

const VehicleDetailsStep = ({ register, errors }) => (
  <>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Vehicle Type</label>
      <select
        {...register('vehicleType', { required: 'Vehicle type is required' })}
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.vehicleType && 'border-red-500')}
      >
        <option value="">Select a vehicle type</option>
        <option value="Tata Ace">Tata Ace</option>
        <option value="Chota Hathi">Chota Hathi</option>
      </select>
      {errors.vehicleType && <p className="text-red-500 text-sm mt-1">{errors.vehicleType.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">License Number</label>
      <input
        {...register('licenseNumber', { required: 'License number is required' })}
        type="text"
        placeholder="Enter your license number"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.licenseNumber && 'border-red-500')}
      />
      {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Registration Number</label>
      <input
        {...register('registrationNumber', { required: 'Registration number is required' })}
        type="text"
        placeholder="Enter your vehicle registration number"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.registrationNumber && 'border-red-500')}
      />
      {errors.registrationNumber && <p className="text-red-500 text-sm mt-1">{errors.registrationNumber.message}</p>}
    </div>
  </>
);

export default VehicleDetailsStep;