import React from "react";
import PartnerHeroImage from "../assets/p2.jpeg";

const TransportProviderPage = () => {
	return (
		<div className=' py-20 px-4'>
			<div className='max-w-screen-xl mx-auto flex flex-col md:flex-row items-center mb-10 mt-16'>
				<div className='md:w-1/2'>
					<h1 className='text-4xl font-bold text-gray-800 mb-4'>
						Join Bharat Movers as a Transport Partner
					</h1>
					<p className='text-lg text-gray-600 mb-6'>
						Partner with Bharat Movers and grow your business by providing reliable
						transportation services. Earn more, work flexibly, and be part of a
						trusted network.
					</p>
				</div>
				<div className='md:w-1/2'>
					<img
						src={PartnerHeroImage}
						alt='Partner Hero'
						className='w-full h-auto'
					/>
				</div>
			</div>
			<div className='bg-gray-100 py-16 px-4'>
				<div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center'>
					<div className='md:w-1/2 mb-8 md:mb-0'>
						<h2 className='text-3xl font-bold text-gray-800 mb-4'>
							Register as a Transport Partner
						</h2>
						<p className='text-lg text-gray-600'>
							Provide your details and vehicle information to join our network
							and start earning by delivering goods for our customers.
						</p>
					</div>
					<div className='md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md'>
						<form className='space-y-4'>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Name
								</label>
								<input
									type='text'
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter your name'
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
									Vehicle Information
								</label>
								<textarea
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter vehicle information'
								></textarea>
							</div>
							<div>
								<label className='block text-gray-700 font-semibold'>
									Availability
								</label>
								<input
									type='text'
									className='mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500'
									placeholder='Enter your availability'
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

export default TransportProviderPage;
