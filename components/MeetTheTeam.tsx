"use client";

import memberimg from '@/public/images/logo.png'

const team = [
    {
        name: "Vaughn Guintu",
        role: "Mechanical Engineering",
        bio: "Leads the physical design and build of the Gagamba drone. Focused on making sure the hardware is sturdy, precise, and flight-ready.",
        initials: "VG",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Richies Huynh",
        role: "Computer Science",
        bio: "Works on the software side of the drone. Helps connect the different systems together and keeps the codebase running smoothly.",
        initials: "RH",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Aarash Gohari",
        role: "Computer Science",
        bio: "One of the hands-on builders of the drone's software. Helped develop and put together the codebase that powers how the drone thinks and operates.",
        initials: "AG",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Nathaniel Ordonio",
        role: "Civil Engineering",
        bio: "Brings a structural perspective to the project. Helps the team understand how the drone will interact with real buildings and surfaces.",
        initials: "NO",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Tony Tonoyan",
        role: "Computer Science",
        bio: "Contributes to the software and embedded systems work. Helps bridge the gap between code and the physical hardware on the drone.",
        initials: "TT",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Maddox Dolor",
        role: "Civil Engineering",
        bio: "Focused on how the drone applies to real-world infrastructure. Thinks about deployment from a practical, on-the-ground perspective.",
        initials: "MD",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Khristian Ordonio",
        role: "Political Science",
        bio: "Handles the regulatory and policy side of the project. Researches the legal landscape around drone usage and helps navigate compliance requirements.",
        initials: "KO",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
    {
        name: "Tony Ferrar",
        role: "Mentor",
        bio: "Mathematics professor specializing in aerospace. Brings deep technical expertise to the team, guiding the math and physics behind the drone's flight and control systems.",
        initials: "TF",
        img: <img src={memberimg.src} alt="member photo"></img>,
    },
];

export default function MeetTheTeam() {
    return (
        <section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">

            {/* Glow — left side, echoing the Hero */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 15% 70%, rgba(22,65,185,0.6) 0%, rgba(12,35,110,0.25) 50%, transparent 72%)",
                }}
            />

            {/* Dot grid texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 max-w-6xl mx-auto">

                <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
                    The People Behind Gagamba
                </p>

                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Meet the{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        team
                    </span>
                </h2>

                <div className="w-16 h-[2px] bg-blue-500 mb-16" />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <div
                            key={member.name}
                            className="group relative rounded-2xl p-6 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-blue-500/40 transition-all duration-300"
                        >
                            <div 
                            >
                                {member.img}
                            </div>
                            <div
                                
                                className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mb-5 border border-blue-500/30 group-hover:border-blue-400/60 transition-colors duration-300"
                                style={{
                                    background:
                                        "radial-gradient(circle at 30% 30%, rgba(79,142,255,0.25) 0%, rgba(22,65,185,0.1) 100%)",
                                    color: "#a5c0ff",
                                }}
                            >
                                {member.initials}
                            </div>

                            <h3 className="text-white font-bold text-lg leading-tight mb-1">
                                {member.name}
                            </h3>
                            <p className="text-blue-400 text-xs uppercase tracking-widest mb-4 font-medium">
                                {member.role}
                            </p>

                            <div className="w-8 h-[1px] bg-blue-500/40 mb-4 group-hover:w-12 transition-all duration-300" />

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {member.bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050810] to-transparent pointer-events-none" />
        </section>
    );
}