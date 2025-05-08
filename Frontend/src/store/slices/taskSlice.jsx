const initialState = {
    trackingId: 'BYTO-24041301',
    recentTracks: [
      { id: 'BYTO-24041301', time: 'Apr 13, 2025 - 10:00 AM' },
      { id: 'BYTO-24040502', time: 'Apr 05, 2025 - 11:30 AM' },
      { id: 'BYTO-24033003', time: 'Mar 30, 2025 - 09:15 AM' },
    ],
    statusAlert: { show: true, message: 'Delay detected: New ETA 4:00 PM' },
    trackingDetails: [
      { status: 'Booked', time: 'Apr 13, 2025, 09:30 AM', complete: true },
      { status: 'Picked Up', time: 'Apr 13, 2025, 10:00 AM', complete: true },
      { status: 'In Transit', time: 'Current Status', active: true },
      { status: 'Delivered', time: 'Estimated: Apr 13, 2025, 3:00 PM', pending: true },
    ],
    shipmentDetails: {
      trackingId: 'BYTO-24041301',
      vehicleType: 'Delivery Van',
      pickupLocation: '123 Warehouse Ave, Los Angeles, CA',
      deliveryLocation: '456 Main St, Apt 3B, Los Angeles, CA',
    },
    routeDetails: {
      distance: '12.3 mi',
      travelTime: '35 min',
      fuelCost: '$8.50',
      driverInfo: 'John D. (Vehicle ID: VAN-1234)',
      routeNotes: 'Urban delivery route, moderate traffic expected',
    },
  };
  function trackReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_TRACKING_ID':
        return { ...state, trackingId: action.payload };
      case 'TOGGLE_ALERT':
        return { ...state, statusAlert: { ...state.statusAlert, show: !state.statusAlert.show } };
      default:
        return state;
    }
  }