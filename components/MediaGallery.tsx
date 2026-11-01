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
                </div>
            </div>
        </section>
    );
}