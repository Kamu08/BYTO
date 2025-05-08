import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="bg-orange-500 text-white font-bold py-2 px-6 rounded inline-block mb-4">
              BYTO
            </div>
            <p className="mb-4">Fast, Reliable Logistics</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">About</a></li>
              <li><a href="#" className="hover:text-orange-500">Services</a></li>
              <li><a href="#" className="hover:text-orange-500">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Contact</a></li>
              <li><a href="#" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="#" className="hover:text-orange-500">Help Center</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-orange-500">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">© 2025 BYTO Logistics. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <select className="bg-transparent border border-gray-700 rounded p-1 text-sm">
              <option>English</option>
              <option>Español</option>
              <option>Français</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;