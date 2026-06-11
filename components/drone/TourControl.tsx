import { TourControlsProps } from "@/lib/types"

export default function TourControl({isIntro, step, totalSteps, nextLabel, onNext, onPrevious}: TourControlsProps) {
  return(
    <div className={`flex w-full flex-col gap-3 lg:w-36 lg:flex-col lg:items-stretch ${
          isIntro ? 'items-start sm:flex-row sm:items-center sm:justify-start' : 'items-start sm:flex-row sm:items-center sm:justify-start lg:items-stretch'
        }`}>
          {!isIntro && (
            <div className="flex w-36 gap-2" aria-label="Tour progress">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <span
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index + 1 === step ? 'flex-[2] bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.55)]' : 'flex-1 bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
          <div className="flex w-36 items-center justify-start gap-2 lg:justify-end">
            {!isIntro && (
              <button
                type="button"
                onClick={onPrevious}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-blue-100 transition hover:border-blue-400/50 hover:bg-blue-400/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Previous drone part"
              >
                &larr;
              </button>
            )}
            <button
              type="button"
              onClick={onNext}
              className={`${isIntro ? '' : 'flex-1 justify-center'} flex h-10 cursor-pointer items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/15 px-4 text-sm font-bold text-blue-100 transition hover:border-blue-300/60 hover:bg-blue-500/25 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400`}
            >
              {nextLabel} <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
  )
}