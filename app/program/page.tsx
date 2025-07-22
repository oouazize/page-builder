"use client";

import { Clock, Users } from "lucide-react";
import React, { useEffect } from "react";

// Number counter animation function
const animateCounter = (
	element: HTMLElement,
	target: number,
	duration: number = 2000
) => {
	let start = 0;
	const increment = target / (duration / 16);
	const timer = setInterval(() => {
		start += increment;
		if (start >= target) {
			element.textContent = target.toString();
			clearInterval(timer);
		} else {
			element.textContent = Math.floor(start).toString();
		}
	}, 16);
};

// Intersection Observer for triggering animations
const observeCounters = () => {
	const counters = document.querySelectorAll(".counter");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement;
					const targetValue = parseInt(
						element.getAttribute("data-target") || "0"
					);
					animateCounter(element, targetValue);
					observer.unobserve(element);
				}
			});
		},
		{ threshold: 0.1 }
	);

	counters.forEach((counter) => observer.observe(counter));
};

const Header = () => {
	return (
		<header className="w-full bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<img
							src="https://cdn.fs.agorize.com/8PbH4RChRGrltQW5XjqR"
							alt="AgriFoodTech logo"
							className="h-10 w-10"
						/>
					</div>
					<div className="flex items-center text-sm gap-6">
						{Array.from({ length: 4 }).map((_, index) => (
							<a
								href="#"
								key={index}
								className="text-gray-700 hover:text-gray-900"
							>
								Home
							</a>
						))}
						<button className="bg-gray-900 text-white px-4 py-2 rounded-md">
							Sign In
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

const HeroSection = () => {
	return (
		<section className="relative overflow-hidden">
			{/* Cover Image Background */}
			<div
				className="w-full bg-cover bg-center bg-no-repeat h-[40dvh]"
				style={{
					backgroundImage: `url('${
						window.innerWidth < 768
							? "https://cdn.fs.agorize.com/bysRTb4HSsaBDsEAuLDL"
							: "https://cdn.fs.agorize.com/WqF5kkL9RzS8k6UzUgYn"
					}')`,
				}}
			/>

			<div className="flex md:flex-row flex-col justify-between items-center space-y-6 py-6 px-4 md:px-20">
				<div className="w-full flex items-center gap-4">
					<img
						src="https://cdn.fs.agorize.com/8PbH4RChRGrltQW5XjqR"
						alt="AgriFoodTech logo"
						className="hidden md:block h-40 w-40"
					/>
					<div className="flex flex-col space-y-2">
						{/* Program Title */}
						<h2 className="text-xl md:text-3xl font-bold">
							AgriFoodTech Incubator 4th Edition
						</h2>

						{/* Program Description */}
						<p className="text-gray-400 max-w-2xl">
							Nurturing the seeds of the Moroccan agricultural transformation
						</p>
					</div>
				</div>
				<div className="w-full flex items-center justify-between md:justify-center gap-10">
					<div className="flex flex-col justify-center">
						<div className="flex items-center gap-2">
							<Users className="w-6 h-6" />
							<p className="text-gray-400">1000</p>
						</div>
						<p>Participants</p>
					</div>
					<div className="flex flex-col justify-center">
						<div className="flex items-center gap-2">
							<Clock className="w-6 h-6" />
							<p>48 days left</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const AboutSection = () => {
	return (
		<section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 overflow-hidden">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Header with fade-in animation */}
				<div className="text-center mb-16 opacity-0 animate-fade-in">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-6 transform rotate-3 hover:rotate-6 transition-transform duration-300">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Innovation at Scale
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Transforming ideas into breakthrough solutions through cutting-edge
						technology and collaborative innovation.
					</p>
				</div>

				{/* Animated Stats Grid */}
				<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					<div className="text-center group cursor-pointer">
						<div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
							<div
								className="text-4xl font-bold text-blue-600 mb-2 counter"
								data-target="250"
							>
								0
							</div>
							<div className="text-sm text-gray-600 font-medium">Startups</div>
						</div>
					</div>
					<div className="text-center group cursor-pointer">
						<div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
							<div
								className="text-4xl font-bold text-emerald-600 mb-2 counter"
								data-target="15"
							>
								0
							</div>
							<div className="text-sm text-gray-600 font-medium">Million €</div>
						</div>
					</div>
					<div className="text-center group cursor-pointer">
						<div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
							<div
								className="text-4xl font-bold text-purple-600 mb-2 counter"
								data-target="85"
							>
								0
							</div>
							<div className="text-sm text-gray-600 font-medium">
								Success Rate %
							</div>
						</div>
					</div>
					<div className="text-center group cursor-pointer">
						<div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20">
							<div
								className="text-4xl font-bold text-orange-600 mb-2 counter"
								data-target="50"
							>
								0
							</div>
							<div className="text-sm text-gray-600 font-medium">Mentors</div>
						</div>
					</div>
				</div>

				{/* Content Card with Floating Elements */}
				<div className="relative">
					<div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20 relative overflow-hidden">
						{/* Floating decoration */}
						<div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
						<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>

						<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div className="space-y-6">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Our Story
								</h3>
								<p className="text-lg text-gray-700 leading-relaxed">
									We're pioneering the future of agricultural technology by
									bridging the gap between innovative startups and market
									success. Our comprehensive ecosystem provides the tools,
									mentorship, and resources needed to transform bold ideas into
									scalable solutions that make a real impact.
								</p>

								{/* Animated highlights */}
								<div className="flex flex-wrap gap-3 mt-8">
									<span className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors duration-200 cursor-pointer">
										<span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
										AI-Powered
									</span>
									<span className="inline-flex items-center px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium hover:bg-emerald-100 transition-colors duration-200 cursor-pointer">
										<span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
										Sustainable
									</span>
									<span className="inline-flex items-center px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-100 transition-colors duration-200 cursor-pointer">
										<span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
										Scalable
									</span>
								</div>
							</div>

							<div className="relative">
								<div className="relative group">
									<img
										className="w-full rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
										src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
										alt="Innovation workspace"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
								{/* Floating badge */}
								<div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl transform rotate-6 hover:rotate-12 transition-transform duration-300">
									<div className="text-2xl">🚀</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const MissionSection = () => {
	return (
		<section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 py-20 relative overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
				<div
					className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "1s" }}
				></div>
				<div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
					style={{ animationDelay: "2s" }}
				></div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-lg rounded-3xl mb-8 group hover:scale-110 transition-transform duration-300">
						<svg
							className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M13 10V3L4 14h7v7l9-11h-7z"
							></path>
						</svg>
					</div>
					<h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
						Our Mission
					</h2>
				</div>

				{/* Mission Card */}
				<div className="relative group cursor-pointer">
					<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>
					<div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 hover:border-white/40 transition-all duration-500">
						{/* Mission Content */}
						<div className="text-center space-y-8">
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
								Accelerating Innovation
							</h3>
							<p className="text-xl text-white/80 leading-relaxed max-w-4xl mx-auto">
								We empower the next generation of agricultural pioneers by
								providing cutting-edge resources, expert mentorship, and a
								collaborative ecosystem where breakthrough ideas transform into
								solutions that feed the world sustainably.
							</p>

							{/* Metrics with Animation */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
								<div className="group/metric hover:scale-105 transition-transform duration-300">
									<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
										<div
											className="text-4xl font-bold text-blue-300 mb-2 counter"
											data-target="100"
										>
											0
										</div>
										<div className="text-white/70 font-medium">
											Startups Accelerated
										</div>
										<div className="w-full bg-white/20 rounded-full h-2 mt-4">
											<div
												className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full"
												style={{ width: "70%" }}
											></div>
										</div>
									</div>
								</div>

								<div className="group/metric hover:scale-105 transition-transform duration-300">
									<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
										<div
											className="text-4xl font-bold text-emerald-300 mb-2 counter"
											data-target="50"
										>
											0
										</div>
										<div className="text-white/70 font-medium">
											Million € Raised
										</div>
										<div className="w-full bg-white/20 rounded-full h-2 mt-4">
											<div
												className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full"
												style={{ width: "85%" }}
											></div>
										</div>
									</div>
								</div>

								<div className="group/metric hover:scale-105 transition-transform duration-300">
									<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
										<div
											className="text-4xl font-bold text-purple-300 mb-2 counter"
											data-target="25"
										>
											0
										</div>
										<div className="text-white/70 font-medium">
											Success Stories
										</div>
										<div className="w-full bg-white/20 rounded-full h-2 mt-4">
											<div
												className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 rounded-full transition-all duration-1000 group-hover/metric:w-full"
												style={{ width: "90%" }}
											></div>
										</div>
									</div>
								</div>
							</div>

							{/* CTA Button */}
							<div className="mt-12">
								<button className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
									<span>Learn More</span>
									<svg
										className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M17 8l4 4m0 0l-4 4m4-4H3"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const VisionSection = () => {
	return (
		<section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20 relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-40">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px), radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)",
						backgroundSize: "60px 60px",
					}}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 transform hover:scale-110 transition-transform duration-300">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							></path>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							></path>
						</svg>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Our Vision
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Shaping the future of sustainable agriculture through innovation and
						technology
					</p>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
					{/* Left: Vision Content */}
					<div className="space-y-8">
						<h3 className="text-3xl font-bold text-gray-900">
							The Future We're Building
						</h3>
						<p className="text-lg text-gray-700 leading-relaxed">
							We envision a world where cutting-edge agricultural technology
							creates sustainable, profitable farming solutions that feed
							growing populations while preserving our planet for future
							generations.
						</p>

						{/* Interactive Goals Timeline */}
						<div className="space-y-6 mt-12">
							<div className="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
									<span className="text-white font-bold">1</span>
								</div>
								<div className="ml-4 flex-1">
									<h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
										Innovation Hub
									</h4>
									<p className="text-gray-600 mt-1">
										Establish Morocco as the leading AgriTech innovation center
										in Africa
									</p>
									<div className="w-full bg-gray-200 rounded-full h-2 mt-3">
										<div
											className="bg-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
											style={{ width: "30%" }}
										></div>
									</div>
								</div>
							</div>

							<div className="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
								<div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 transition-colors duration-300">
									<span className="text-white font-bold">2</span>
								</div>
								<div className="ml-4 flex-1">
									<h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
										Startup Ecosystem
									</h4>
									<p className="text-gray-600 mt-1">
										Support 1000+ agricultural startups by 2030 with
										comprehensive resources
									</p>
									<div className="w-full bg-gray-200 rounded-full h-2 mt-3">
										<div
											className="bg-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
											style={{ width: "60%" }}
										></div>
									</div>
								</div>
							</div>

							<div className="flex items-start group cursor-pointer hover:bg-white/50 p-4 rounded-2xl transition-all duration-300">
								<div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
									<span className="text-white font-bold">3</span>
								</div>
								<div className="ml-4 flex-1">
									<h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
										Global Impact
									</h4>
									<p className="text-gray-600 mt-1">
										Create sustainable farming solutions benefiting millions
										worldwide
									</p>
									<div className="w-full bg-gray-200 rounded-full h-2 mt-3">
										<div
											className="bg-purple-500 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
											style={{ width: "45%" }}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Right: Interactive Image Card */}
					<div className="relative">
						<div className="relative group">
							{/* Main Image */}
							<div className="relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg p-4 shadow-2xl hover:shadow-3xl transition-all duration-500">
								<img
									className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-105"
									src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
									alt="Future of agriculture"
								/>
								<div className="absolute inset-4 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								{/* Overlay Content */}
								<div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
									<h4 className="text-xl font-bold mb-2">
										Future of Innovation
									</h4>
									<p className="text-sm">Transforming ideas into reality</p>
								</div>
							</div>

							{/* Floating Elements */}
							<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center text-white font-bold text-xl transform rotate-12 hover:rotate-6 transition-transform duration-300 shadow-lg">
								2030
							</div>

							<div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-300 shadow-lg">
								<svg
									className="w-10 h-10 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M13 10V3L4 14h7v7l9-11h-7z"
									></path>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const AboutStatsSection = () => {
	return (
		<section className="bg-white py-20 relative overflow-hidden">
			{/* Background decorations */}
			<div className="absolute top-0 left-0 w-full h-full">
				<div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
				<div
					className="absolute top-40 right-32 w-3 h-3 bg-purple-400 rounded-full animate-ping"
					style={{ animationDelay: "1s" }}
				></div>
				<div
					className="absolute bottom-32 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"
					style={{ animationDelay: "2s" }}
				></div>
				<div
					className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-ping"
					style={{ animationDelay: "3s" }}
				></div>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Header */}
				<div className="text-center mb-20">
					<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-8 transform hover:rotate-12 transition-transform duration-300">
						<svg
							className="w-8 h-8 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
							></path>
						</svg>
					</div>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
						Impact in Numbers
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						Measurable results driving the future of agricultural innovation
					</p>
				</div>

				{/* Interactive Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
					<div className="group cursor-pointer">
						<div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-200/50 hover:border-blue-300 overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
							<div className="relative z-10">
								<div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 10V3L4 14h7v7l9-11h-7z"
										></path>
									</svg>
								</div>
								<div
									className="text-4xl font-bold text-blue-600 mb-2 counter"
									data-target="250"
								>
									0
								</div>
								<div className="text-gray-600 font-medium">
									Startups Launched
								</div>
								<div className="mt-4 w-full bg-blue-200 rounded-full h-1">
									<div
										className="bg-blue-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
										style={{ width: "0%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					{/* Repeat for other stats with different colors */}
					<div className="group cursor-pointer">
						<div className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-200/50 hover:border-emerald-300 overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
							<div className="relative z-10">
								<div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
										></path>
									</svg>
								</div>
								<div
									className="text-4xl font-bold text-emerald-600 mb-2 counter"
									data-target="15"
								>
									0
								</div>
								<div className="text-gray-600 font-medium">Total Funding</div>
								<div className="mt-4 w-full bg-emerald-200 rounded-full h-1">
									<div
										className="bg-emerald-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
										style={{ width: "0%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					<div className="group cursor-pointer">
						<div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-200/50 hover:border-purple-300 overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
							<div className="relative z-10">
								<div className="w-12 h-12 bg-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
								</div>
								<div
									className="text-4xl font-bold text-purple-600 mb-2 counter"
									data-target="85"
								>
									0
								</div>
								<div className="text-gray-600 font-medium">Success Rate</div>
								<div className="mt-4 w-full bg-purple-200 rounded-full h-1">
									<div
										className="bg-purple-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
										style={{ width: "0%" }}
									></div>
								</div>
							</div>
						</div>
					</div>

					<div className="group cursor-pointer">
						<div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-orange-200/50 hover:border-orange-300 overflow-hidden">
							<div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
							<div className="relative z-10">
								<div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
									<svg
										className="w-6 h-6 text-white"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
										></path>
									</svg>
								</div>
								<div
									className="text-4xl font-bold text-orange-600 mb-2 counter"
									data-target="50"
								>
									0
								</div>
								<div className="text-gray-600 font-medium">Expert Mentors</div>
								<div className="mt-4 w-full bg-orange-200 rounded-full h-1">
									<div
										className="bg-orange-500 h-1 rounded-full transition-all duration-1000 group-hover:w-full"
										style={{ width: "0%" }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Description Card */}
				<div className="max-w-5xl mx-auto">
					<div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-200/50 relative overflow-hidden">
						<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
						<div className="relative z-10 text-center">
							<h3 className="text-2xl font-bold text-gray-900 mb-6">
								Building Tomorrow's Agriculture
							</h3>
							<p className="text-lg text-gray-700 leading-relaxed">
								Our commitment to excellence has created a thriving ecosystem
								where agricultural innovation flourishes. Through strategic
								partnerships, cutting-edge technology, and unwavering support,
								we've established ourselves as the premier destination for
								agtech entrepreneurs seeking to transform their vision into
								reality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default function page() {
	useEffect(() => {
		// Initialize counter animations when component mounts
		const timer = setTimeout(() => {
			observeCounters();
		}, 100); // Small delay to ensure DOM is ready

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Header />
			<HeroSection />
			<AboutSection />
			<MissionSection />
			<VisionSection />
			<AboutStatsSection />
		</>
	);
}
