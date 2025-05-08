import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilteredShipments } from '../../services/historyService';

export const fetchShipments = createAsyncThunk(
  'history/fetchShipments',
  async ({ searchQuery, selectedStatus, dateFrom, dateTo }, { rejectWithValue }) => {
    try {
      const shipments = await getFilteredShipments({ searchQuery, selectedStatus, dateFrom, dateTo });
      return shipments;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  showExportModal: false,
  selectedFilters: ['Delivered', 'Last 7 Days'],
  currentPage: 1,
  searchQuery: '',
  dateFrom: '',
  dateTo: '',
  selectedStatus: 'All',
  shipments: [],
  loading: false,
  error: null,
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setExportModal(state, action) {
      state.showExportModal = action.payload;
    },
    setFilters(state, action) {
      state.selectedFilters = action.payload;
      state.currentPage = 1;
    },
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setDateFrom(state, action) {
      state.dateFrom = action.payload;
    },
    setDateTo(state, action) {
      state.dateTo = action.payload;
    },
    setStatus(state, action) {
      state.selectedStatus = action.payload;
    },
    clearFilters(state) {
      state.selectedFilters = [];
      state.searchQuery = '';
      state.dateFrom = '';
      state.dateTo = '';
      state.selectedStatus = 'All';
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShipments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchShipments.fulfilled, (state, action) => {
        state.loading = false;
        state.shipments = action.payload;
      })
      .addCase(fetchShipments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setExportModal,
  setFilters,
  setPage,
  setSearchQuery,
  setDateFrom,
  setDateTo,
  setStatus,
  clearFilters,
} = historySlice.actions;

export default historySlice.reducer;