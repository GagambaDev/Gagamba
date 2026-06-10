"use client"
// stats for the pitch deck cards
const stats = [
  { value: "29x", label: "Less water used", 
    sub: "Gagamba uses 0.07 GPM, vs. 1.8-2.5 GPM, the industry standard" },
  { value: "$240K", label: "Saved per client annually", 
    sub: "Gagamba reduces annual operating costs to $300,000, compared to $540,000 for traditional methods" },
  { value: "$48M", label: "Serviceable market", 
    sub: "$3.9B Total Addressable Market for Las Vegas High-Rises" },
];
//data for the side by side comparison
const rows = [
  { label: "Access method", 
    manual: "Rope access & scaffolding, workers suspended at height", 
    gagamba: "Autonomous drone, zero personnel on the building face" },
  { label: "Annual cost", 
    manual: "$540,000 / year", gagamba: "$300,000 / year" },
  { label: "Water consumption", 
    manual: "1.8-2.5 GPM", gagamba: "0.07 GPM (~29x less)" },
];

export default function ProblemVsSolution() {
  return (
    <section className="pvs-section">
      <div className="pvs-inner">
        <div className="pvs-intro">
          <p className="pvs-eyebrow">Why Gagamba</p>
          <h2 className="pvs-title">The old way is expensive,
            <br />dangerous, and slow.</h2>
          <p className="pvs-desc">Traditional high-rise cleaning puts workers at risk, 
            drains budgets, and loses days to weather. 
            Gagamba eliminates every one of those constraints.</p>
        </div>

        <div className="pvs-stats">
          {/*Loops through stats to build the pitch deck cards*/}
          {stats.map((s) => (
            <div key={s.value} className="pvs-stat">
              <span className="pvs-stat-value">{s.value}</span>
              <span className="pvs-stat-label">{s.label}</span>
              <span className="pvs-stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="pvs-compare">
          <div className="pvs-col-headers">
            <div className="pvs-col-head pvs-col-head--manual">Traditional methods</div>
            <div className="pvs-col-head pvs-col-head--gagamba">Gagamba UAS</div>
          </div>
          {/*Builds rows for comparing and contrasting */}
          {rows.map((row) => (
            <div key={row.label} className="pvs-row">
              <div className="pvs-row-label">{row.label}</div>
              <div className="pvs-cell pvs-cell--manual">{row.manual}</div>
              <div className="pvs-cell pvs-cell--gagamba">{row.gagamba}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Scoped CSS styles for layout, theme colors, and desktop alignments */}
      <style>{`
        .pvs-section {
          width: 100%;
          --color-ink-black: #05030D;
          --color-dark-amethyst: #120A33;
          background: var(--color-ink-black);
          color: var(--color-periwinkle);
        }
        .pvs-inner { max-width: 1100px; margin: 0 auto; padding: 6rem 2rem; 
        box-sizing: border-box; }
        .pvs-intro { margin-bottom: 4rem; }
        .pvs-eyebrow { font-size: 0.7rem; letter-spacing: 0.14em; 
        text-transform: uppercase; color: var(--color-fresh-sky); 
        margin: 0 0 1rem; font-weight: 500; }
        .pvs-title { font-size: clamp(1.75rem, 3.5vw, 2.75rem); 
        font-weight: 700; letter-spacing: -0.03em; line-height: 1.15; 
        color: #ffffff; margin: 0 0 1rem; }
        .pvs-desc { font-size: 1rem; color: var(--color-periwinkle); 
        opacity: 0.6; max-width: 520px; line-height: 1.7; margin: 0; }
        
        .pvs-stats { display: grid; grid-template-columns: 
        repeat(auto-fit, minmax(200px, 1fr)); gap: 1px; 
        background: var(--color-dark-amethyst); border: 1px solid var(--color-dark-amethyst); border-radius: 12px; overflow: hidden; margin-bottom: 4rem; }
        .pvs-stat { background: var(--color-ink-black); 
        padding: 2rem 1.5rem; display: flex; flex-direction: column; gap: 0.3rem; }
        .pvs-stat-value { font-size: 2.5rem; font-weight: 700; 
        letter-spacing: -0.03em; color: var(--color-fresh-sky); line-height: 1; }
        .pvs-stat-label { font-size: 0.875rem; font-weight: 600; 
        color: var(--color-periwinkle); margin-top: 0.25rem; }
        .pvs-stat-sub { font-size: 0.75rem; color: var(--color-periwinkle); 
        opacity: 0.6; line-height: 1.5; }

        .pvs-compare { border: 1px solid var(--color-dark-amethyst); 
        border-radius: 12px; overflow: hidden; }
        .pvs-col-headers, .pvs-row { display: grid; grid-template-columns: 
        1fr 1fr; border-bottom: 1px solid var(--color-dark-amethyst); }
        .pvs-row:last-child { border-bottom: none; }
        .pvs-row-label { display: none; }
        
        .pvs-col-head, .pvs-cell { padding: 1rem 1.5rem; font-size: 0.875rem; 
        line-height: 1.6; display: flex; align-items: flex-start; gap: 8px; 
        background: var(--color-ink-black); }
        .pvs-col-head { font-size: 0.72rem; font-weight: 600; 
        letter-spacing: 0.08em; text-transform: uppercase; align-items: center; }
        .pvs-col-head--manual, .pvs-cell--manual { color: var(--color-periwinkle); 
        opacity: 0.45; border-right: 1px solid var(--color-dark-amethyst); }
        .pvs-col-head--manual { opacity: 0.4; }
        .pvs-col-head--gagamba { color: #ffffff; }
        .pvs-cell--gagamba { color: #ffffff; font-weight: 500; }

      `}</style>
    </section>
  );
}