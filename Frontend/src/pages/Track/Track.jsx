import React from 'react';
import TrackSearch from '../../components/forms/TrackSearch';
import StatusAlert from '../../components/common/StatusAlert';
import MapDisplay from '../../components/Track/MapDisplay';
import TrackingDetails from '../../components/Track/TrackingDetails';
import RouteDetails from '../../components/Track/RouteDetails';
import SupportSection from '../../components/common/SupportSection';
import ChatWidget from '../../components/common/ChatWidget';
import Toast from '../../components/common/Toast';
import Breadcrumb from '../../components/layout/Breadcrumb';
const Track = () => (
  <div className="bg-[#f5f5f5] text-[#333333] font-['Poppins',sans-serif]">
    <section className="bg-gradient-to-br from-[#fffaf5] to-[#FFF1D5] px-5 ">
      <Breadcrumb />
      <div className="max-w-[1200px] mx-auto">
        <TrackSearch />
      </div>
    </section>
    <StatusAlert />
    <section className="map-section">
      <div className="max-w-[1200px] mx-auto">
        <MapDisplay />
      </div>
    </section>
    <TrackingDetails />
    <RouteDetails />
    <SupportSection />
    <ChatWidget />
    <Toast />
  </div>
);

export default Track;
