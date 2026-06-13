export type DronePart = {
  id: string;
  title: string;
  down: string;
  right: string;
  description: string;
  spotlightRadius?: string;
};

export type PartDescriptionProps = {
  part: DronePart | null;
  step?: number;
  totalSteps?: number;
  onNext?: () => void;
  onPrevious?: () => void;
  onReset?: () => void;
};

export type PartDescriptionControlsProps = {
  isIntro: boolean;
  step: number;
  totalSteps: number;
  nextLabel: string;
  onNext?: () => void;
  onPrevious?: () => void;
};

export type PartDescriptionContentProps = {
  title: string;
  description: string;
  isIntro: boolean;
};

export type DroneHotspotProps = {
  active?: boolean;
};
