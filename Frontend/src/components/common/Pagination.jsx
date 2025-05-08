import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../store/slices/historySlice';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.history);
  const totalPages = 3; // Mocked; calculate from filtered data in a real app

  return (
    <div className="flex justify-center items-center mt-8 mb-8">
      <button
        onClick={() => dispatch(setPage(currentPage - 1))}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded border border-orange-500 flex items-center justify-center text-orange-500 mr-2 disabled:opacity-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => dispatch(setPage(page))}
          className={`w-10 h-10 rounded mr-2 flex items-center justify-center ${
            page === currentPage
              ? 'bg-orange-500 text-white'
              : 'border border-gray-300 text-gray-800'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => dispatch(setPage(currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-10 h-10 rounded border border-orange-500 flex items-center justify-center text-orange-500 disabled:opacity-50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;