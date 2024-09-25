import React, { useState } from "react";

const Track = () => {
	const [trackingId, setTrackingId] = useState("");

	const handleTrack = () => {
		// Add your tracking logic here
		console.log(`Tracking ID: ${trackingId}`);
	};

	return (
		<div className=' py-10'>
			<h2 className='text-center text-2xl font-bold mb-6 text-gray-700'>
				Track Your Shipment
			</h2>
			<form
				action=''
				class='p-2 mt-8 mb-10 transition duration-500 ease-in-out transform border-2 bg-gray-50 md:mx-auto rounded-xl sm:max-w-lg sm:flex'
			>
				<div class='flex-1 min-w-0 revue-form-group'>
					<input
						id='text'
						type='text'
						class='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform bg-transparent border border-transparent rounded-md text-neutral-600 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-300'
						placeholder='Enter tracking ID'
					/>
				</div>
				<div class='mt-4 sm:mt-0 sm:ml-3 revue-form-actions'>
					<button
						type='submit'
						value='search'
						class='block w-full px-5 py-3 text-base font-medium text-white bg-black border border-transparent rounded-lg shadow hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-300 sm:px-10'
					>
						track
					</button>
				</div>
			</form>
			<div className='w-full  bg-gray-300 rounded-lg  sm:mr-10 p-64 relative'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227749.053212317!2d75.62574539683855!3d26.885115143925216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714651482183!5m2!1sen!2sin'
					width='100%'
					height='100%'
					className='absolute inset-0'
					frameBorder='0'
					marginHeight='0'
					marginWidth='0'
					scrolling='no'
					style={{ filter: "grayscale(1) contrast(1.2) opacity(0.8)" }}
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>

			
			</div>
		</div>
	);
};

export default Track;
