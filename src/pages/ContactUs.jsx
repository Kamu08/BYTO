import React from "react";
const ContactUs = () => {
	return (
		<>
			<section className='text-gray-400 body-font relative '>
				<div className='lg:w-1/3 md:w-1/2 w-full md:py-8 mt-8 mx-auto'>
					<div className="text-center mt-20">
						<div className='flex items-center justify-center'>
							<h2 className='text-xl font-bold text-gray-700'>
								For any query?
							</h2>
						</div>
						<span className='inline-block h-1 w-10 rounded bg-orange-500 mt-2 mb-4'></span>
						<p className='text-gray-600 mb-6 text-center'>
							If you have any questions or need assistance, our team is here to
							help. Don't hesitate to reach out with your queries, and we'll
							ensure you get the support you need.
						</p>
					</div>

					<div className='relative mb-4'>
						<label htmlFor='name' className='leading-7 text-sm text-gray-600'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full bg-gray-50 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='number' className='leading-7 text-sm text-gray-600'>
							Mobile No.
						</label>
						<input
							type='number'
							id='number'
							name='number'
							className='w-full bg-gray-50 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-600'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-gray-50 rounded border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
						></textarea>
					</div>
					<button className='text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg w-full'>
						Submit
					</button>
					<p className='text-xs text-gray-600 mt-3 text-center'>
						You will be contacted by one of our team members shortly.
					</p>
				</div>
			</section>
		</>
	);
};

export default ContactUs;
