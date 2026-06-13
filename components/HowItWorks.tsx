"use client"

import Image from "next/image";

export default function HowItWorks() {

  return (
		<section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">
			
			<div className="relative z-10 max-w-6xl mx-auto">
				<p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
        			How it Works
        		</p>
				<h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Precise. Clean. Fully {" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        Autonomous
                    </span>
                </h2>

				<div className="w-16 h-[2px] bg-blue-500 mb-16" />

				<div className="grid lg:grid-cols-4 gap-6">
					<div className="flex flex-col items-center rounded-2xl p-6 border border-gray-400 bg-white/[0.03]">
						{/* This is the first step of the drone's sequential process*/}
						<h2 className="min-h-[4rem] text-blue-400 font-medium">
							Deployment
						</h2>
						<p className="min-h-[4rem] text-sm"> 
							The Drone is prepared and ready for autonomous, precision cleaning.							
						</p>
						{/* An image tag that will showcase a 3d render of the drone when provided */}
						<Image
							src = "/images/drone.jpg"
							width={180}
							height={180}
							alt="Step 1: Drone placeholder"
							className="mt-5"
						/>
					</div>
					
					<div className="flex flex-col items-center rounded-2xl p-6 border border-gray-400 bg-white/[0.03]">
						{/* This is the second step of the dron'es sequential process*/}
						<h2 className="min-h-[4rem] text-blue-400 font-medium">
							Assessment
						</h2>
						<p className="min-h-[4rem] text-sm"> 
							The Drone will analyze the windows with ultimate precision, so no spec is left behind.
						</p>
						{/* An image tag that will showcase a 3d render of the drone when provided */}
						<Image
							src = "/images/drone.jpg"
							width={180}
							height={120}
							alt="Step 2: Drone placeholder"
							className="mt-5"
						/>
					</div>

					<div className="flex flex-col items-center rounded-2xl p-6 border border-gray-400 bg-white/[0.03]">
						{/* This is the third step of the drone's sequential process*/}
						<h2 className="min-h-[4rem] text-blue-400 font-medium">
							Cleaning
						</h2>
						<p className="min-h-[4rem] text-sm">
							Using its payload tank and squeegee, the drone delivers a precise and chemical clean. Leaving no trace behind.
						</p>
						{/* An image tag that will showcase a 3d render of the drone when provided */}
						<Image
							src = "/images/drone.jpg"
							width={180}
							height={120}
							alt="Step 3: Drone placeholder"
							className="mt-5"
						/>
					</div>

					<div className="flex flex-col items-center rounded-2xl p-6 border border-gray-400 bg-white/[0.03]">
						{/* This is the fourth step of the drone's sequential process*/}
						<h2 className="min-h-[4rem] text-blue-400 font-medium">
							Feedback Report
						</h2>
						<p className="min-h-[4rem] text-sm">
							A full cleaning report is sent to the client, documenting every surface cleaned and flagging any issues found.
						</p>
						{/* An image tag that will showcase a 3d render of the drone when provided */}
						<Image
							src = "/images/drone.jpg"
							width={180}
							height={120}
							alt="Step 4: Drone placeholder"
							className="mt-5"
						/>
					</div>
				</div>
			</div>	
		</section>
	)
}