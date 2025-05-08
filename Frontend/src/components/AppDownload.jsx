import React from 'react'
import Button from './common/Button'
const AppDownload = () => {
  return (
    <div className="bg-[#ffffff] text-[#333333] font-['Poppins',sans-serif]">
    <div className="bg-[#ff914d] text-white py-5 text-center">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-2xl md:text-3xl mb-5">
          Join the thousands who trust BYTO for their daily logistics
        </h2>
        <div className="flex justify-center gap-5">
          <Button variant="secondary">Download Our App</Button>
          <Button>Contact Us</Button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AppDownload
