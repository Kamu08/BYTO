import PropTypes from 'prop-types';

const Header = () => {
  return (
    <header className="h-20 border-b border-gray-200 flex items-center justify-between px-8">
      <div className="flex items-center">
        <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded transform hover:scale-105 transition-transform duration-200">
          BY TO
        </div>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-800 font-medium">Track</a>
        <a href="#" className="text-orange-500 font-medium">History</a>
        <a href="#" className="text-gray-800 font-medium">Partner</a>
        <a href="#" className="text-gray-800 font-medium"></a>
      </nav>

      <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded shadow hover:bg-orange-400 transition-colors duration-200">
      Login/Signup
      </button>
    </header>
  );
};

Header.propTypes = {};

export default Header;