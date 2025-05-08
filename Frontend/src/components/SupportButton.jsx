import PropTypes from 'prop-types';
import { HelpCircle } from 'lucide-react';

const SupportButton = () => {
  return (
    <div className="flex justify-center">
      <button className="border border-orange-500 text-orange-500 font-medium py-2 px-8 rounded flex items-center">
        <HelpCircle className="h-5 w-5 mr-2" />
        Need Help?
      </button>
    </div>
  );
};

SupportButton.propTypes = {};

export default SupportButton;