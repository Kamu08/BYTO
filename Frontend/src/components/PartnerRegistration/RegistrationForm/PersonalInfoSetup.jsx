import cn from '../../../utils/cn';

const PersonalInfoStep = ({ register, errors }) => (
  <>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Name</label>
      <input
        {...register('name', { required: 'Name is required' })}
        type="text"
        placeholder="Enter your full name"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.name && 'border-red-500')}
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Email</label>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
        })}
        type="email"
        placeholder="Enter your email"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.email && 'border-red-500')}
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Phone</label>
      <input
        {...register('phone', {
          required: 'Phone is required',
          pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number (10 digits required)' }
        })}
        type="tel"
        placeholder="Enter your phone number"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.phone && 'border-red-500')}
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-[#666666] mb-2">Password</label>
      <input
        {...register('password', {
          required: 'Password is required',
          minLength: { value: 6, message: 'Password must be at least 6 characters' }
        })}
        type="password"
        placeholder="Enter your password"
        className={cn('w-full h-10 rounded-lg border border-[#e0e0e0] px-2.5 text-sm outline-none focus:border-[#ff914d] focus:ring-2 focus:ring-[#ff914d]/50', errors.password && 'border-red-500')}
      />
      {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
    </div>
  </>
);

export default PersonalInfoStep;