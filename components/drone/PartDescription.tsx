import { PartDescriptionProps } from '@/lib/types';
import PartDescriptionContent from '@/components/drone/PartDescriptionContent';
import PartDescriptionControls from '@/components/drone/PartDescriptionControls';
import PartDescriptionPanelDecoration from '@/components/drone/PartDescriptionPanelDecoration';
import PartDescriptionResetButton from '@/components/drone/PartDescriptionResetButton';

const INTRO_TITLE = 'Explore Gagamba';
const INTRO_COPY =
  'Start the guided tour to walk through the systems that let Gagamba fly, clean, see, and operate without a tether.';

export default function PartDescription({
  part,
  step = 1,
  totalSteps = 1,
  onNext,
  onPrevious,
  onReset,
}: PartDescriptionProps) {
  const isIntro = !part;
  const title = part?.title ?? INTRO_TITLE;
  const copy = part?.tourCopy ?? INTRO_COPY;
  const nextLabel = isIntro ? 'Start tour' : 'Next';

  return (
    <aside className="relative z-30 w-full overflow-hidden rounded-xl border border-white/10 bg-[#050810] p-4 text-white shadow-[0_24px_70px_rgba(4,6,15,0.34)] sm:p-5">
      <PartDescriptionPanelDecoration />

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        {!isIntro && <PartDescriptionResetButton onReset={onReset} />}

        <PartDescriptionContent title={title} copy={copy} isIntro={isIntro} />

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
