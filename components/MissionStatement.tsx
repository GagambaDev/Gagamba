"use client";

export default function MissionStatement() {
    return (
        <section>
            {/* Right-side glow code */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 65% 55% at 80% 55%, rgba(22,65,185,0.75) 0%, rgba(12,35,110,0.35) 45%, transparent 70%)",
                }}
            />

            Setup configurations for outermost container for title, tagline, and description text
            <div className="relative z-10 max-w-6xl mx-auto pt-38 pb-8">
                {/* Section Title Configurations */}
                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                    Mission Statement
                </p>

                {/* Tagline */}
                <div className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    {/* First word */}
                    Safer.{" "}

                    {/* Second word with gradient color */}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)"
                        }}
                    >
                        Smarter.{" "}
                    </span>

                    {/* Setup the third word to start on the next line */}
                    <br></br>

                    {/* Third word */}
                    Sustainable.
                </div>

                {/* Blue line separator */}
                <div className="w-16 h-[2px] bg-blue-500 mb-1" />

                {/* Official Mission Statement Content Starts Here: */}
                {/* Setup configurations for description text within the outermost container area. */}
                <div className="space-y-5 text-gray-300 text-lg leading-relaxed flex justify-center items-center">
                    {/* First paragraph of the mission statement, describing the company's commitment to safety, innovation, and sustainability in high-rise maintenance. */}
                    <p
                        style={{
                            display: 'block',
                            margin: ' 40px 13px ',
                            position: 'relative'
                        }}
                    >
                        At Gagamba, we are engineering a safer, greener, and more efficient future for high-rise property maintenance.
                        By deploying advanced drone technology, we eliminate the need for traditional at-height crews, ensuring that human lives are never put at risk on
                        dangerous high-rise structures.
                    </p>

                    {/* Second paragraph of the mission statement, highlighting the company's use of eco-friendly design and AI-powered software to optimize cleaning patterns and conserve water. */}
                    <p
                        style={{
                            display: 'block',
                            margin: ' 40px 13px ',
                            position: 'relative'
                        }}
                    >
                        Our EPA 608, OSHA 10 Construction, OSHA 10 Manufacturing, and forklifp led engineering team is qualified to work though a FAA part 107 license.
                        Utilzing eco-friendly design to minimize our environmental impact, our drone uses AI-powered software, calculating optimal cleaning patterns
                        to maximize efficiency and conserving up to 29 times more water than current cleaning drones in the market.
                    </p>
                </div>
            </div>

            {/* Seamless background color gradient transition at the bottom of this component. */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#04060f] to-transparent pointer-events-none" />

        </section>
    );
}