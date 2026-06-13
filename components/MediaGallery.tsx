"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import PICimg1 from '@/public/images/gallery/PresInovChal1.jpg'
import BFimg3 from '@/public/images/gallery/Photo1.png'
import PICimg2 from '@/public/images/gallery/PIC1.png'
import PICimg3 from '@/public/images/gallery/PIC2.png'
import PICimg4 from '@/public/images/gallery/PIC3.png'
import PICimg5 from '@/public/images/gallery/PIC4.png'
import PICimg6 from '@/public/images/gallery/PIC5.png'
import BTSimg2 from '@/public/images/gallery/Early1.png'
import BTSimg3 from '@/public/images/gallery/Early2.png'
import BTSimg1 from '@/public/images/gallery/Early3.png'
import BFimg1 from '@/public/images/gallery/Blackfire1.png'
import BFimg2 from '@/public/images/gallery/Blackfire2.png'

interface StaticImageItem {
  source: StaticImageData; 
  alt: string;
}

export default function MediaGallery() {
    const gallery: StaticImageItem[]=[
        { source: PICimg1, alt: "Presidential Innovation Challenge" },
        { source: PICimg2, alt: "Presidential Innovation Challenge" },
        { source: PICimg3, alt: "Presidential Innovation Challenge" },
        { source: PICimg4, alt: "Presidential Innovation Challenge" },
        { source: PICimg5, alt: "Presidential Innovation Challenge" },
        { source: PICimg6, alt: "Presidential Innovation Challenge" },
        
        { source: BFimg1, alt: "Securing the Office" },
        { source: BFimg2, alt: "Securing the Office" },
        { source: BFimg3, alt: "Securing the Office" },
    
        { source: BTSimg1, alt: "Behind the Scenes" },
        { source: BTSimg2, alt: "Behind the Scenes" },
        { source: BTSimg3, alt: "Behind the Scenes" }
    ];
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    //logic to navigate to the previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? gallery.length - 1 : prevIndex - 1
        );
    };
    //logic to navigate to the next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === gallery.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentImage = gallery[currentIndex];

    return (
        <section className="relative bg-[#04060f] text-white overflow-hidden py-32 px-6">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 50% at 15% 70%, rgba(22,65,185,0.6) 0%, rgba(12,35,110,0.25) 50%, transparent 72%)",
                }}
            />
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
            </div>

            <div className="relative w-fit mx-auto">
                <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
                    <div className="relative w-[800px] h-96 md:h-[500px] border rounded-xl overflow-hidden shadow-lg bg-gray-900">
                
                        <Image
                            src={currentImage.source}
                            alt={currentImage.alt}
                            className="object-contain rounded-xl"
                            style={{ maxWidth: '800px', maxHeight: '550px', height: 'auto', display: 'block', margin: '0 auto', position: 'relative', zIndex: 0 }}
                            onMouseOver={e => e.currentTarget.style.filter = 'brightness(1.1)'}
                            onMouseOut={e => e.currentTarget.style.filter = 'brightness(0.9) hue-rotate(0deg) saturate(1)'}
                            key={currentIndex} 
                            
                        />
                        <div style={{position: 'absolute', bottom: '16px', right: '16px', left: 'auto',
                            transform: 'none', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#ffffff',
                            padding: '4px 12px', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                            zIndex: 20}}>
                            {currentIndex + 1} / {gallery.length}
                        </div>
                    </div> 
                </div>
            </div>
 
            <button
                onClick={handlePrev}
                style={{ width: '40px', left: '49%', position: 'relative', zIndex: 0 }}
                className="bg-black/70 text-white p-2 rounded-full w-10 h-10 border-none cursor-pointer shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-white/[0.06] hover:border-blue-500/40"
                aria-label="Previous image"
            >
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06L5.56 10.5H21a.75.75 0 010 1.5H5.56l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>
            </button>
            <button
                onClick={handleNext}
                style={{  width: '40px', left: '51%', position: 'relative', zIndex: 0}}
                className="bg-black/70 text-white p-2 rounded-full w-10 h-10 border-none cursor-pointer transition-colors hover:scale-105 active:scale-95 hover:bg-white/[0.06] hover:border-blue-500/40"
                aria-label="Next image"
            >
                <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H3a.75.75 0 010-1.5h15.44l-5.47-5.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                </svg>
            </button>
                
            <p className="mt-4 text-gray-600 font-medium text-center"
                style={{display: 'block', position: 'relative'}}>
                {currentImage.alt}
            </p>

            {/* Seamless background color gradient transition at the bottom of this component. */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#04060f] to-transparent pointer-events-none" />
        </section>
    );
}