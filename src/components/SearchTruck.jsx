import React from "react";

const SearchTruck = () => {
	return (
		<div className='container mx-auto py-10 px-4'>
			{/* <form
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
			</form> */}

			<div className='text-center mb-10'>
				<div className='flex items-center justify-center'>
					<h2 className='text-xl font-bold text-gray-700'>What We Offer</h2>
				</div>
				<span className='inline-block h-1 w-10 rounded bg-orange-500 mt-2 mb-4'></span>
				<p className='max-w-md mx-auto text-gray-600 mb-6'>
					We provide a wide range of services to ensure your logistics needs are
					met with excellence and reliability.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>🚚</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							24/7 Support
						</h3>
						<p className='text-sm text-gray-500'>
							Our experts work day and night to solve all your cargo-related
							problems.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>⏱️</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Always on Time
						</h3>
						<p className='text-sm text-gray-500'>
							We ensure timely delivery for all your shipments.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>📍</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Live Tracking
						</h3>
						<p className='text-sm text-gray-500'>
							Track your shipments in real-time with our online tracking system.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>🛡️</span>
						<h3 className='text-lg font-semibold text-gray-700'>Insurance</h3>
						<p className='text-sm text-gray-500'>
							We provide insurance for all your shipments to ensure safety.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>📈</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Route Optimization
						</h3>
						<p className='text-sm text-gray-500'>
							Optimize your routes for efficient and cost-effective deliveries.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>🚦</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Prediction of Traffic Congestion
						</h3>
						<p className='text-sm text-gray-500'>
							Predict and avoid traffic congestion for smoother deliveries.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>💳</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Digital Payment and Paperwork
						</h3>
						<p className='text-sm text-gray-500'>
							Enjoy hassle-free digital payment and documentation processes.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>👷</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Labor for Loading
						</h3>
						<p className='text-sm text-gray-500'>
							Access skilled labor for loading and unloading your cargo.
						</p>
					</div>

					<div className='flex flex-col items-center border px-5 py-3 rounded bg-gray-100 shadow hover:shadow-md transition'>
						<span className='text-4xl mb-2'>💬</span>
						<h3 className='text-lg font-semibold text-gray-700'>
							Chat Messages and In-App Calling
						</h3>
						<p className='text-sm text-gray-500'>
							Communicate seamlessly with our in-app chat and calling features.
						</p>
					</div>
				</div>
			</div>

			{/* Cities Availability */}
			{/* <div className="bg-gray-100 p-5 rounded-lg">
        <h3 className="text-center mb-4 font-bold text-lg text-gray-700">
          Cities We Serve
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-4 text-center">
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Jaipur
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Pune
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Delhi
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Gurgaon
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Noida
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Bangalore
          </div>
          <div className="border px-5 py-3 rounded-full bg-white shadow hover:shadow-md transition">
            Mumbai
          </div>
        </div>
      </div> */}
		</div>
	);
};

export default SearchTruck;
