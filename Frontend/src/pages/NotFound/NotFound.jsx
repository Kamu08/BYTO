import { useState, useEffect, useRef } from 'react';
import NotFoundSection from '../../components/NotFound/NotFoundSection';

const NotFoundPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Searching for:', searchTerm);
    setTimeout(() => {
      setLoading(false);
      alert(`Redirecting to search results for: ${searchTerm}`);
      setSearchTerm('');
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center font-['Poppins',sans-serif]">
      <NotFoundSection
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        loading={loading}
        searchInputRef={searchInputRef}
      />
    </div>
  );
};

export default NotFoundPage;