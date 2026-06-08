"use client";

import img1 from '@/app/about/public/images/gallery/PresInovChal1.jpg'
import img2 from '@/app/about/public/images/gallery/Photo1.png'
import img3 from '@/app/about/public/images/gallery/PIC1.png'
import img4 from '@/app/about/public/images/gallery/PIC2.png'
import img5 from '@/app/about/public/images/gallery/PIC3.png'
import img6 from '@/app/about/public/images/gallery/PIC4.png'
import img7 from '@/app/about/public/images/gallery/PIC5.png'
import img8 from '@/app/about/public/images/gallery/Early1.png'
import img9 from '@/app/about/public/images/gallery/Early2.png'
import img10 from '@/app/about/public/images/gallery/Early3.png'
import img11 from '@/app/about/public/images/gallery/Blackfire1.png'
import img12 from '@/app/about/public/images/gallery/Blackfire2.png'

export default function MediaGallery() {
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
                    Company and Event Photos
                </p>

                <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
                    Media{" "}
                    <span
                        className="text-transparent bg-clip-text"
                        style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
                    >
                        Gallery
                    </span>
                </h2>
                <div 
                    style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: "16px", }}>
                    
                        <img src={img1.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img2.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img3.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img4.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img5.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img6.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img7.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img8.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img9.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img10.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img11.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                        <img src={img12.src} alt="member photo" width={300} height={600} style={{ clipPath: 'inset(7px round 7px)'}}></img>
                    
                </div>
                
            </div>
            
        </section>
        
    );
}