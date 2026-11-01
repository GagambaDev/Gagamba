"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

import presInovChal1 from '@/public/images/gallery/PresInovChal1.jpg'
import photo1 from '@/public/images/gallery/Photo1.png'
import pic1 from '@/public/images/gallery/PIC1.png'
import pic2 from '@/public/images/gallery/PIC2.png'
import pic3 from '@/public/images/gallery/PIC3.png'
import pic4 from '@/public/images/gallery/PIC4.png'
import pic5 from '@/public/images/gallery/PIC5.png'
import early1 from '@/public/images/gallery/Early1.png'
import early2 from '@/public/images/gallery/Early2.png'
import early3 from '@/public/images/gallery/Early3.png'
import blackfire1 from '@/public/images/gallery/Blackfire1.png'
import blackfire2 from '@/public/images/gallery/Blackfire2.png'

interface StaticImageItem {
  source: StaticImageData;
  alt: string;
}

export default function MediaGallery() {
    const gallery: StaticImageItem[] = [
        { source: presInovChal1, alt: "President's Innovation Challenge" },
        { source: pic3, alt: "President's Innovation Challenge" },
        { source: pic4, alt: "President's Innovation Challenge" },
        { source: pic2, alt: "President's Innovation Challenge" },
        { source: pic5, alt: "President's Innovation Challenge" },
        { source: pic1, alt: "President's Innovation Challenge" },

        { source: blackfire1, alt: "Securing the Office" },
        { source: photo1, alt: "Securing the Office" },
        { source: blackfire2, alt: "Securing the Office" },

        { source: early2, alt: "Behind the Scenes" },
        { source: early3, alt: "Behind the Scenes" },
        { source: early1, alt: "Behind the Scenes" }
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

    const { ref, fadeTop } = useScrollReveal();

    return (
        <section id="media-gallery" className="px-6 pt-12 pb-16 md:px-8 md:pt-16 md:pb-30">
            <div ref={ref} className="mx-auto max-w-[1200px]">
                <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
                    Media Gallery
                </h2>

                <div className="mt-10">
                    {/* Shrinks to fit the screen width, up to 500px tall, keeping the photo's shape */}
                    <Image
                        src={currentImage.source}
                        alt={currentImage.alt}
                        className="mx-auto block h-auto max-h-[500px] w-auto max-w-full"
                        key={currentIndex} // Forces smooth fade or reset on change
                    />
                    <p className="mt-3 text-center text-small text-onyx-70">
                        {currentImage.alt}
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-6">
                        <button
                            type="button"
                            onClick={handlePrev}
                            aria-label="Previous image"
                            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-none border-[1.5px] border-sapphire bg-white text-sapphire transition-colors duration-200 hover:bg-pearl"
                        >
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 010 1.06L5.56 10.5H21a.75.75 0 010 1.5H5.56l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* aria-live makes screen readers announce the new count whenever it changes.
                            They hear "Image 2 of 12" while everyone else sees "2 / 12". */}
                        <p aria-live="polite" className="w-16 text-center text-small font-semibold text-onyx-70 tabular-nums">
                            <span className="sr-only">
                                Image {currentIndex + 1} of {gallery.length}
                            </span>
                            <span aria-hidden="true">
                                {currentIndex + 1} / {gallery.length}
                            </span>
                        </p>

                        <button
                            type="button"
                            onClick={handleNext}
                            aria-label="Next image"
                            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-none border-[1.5px] border-sapphire bg-white text-sapphire transition-colors duration-200 hover:bg-pearl"
                        >
                            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H3a.75.75 0 010-1.5h15.44l-5.47-5.47a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}