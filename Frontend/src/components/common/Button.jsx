const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseClasses = 'px-5 py-2.5 rounded-lg font-medium text-base cursor-pointer transition-all duration-200';
  const variantClasses = variant === 'primary'
    ? 'bg-[#ff914d] text-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:bg-[#ffa94d] hover:scale-[1.03] active:scale-[0.95]'
    : 'bg-white text-[#ff914d] border border-[#ff914d] hover:bg-[#fff5eb]';
  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;