"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

import img1 from '@/public/images/gallery/PresInovChal1.jpg'
import img2 from '@/public/images/gallery/Photo1.png'
import img3 from '@/public/images/gallery/PIC1.png'
import img4 from '@/public/images/gallery/PIC2.png'
import img5 from '@/public/images/gallery/PIC3.png'
import img6 from '@/public/images/gallery/PIC4.png'
import img7 from '@/public/images/gallery/PIC5.png'
import img8 from '@/public/images/gallery/Early1.png'
import img9 from '@/public/images/gallery/Early2.png'
import img10 from '@/public/images/gallery/Early3.png'
import img11 from '@/public/images/gallery/Blackfire1.png'
import img12 from '@/public/images/gallery/Blackfire2.png'

interface StaticImageItem {
  source: StaticImageData; 
  alt: string;
}

export default function MediaGallery() {
    const gallery: StaticImageItem[]=[
        { source: img1, alt: "Presidential Innovation Challenge" },
        { source: img5, alt: "Presidential Innovation Challenge" },
        { source: img6, alt: "Presidential Innovation Challenge" },
        { source: img4, alt: "Presidential Innovation Challenge" },
        { source: img7, alt: "Presidential Innovation Challenge" },
        { source: img3, alt: "Presidential Innovation Challenge" },
        
        { source: img11, alt: "Securing the Office" },
        { source: img2, alt: "Securing the Office" },
        { source: img12, alt: "Securing the Office" },
    
        { source: img9, alt: "Behind the Scenes" },
        { source: img10, alt: "Behind the Scenes" },
        { source: img8, alt: "Behind the Scenes" }
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
            </div>
            <div className="relative w-fit mx-auto">
            <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
            <div className="relative w-800 h-96 md:h-[500px] border rounded-xl overflow-hidden shadow-lg bg-gray-900">            
                
                <Image
                    src={currentImage.source}
                    alt={currentImage.alt}
                    className="object-contain rounded-xl"
                    style={{ maxWidth: '800px', maxHeight: '550px', height: 'auto', display: 'block', margin: '0 auto', position: 'relative', zIndex: 0 }}
                    key={currentIndex} // Forces smooth fade or reset on change
                    
                />
                <div style={{position: 'absolute', bottom: '16px', right: '16px', left: 'auto',
                    transform: 'none', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#ffffff',
                    padding: '4px 12px', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: 500,
                    zIndex: 20}}>            
                    {currentIndex + 1} / {gallery.length}
                </div>
            </div> 
            </div>
            
                <div className="flex justify-center items-center gap-6 mt-3 w-full hover:bg-black/95 hover:scale-105 hover:shadow-md active:scale-95">
                    <button
                        onClick={handlePrev}
                        className="bg-black/70 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 border-none cursor-pointer shadow-sm transition-all duration-200 hover:bg-black/95 hover:scale-105 hover:shadow-md active:scale-95"
                        aria-label="Previous image"
                    >
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06L5.56 10.5H21a.75.75 0 010 1.5H5.56l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                        
                    <button
                        onClick={handleNext}
                        className="bg-black/70 hover:bg-black/90 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 border-none cursor-pointer transition-colors"
                        aria-label="Next image"
                    >
                        <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H3a.75.75 0 010-1.5h15.44l-5.47-5.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                
            
            </div>
               
                
            
                
               
            <p className="mt-4 text-gray-600 font-medium text-center">
                {currentImage.alt}
            </p>
            
            </div>
             
            
            
            
        </section>
        
    );
}