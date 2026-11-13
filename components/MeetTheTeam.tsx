"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { people, sortMembers, teams, type Person } from "@/lib/team";

// Which team the link points to, e.g. "software" for /about#founders-software (null if none)
function getLinkedTeamId(): string | null {
  const linkedTeam = teams.find((team) => window.location.hash === `#founders-${team.id}`);
  if (!linkedTeam) {
    return null;
  }
  return linkedTeam.id;
}

// The server can't see the # part of the link, so it always starts with no linked team
function getServerLinkedTeamId(): string | null {
  return null;
}

// Re-reads the link whenever its # part changes: typing a new one, Back/Forward, or selecting a tab
function subscribeToLinkChanges(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
  };
}

export default function MeetTheTeam() {
  const { ref, fadeTop } = useScrollReveal();
  // The link decides which tab is selected; with no team in the link, C-Suite is selected
  const linkedTeamId = useSyncExternalStore(subscribeToLinkChanges, getLinkedTeamId, getServerLinkedTeamId);
  const selectedTeamId = linkedTeamId ?? teams[0].id;
  const selectedTeam = teams.find((team) => team.id === selectedTeamId) ?? teams[0];
  const [tabsScrolledToStart, setTabsScrolledToStart] = useState(true);
  const [tabsScrolledToEnd, setTabsScrolledToEnd] = useState(false);

  // Hides each edge fade once the tabs are scrolled all the way to that side.
  // The 1px leeway allows for browsers that report sub-pixel scroll positions.
  const handleTabsScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth, scrollWidth } = event.currentTarget;
    setTabsScrolledToStart(scrollLeft <= 1);
    setTabsScrolledToEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  // Opening a link like /about#founders-software scrolls down to the Founders section
  // Only works on page load
  useEffect(() => {
    if (getLinkedTeamId() !== null) {
      document.getElementById("founders")?.scrollIntoView();
    }
  }, []);

  // Selects a tab by updating the link, without jumping the page or adding a Back-button step.
  // replaceState doesn't fire "hashchange" on its own, so we fire it to update the selected tab.
  const selectTeam = (teamId: string) => {
    window.history.replaceState(null, "", `#founders-${teamId}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  };

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
    selectTeam(nextTeam.id);
    document.getElementById(`founders-tab-${nextTeam.id}`)?.focus();
  };

  return (
    <section id="founders" className="px-6 pt-12 md:px-8 md:pt-20">
      <div ref={ref} className="mx-auto max-w-[1200px]">
        <h2 style={fadeTop(0)} className="text-h2 text-sapphire">
          Founding Team
        </h2>

        <div style={fadeTop(0.1)} className="relative mt-6">
          {/* Scrolls sideways when the tabs don't fit. The 5px padding (cancelled by the
              negative margin) leaves room so the focus outline isn't cut off. */}
          <div
            role="tablist"
            aria-label="Teams"
            onKeyDown={handleTabKeyDown}
            onScroll={handleTabsScroll}
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
                  onClick={() => selectTeam(team.id)}
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

          {/* White fades on each edge hint that there are more tabs to scroll to in that direction */}
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 -left-[5px] w-12 bg-linear-to-r from-white transition-opacity duration-200 lg:hidden ${
              tabsScrolledToStart ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            aria-hidden="true"
            className={`pointer-events-none absolute inset-y-0 -right-[5px] w-12 bg-linear-to-l from-white transition-opacity duration-200 lg:hidden ${
              tabsScrolledToEnd ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>

        <div
          id="founders-panel"
          role="tabpanel"
          aria-labelledby={`founders-tab-${selectedTeamId}`}
          tabIndex={0}
          className="mt-10"
        >
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-5">
            {sortMembers(selectedTeam.members).map((member) => {
              const person: Person = people[member.person];
              return (
                <li key={member.person}>
                  {/* The headshot and logo are hidden from screen readers (empty alt)
                      because the name is right below, so it would otherwise be read twice */}
                  <div className="relative aspect-square bg-pearl">
                    {person.headshot ? (
                      <Image
                        src={person.headshot}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      // Stand-in until their headshot arrives
                      <Image
                        src="/brand/icon-sapphire.svg"
                        alt=""
                        width={440}
                        height={428}
                        className="absolute inset-0 m-auto h-auto w-2/5"
                      />
                    )}
                  </div>
                  <p className="mt-4 text-lg font-semibold">
                    {person.name}
                  </p>
                  {/* whitespace-pre-line shows a "\n" in a role (see lib/team.ts) as a line break */}
                  <p className="whitespace-pre-line text-small text-onyx-70">
                    {member.role}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
