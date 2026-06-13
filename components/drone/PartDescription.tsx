/**
 * This is the description panel for the selected drone part.
 * It decides whether the panel should show the intro state or the active tour
 * state, then passes the correct title, description, progress, and controls to
 * the smaller PartDescription components.
 */

import { PartDescriptionProps } from '@/lib/types';
import PartDescriptionContent from '@/components/drone/PartDescriptionContent';
import PartDescriptionControls from '@/components/drone/PartDescriptionControls';
import PartDescriptionPanelDecoration from '@/components/drone/PartDescriptionPanelDecoration';
import PartDescriptionResetButton from '@/components/drone/PartDescriptionResetButton';

const INTRO_TITLE = 'Explore Gagamba';
const INTRO_DESCRIPTION = 'Start the guided tour to walk through the systems that let Gagamba fly, clean, see, and operate without a tether.';
const INTRO_BUTTON = 'Start tour';
const TOUR_NEXT = 'Next';

export default function PartDescription({
  part,
  step = 1,
  totalSteps = 1,
  onNext,
  onPrevious,
  onReset,
}: PartDescriptionProps) {
  const isIntro = !part;                                        // This determines if we are in the "tour" or the default mode. True == Tour not started
  const title = part?.title ?? INTRO_TITLE;                     // Get the title of the title of the part. If there is no title than display the intro title.
  const description = part?.description ?? INTRO_DESCRIPTION;   // Get the description of the part.
  const nextLabel = isIntro ? INTRO_BUTTON : TOUR_NEXT;         // Determine if the button text is starting the tour or clicking next.

  return (
    <aside className="relative z-30 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050810] p-4 text-white shadow-[0_24px_70px_rgba(4,6,15,0.34)] sm:p-5">
      <PartDescriptionPanelDecoration />

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        {!isIntro && <PartDescriptionResetButton onReset={onReset} />}

        <PartDescriptionContent title={title} description={description} isIntro={isIntro} />

        <PartDescriptionControls
          isIntro={isIntro}
          step={step}
          totalSteps={totalSteps}
          nextLabel={nextLabel}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      </div>
    </aside>
  );
}
