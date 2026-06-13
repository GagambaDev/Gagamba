/**
 * This is the text content inside the drone part description panel.
 * It displays the current panel title and description, and adjusts spacing when
 * the panel is showing the intro instead of a selected DronePart.
 */

import { Space_Grotesk } from 'next/font/google';
import { PartDescriptionContentProps } from '@/lib/types';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export default function PartDescriptionContent({
  title,
  description,
  isIntro,
}: PartDescriptionContentProps) {
  return (
    <div className={`max-w-3xl ${isIntro ? '' : 'pr-10 lg:pr-0'}`}>
      <h3
        className="text-xl font-black leading-tight text-transparent bg-clip-text sm:text-2xl md:text-3xl"
        style={{
          backgroundImage: 'linear-gradient(90deg, #ffffff 0%, #a5c0ff 55%, #4f8eff 100%)',
        }}
      >
        {title}
      </h3>
      <p
        className={`${spaceGrotesk.className} mt-2 text-sm leading-6 text-[#D5D2F7]/85 sm:mt-3 md:text-base md:leading-7`}
      >
        {description}
      </p>
    </div>
  );
}
