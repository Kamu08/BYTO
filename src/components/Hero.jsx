import React from "react";
import img from "../assets/bckg.jpg";
import img1 from "../assets/background.png"
import RentVeh from "./RentVeh";
import SearchTruck from "./SearchTruck";
import Faq from "../pages/Faq";
import AboutUs from "../pages/AboutUs";
const Hero = () => {
	return (
		<>
			<section className='text-gray-600 body-font relative sm:h-[80vh] h-[65vh]  '>
				<div className='absolute inset-0 -z-10 '>
					<img
						className='sm:object-cover h-[65vh]  sm:w-full sm:h-full rounded'
						alt='hero'
						src={img1}
					/>
					<div className='absolute inset-0 bg-black opacity-25'></div>
				</div>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
						Revolutionizing the intra-city
							<br className='hidden lg:inline-block' /> transport and logistics industry
						</h1>
						<p className='mb-8 leading-relaxed text-white'>
							Very proud to introduce a revolutionary way to shift your
							goods.
						</p>
						<button className='inline-flex items-center bg-black border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-base text-white'>
							Get Started
							<svg
								fill='none'
								stroke='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-4 h-4 ml-1'
								viewBox='0 0 24 24'
							>
								<path d='M5 12h14M12 5l7 7-7 7'></path>
							</svg>
						</button>
					</div>
				</div>
			</section>
			<RentVeh />
			<SearchTruck />
			<AboutUs />
			{/* <ContactUs /> */}
			<Faq />
			{/* <Team/> */}
		</>
	);
};

export default Hero;
