import React from "react";
import missionImage from '/src/assets/mission.jpg';
import vision1Image from '/src/assets/vision1.jpg';
import wwa from '/src/assets/wwa.jpeg';

const AboutUs = () => {
	return (
		<div className="bg-gray-100">
			<div className='mb-8 text-center'>
					<h2 className='text-xl font-bold text-gray-700'>
						About Us
					</h2>
					<span className='inline-block h-1 w-10 rounded bg-orange-500 mt-2 mb-4'></span>
				</div>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
						<img
							className='hidden md:block object-cover object-center rounded-lg shadow-lg'
							alt='Who we are'
							src={wwa}
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900'>
							Who We Are
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed text-gray-700'>
							BYTO (Book Your Truck Online) is an innovative logistics and transport startup, dedicated to revolutionizing the intra-city logistics and transport industry by delivering innovative solutions that drive efficiency and reliability. We connect shippers and cargo vehicle owners on one platform, allowing businesses to book cargo transport vehicles online for their goods. We are transforming the way goods are transported and managed.
						</p>
					</div>
				</div>
			</section>
			<section className='text-gray-600 body-font bg-white'>
				<div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-16 md:pr-12 flex flex-col md:items-start md:text-left items-center text-center mb-16 md:mb-0'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900'>
							Our Vision
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed text-gray-700'>
							Our vision is to be the preferred partner for shippers and carriers seeking seamless and sustainable logistics solutions. We aspire to create a future where logistics operations are efficient, sustainable, and responsive to the evolving needs of businesses in a rapidly changing world. After acquiring the national market, our end vision is to create the world's greatest end-to-end transport and logistics platform, revolutionizing the sector.
						</p>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='hidden md:block object-cover object-center rounded-lg shadow-lg'
							alt='Our Vision'
							src={vision1Image}
						/>
					</div>
				</div>
			</section>
			<section className='text-gray-600 body-font'>
				<div className='container mx-auto flex px-5 py-12 md:flex-row flex-col items-center'>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
						<img
							className='hidden md:block object-cover object-center rounded-lg shadow-lg'
							alt='Our Mission'
							src={missionImage}
						/>
					</div>
					<div className='lg:flex-grow md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900'>
							Our Mission
							<br className='hidden lg:inline-block' />
						</h1>
						<p className='mb-8 leading-relaxed text-gray-700'>
							Our mission is to simplify logistics challenges for businesses. We aim to provide efficient transportation options that empower businesses to thrive in a rapidly evolving world. Our commitment is to deliver excellence in service, ensuring customer satisfaction and building enduring partnerships based on trust and reliability. By providing seamless logistics solutions, we enable businesses to focus on their core operations while trusting us with their transportation needs.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
