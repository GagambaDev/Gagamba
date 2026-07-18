"use client"
import "@/styles/ProblemVsSolutionStyling.css";
import { useScrollReveal } from "@/hooks/useScrollReveal";
// stats for the pitch deck cards
const stats = [
  {
    value: "29x",
    label: "Less water used",
    sub: "Gagamba uses 0.07 GPM, vs. 1.8-2.5 GPM, the industry standard"
  },

  {
    value: "$240K",
    label: "Saved per client annually",
    sub: "Gagamba reduces annual operating costs to $300,000, compared to $540,000 for traditional methods"
  },

  {
    value: "$48M",
    label: "Serviceable market",
    sub: "$3.9B Total Addressable Market for Las Vegas High-Rises"
  },
];
//data for the side by side comparison
const rows = [
  {
    label: "Access method",
    manual: "Rope access & scaffolding, workers suspended at height",
    gagamba: "Autonomous drone, zero personnel on the building face"
  },

  {
    label: "Annual cost",
    manual: "$540,000 / year",
    gagamba: "$300,000 / year"
  },

  {
    label: "Water consumption",
    manual: "1.8-2.5 GPM",
    gagamba: "0.07 GPM (~29x less)"
  },
];

export default function ProblemVsSolution() {
  const { ref, fadeTop } = useScrollReveal();
  return (
    <section className="pvs-section">
      <div className="pvs-inner">
        <div ref={ref} className="pvs-intro">
          <p style={fadeTop(0)} className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">Why Gagamba</p>
          <h2 style={fadeTop(0.1)} className="text-5xl md:text-6xl font-black tracking-tight leading-tight text-white mb-6">
            The old way is expensive,{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #4f8eff 0%, #a5c0ff 100%)" }}
            >
              dangerous, and slow.
            </span>
          </h2>
          <p className="pvs-desc">Traditional high-rise cleaning puts workers at risk,
            drains budgets, and loses days to weather.
            Gagamba eliminates every one of those constraints.
          </p>
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
    </section>
  );
}