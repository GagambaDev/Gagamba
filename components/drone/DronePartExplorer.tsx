'use client';
import { useRef, useState } from 'react';
import PartDescription from '@/components/drone/PartDescription';
import { DronePart } from '@/lib/types';
import DroneImageStage from '@/components/drone/DroneImageStage';
import { useDronePartAutoScroll } from '@/components/drone/useDronePartAutoScroll';

type DronePartExplorerProps = {
  parts: DronePart[];
};

export default function DronePartExplorer({ parts }: DronePartExplorerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hasStartedTour, setHasStartedTour] = useState(false);
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);

  const selectedPart = parts[selectedPartIndex] ?? null;

  useDronePartAutoScroll(scrollContainerRef, selectedPart, hasStartedTour);

  const startTour = () => {
    setSelectedPartIndex(0);
    setHasStartedTour(parts.length > 0);
  };

  const resetTour = () => {
    setSelectedPartIndex(0);
    setHasStartedTour(false);
  };

  const selectPart = (index: number) => {
    if (!parts[index]) {
      return;
    }

    setSelectedPartIndex(index);
    setHasStartedTour(true);
  };

  const showNextPart = () => {
    if (parts.length === 0) {
      return;
    }

    const nextIndex = (selectedPartIndex + 1) % parts.length;
    selectPart(nextIndex);
  };

  const showPreviousPart = () => {
    if (parts.length === 0) {
      return;
    }

    const previousIndex = (selectedPartIndex - 1 + parts.length) % parts.length;
    selectPart(previousIndex);
  };

  return (
    <div className="relative space-y-4 transition-all duration-300">
      <div onClick={(event) => event.stopPropagation()}>
        <PartDescription
          part={hasStartedTour ? selectedPart : null}
          step={hasStartedTour ? selectedPartIndex + 1 : 0}
          totalSteps={parts.length}
          onNext={hasStartedTour ? showNextPart : startTour}
          onPrevious={showPreviousPart}
          onReset={resetTour}
        />
      </div>

      <DroneImageStage
        isTourActive={hasStartedTour}
        parts={parts}
        scrollContainerRef={scrollContainerRef}
        selectedPart={selectedPart}
        onSelectPart={selectPart}
      />
    </div>
  );
}
