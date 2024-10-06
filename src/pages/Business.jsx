import React from "react";
import HeroImage from "../assets/p1.png";

const BusinessPage = () => {
	return (
		<div className=' py-20 px-4'>
			<div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center mb-10'>
				<div className='md:w-1/2'>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						Empower Your Business with Bharat Movers
					</h1>
					<p className='text-lg text-gray-600 mb-6'>
					Bharat Movers provides reliable and efficient vehicle booking services
						tailored to your business needs. Streamline your logistics and focus
						on what you do best.
					</p>
				</div>
				<div className='md:w-1/2'>
					<img
						src={HeroImage}
						alt='Enterprise Hero'
						className='w-full h-auto'
					/>
				</div>
			</div>
			<div className='bg-gray-100 py-16 px-4'>
				<div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center'>
					<div className='md:w-1/2 mb-8 md:mb-0'>
						<h2 className='text-3xl font-bold text-gray-800 mb-4'>
							Tell Us About Your Business
						</h2>
						<p className='text-lg text-gray-600'>
							Share your transportation requirements with us, and we will
							provide you with the best solutions tailored to your needs.
						</p>
					</div>
					<div className='md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md'>
						<form className='space-y-4'>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Business Name
								</label>
								<input
									type='text'
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter your business name'
								/>
							</div>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Contact Information
								</label>
								<input
									type='text'
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter contact details'
								/>
							</div>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Transportation Requirements
								</label>
								<textarea
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter your requirements'
								></textarea>
							</div>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Preferred Vehicle Types
								</label>
								<input
									type='text'
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter preferred vehicle types'
								/>
							</div>
							<button
								type='submit'
								className='hover:bg-orange-500 bg-black text-white px-4 py-2 rounded-md w-full'
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className='flex items-center mb-3 sm:justify-center'>
				<a href='/' className='mr-3 transition duration-300 hover:shadow-lg'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png'
						className='object-cover object-top w-32 mx-auto'
						alt=''
					/>
				</a>
				<a href='/' className='transition duration-300 hover:shadow-lg'>
					<img
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png'
						className='object-cover object-top w-32 mx-auto'
						alt=''
					/>
				</a>
			</div>
		</div>
	);
};

export default BusinessPage;
