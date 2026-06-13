/**
 * This hook keeps the drone image horizontally aligned with the active tour part.
 * When the tour has not started it centers the image, and when a DronePart is
 * selected it scrolls that part toward the middle of the visible image area.
 */

'use client';

import { RefObject, useEffect } from 'react';
import { DronePart } from '@/lib/types';

export function useDronePartAutoScroll(
  scrollContainerRef: RefObject<HTMLDivElement | null>,
  selectedPart: DronePart | null,
  isTourActive: boolean,
) {
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) {
      return;
    }

    if (!isTourActive || !selectedPart) {
      centerScrollContainer(scrollContainer);
      return;
    }

    scrollToPart(scrollContainer, selectedPart);
  }, [isTourActive, scrollContainerRef, selectedPart]);
}

function centerScrollContainer(scrollContainer: HTMLDivElement) {
  const centerLeft = (scrollContainer.scrollWidth - scrollContainer.clientWidth) / 2;

  scrollContainer.scrollTo({
    left: Math.max(0, centerLeft),
    behavior: 'smooth',
  });
}

function scrollToPart(scrollContainer: HTMLDivElement, part: DronePart) {
  const partX = (Number.parseFloat(part.right) / 100) * scrollContainer.scrollWidth;
  const targetLeft = partX - scrollContainer.clientWidth / 2;

  scrollContainer.scrollTo({
    left: Math.max(0, targetLeft),
    behavior: 'smooth',
  });
}
