import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showHeader, setShowHeader] = useState(true);
	const [lastScrollTop, setLastScrollTop] = useState(0);
	const menuItems = [
		{ to: "/business", text: "For businesses" },
		{ to: "/transport", text: "Transport partner" },
		{ to: "/track", text: "Track" },
		{ to: "/shiphistory", text: "Ship history" },
	];

	const handleScroll = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		setShowHeader(scrollTop < lastScrollTop || scrollTop < 100);
		setLastScrollTop(scrollTop);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollTop]);

	const renderNavLink = ({ to, text }) => (
		<NavLink
			key={to}
			to={to}
			className='hover:text-orange-500 cursor-pointer'
			activeclassname='text-orange-500'
		>
			{text}
		</NavLink>
	);

	return (
		<header
			className={`sm:ml-10 ml-3 w-[94vw] mx-auto p-5 fixed z-50 bg-slate-200  rounded-full shadow-md transition-transform duration-300 ${
				showHeader ? "translate-y-0" : "-translate-y-28"
			}`}
		>
			<div className='flex items-center justify-between relative'>
				{/* Logo and Home Link */}
				<NavLink
					to='/'
					className='flex items-center text-gray-900 text-xl cursor-pointer font-bold'
				>
					Bharat<span className='text-orange-500'>Movers</span>
				</NavLink>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex space-x-5 font-semibold'>
					{menuItems.map(renderNavLink)}
				</nav>

				{/* Get Started Button for Desktop */}
				<NavLink
					to='/signup'
					className='hidden md:inline-flex items-center bg-black text-white py-2 px-4 rounded-full hover:bg-orange-500'
				>
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
				</NavLink>

				{/* Mobile Hamburger Menu */}
				<div className='md:hidden'>
					<button
						aria-label='Open Menu'
						title='Open Menu'
						className='p-2 transition rounded focus:outline-none hover:bg-gray-200'
						onClick={() => setIsMenuOpen(true)}
					>
						<svg className='w-6 h-6 text-gray-600' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
							/>
							<path
								fill='currentColor'
								d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
							/>
							<path
								fill='currentColor'
								d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
							/>
						</svg>
					</button>

					{/* Mobile Menu */}
					{isMenuOpen && (
						<div className='absolute top-0 left-0 w-full z-50'>
							<div className='p-5 bg-white border rounded shadow-sm'>
								<div className='flex items-center justify-between mb-4'>
									{/* Logo in Mobile Menu */}
									<NavLink
										to='/'
										aria-label='Company'
										title='Company'
										className='inline-flex items-center'
									>
										<span className='text-xl font-bold tracking-wide text-gray-800 uppercase'>
											BY<span className='text-orange-500'>TO</span>
										</span>
									</NavLink>

									{/* Close Menu Button */}
									<button
										aria-label='Close Menu'
										title='Close Menu'
										className='p-2 transition rounded hover:bg-gray-200 focus:outline-none'
										onClick={() => setIsMenuOpen(false)}
									>
										<svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
											<path
												fill='currentColor'
												d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
											/>
										</svg>
									</button>
								</div>

								{/* Mobile Navigation */}
								<nav>
									<ul className='space-y-4'>
										{menuItems.map(({ to, text }) => (
											<li key={to}>
												<NavLink
													to={to}
													className='block text-gray-700 hover:text-orange-500'
													activeClassName='text-orange-500'
													onClick={() => setIsMenuOpen(false)}
												>
													{text}
												</NavLink>
											</li>
										))}
										<li>
											<NavLink
												to='/signup'
												className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-black hover:bg-orange-500 focus:shadow-outline focus:outline-none'
												onClick={() => setIsMenuOpen(false)}
											>
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
											</NavLink>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
