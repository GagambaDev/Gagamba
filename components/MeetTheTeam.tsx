"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { teams } from "@/lib/team";

export default function MeetTheTeam() {
  const { ref, fadeTop } = useScrollReveal();
  const [selectedTeamId, setSelectedTeamId] = useState(teams[0].id);
  return (
    <section id="founders" className="px-6 pt-16 md:px-8 md:pt-30">
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
          Founders
        </h2>

        <div style={fadeTop(0.1)} role="tablist" aria-label="Teams" className="mt-6 flex gap-2">
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
                onClick={() => setSelectedTeamId(team.id)}
                className={`h-11 cursor-pointer rounded-none px-5 text-[15px] font-semibold ${
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

        <div id="founders-panel" role="tabpanel" aria-labelledby={`founders-tab-${selectedTeamId}`}>
        </div>
      </div>
    </section>
  );
}
