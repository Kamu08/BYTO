import PropTypes from 'prop-types';

const HistoryItem = ({ shipment, index, isMobile }) => {
  if (isMobile) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex justify-between mb-2">
          <div className="font-medium">{shipment.date}</div>
          <span
            className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full ${shipment.statusColor}`}
          >
            {shipment.status}
          </span>
        </div>
        <div className="text-sm text-gray-800 mb-1">
          <span className="font-medium">Tracking ID:</span> {shipment.trackingId}
        </div>
        <div className="text-sm text-gray-800 mb-3">
          <span className="font-medium">Vehicle Type:</span> {shipment.vehicleType}
        </div>
        <div className="flex space-x-2 pt-2 border-t border-gray-100">
          <a href="#" className="text-orange-500 text-sm hover:underline">
            View Details
          </a>
          <button className="border border-orange-500 text-orange-500 text-xs px-2 py-1 rounded hover:bg-orange-100 transition-colors duration-200">
            Download Report
          </button>
        </div>
      </div>
    );
  }

  return (
    <tr className={index % 2 === 1 ? 'bg-amber-50' : ''}>
      <td className="px-6 py-4 text-sm text-gray-800">{shipment.date}</td>
      <td className="px-6 py-4 text-sm text-gray-800">{shipment.trackingId}</td>
      <td className="px-6 py-4 text-sm text-gray-800 hidden lg:table-cell">{shipment.vehicleType}</td>
      <td className="px-6 py-4">
        <span
          className={`inline-block px-3 py-1 text-xs font-medium text-white rounded-full ${shipment.statusColor}`}
        >
          {shipment.status}
        </span>
      </td>
      <td className="px-6 py-4 flex space-x-2">
        <a href="#" className="text-orange-500 text-sm hover:underline">
          View Details
        </a>
        <button className="border border-orange-500 text-orange-500 text-xs px-2 py-1 rounded hover:bg-orange-100 transition-colors duration-200">
          Download Report
        </button>
      </td>
    </tr>
  );
};

HistoryItem.propTypes = {
  shipment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    trackingId: PropTypes.string.isRequired,
    vehicleType: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    statusColor: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  isMobile: PropTypes.bool,
};

HistoryItem.defaultProps = {
  isMobile: false,
};

export default HistoryItem;