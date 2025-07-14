"use client";

import { Clock, Users } from "lucide-react";
import React from "react";
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

export default function page() {
	return (
		<>
			<Header />
			<HeroSection />
		</>
	);
}

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
