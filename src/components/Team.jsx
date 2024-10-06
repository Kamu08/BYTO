import React from "react";

const Team = () => {
	return (
		<section class='text-gray-600 body-font'>
			<div class='container px-5 py-24 mx-auto'>
				{" "}
				<h2 className="mb-8 text-3xl">Our Team</h2>
				<div class='flex flex-wrap -m-4'>
					<div class='lg:w-1/3 lg:mb-0 mb-6 p-4'>
						<div class='h-full text-center'>
							<img
								alt='testimonial'
								class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
								src='https://dummyimage.com/302x302'
							/>

							<h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
								DEEPAK SWAMI
							</h2>
							<p class='text-gray-500'>Founder</p>
						</div>
					</div>
					<div class='lg:w-1/3 lg:mb-0 mb-6 p-4'>
						<div class='h-full text-center'>
							<img
								alt='testimonial'
								class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
								src='https://dummyimage.com/300x300'
							/>

							<h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
								PANKAJ SHARMA
							</h2>
							<p class='text-gray-500'>Co-Founder</p>
						</div>
					</div>
					<div class='lg:w-1/3 lg:mb-0 p-4'>
						<div class='h-full text-center'>
							<img
								alt='testimonial'
								class='w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100'
								src='https://dummyimage.com/305x305'
							/>

							<h2 class='text-gray-900 font-medium title-font tracking-wider text-sm'>
							KAMAL SHARMA
							</h2>
							<p class='text-gray-500'>CTO</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;
