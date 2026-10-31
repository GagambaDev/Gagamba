"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { teams } from "@/lib/team";

export default function MeetTheTeam() {
  const { ref, fadeTop } = useScrollReveal();
  const [selectedTeamId, setSelectedTeamId] = useState(teams[0].id);

  // Left/right arrows move to the previous/next tab (wrapping around), Home and End jump to the first/last
  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const currentIndex = teams.findIndex((team) => team.id === selectedTeamId);
    let nextIndex: number;
    switch (event.key) {
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % teams.length;
        break;
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + teams.length) % teams.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = teams.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault(); // stops Home/End from scrolling the page
    const nextTeam = teams[nextIndex];
    setSelectedTeamId(nextTeam.id);
    document.getElementById(`founders-tab-${nextTeam.id}`)?.focus();
  };

  return (
    <section id="founders" className="px-6 pt-16 md:px-8 md:pt-30">
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
          Founders
        </h2>

        <div style={fadeTop(0.1)} className="relative mt-6">
          {/* Scrolls sideways when the tabs don't fit. The 5px padding (cancelled by the
              negative margin) leaves room so the focus outline isn't cut off. */}
          <div
            role="tablist"
            aria-label="Teams"
            onKeyDown={handleTabKeyDown}
            className="-m-[5px] flex gap-2 overflow-x-auto p-[5px]"
          >
            {teams.map((team) => {
              const selected = team.id === selectedTeamId;
              return (
                <button
                  key={team.id}
                  id={`founders-tab-${team.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="founders-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setSelectedTeamId(team.id)}
                  className={`h-11 shrink-0 cursor-pointer rounded-none px-5 text-[15px] font-semibold ${
                    selected
                      ? "bg-sapphire text-white"
                      : "bg-pearl text-onyx hover:ring-[1.5px] hover:ring-inset hover:ring-sapphire"
                  }`}
                >
                  {team.name}
                </button>
              );
            })}
          </div>

          {/* White fade on the right edge hints that there are more tabs to scroll to */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -right-[5px] w-12 bg-linear-to-l from-white lg:hidden"
          />
        </div>

        <div
          id="founders-panel"
          role="tabpanel"
          aria-labelledby={`founders-tab-${selectedTeamId}`}
          tabIndex={0}
        >
        </div>
      </div>
    </section>
  );
}
