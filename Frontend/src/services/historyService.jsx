import axios from 'axios';

const API_URL = 'http://localhost:5000/api/shipments'; // Adjust to your backend URL

const getFilteredShipments = async ({ searchQuery = '', selectedStatus = 'All', dateFrom = '', dateTo = '' }) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        searchQuery,
        status: selectedStatus,
        dateFrom,
        dateTo,
      },
    });
    return response.data.shipments;
  } catch (error) {
    console.error('Error fetching shipments:', error);
    throw error;
  }
};

export { getFilteredShipments };