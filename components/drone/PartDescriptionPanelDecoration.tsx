/**
 * This is the decorative background layer for the drone part description panel.
 * It keeps the glow and top border styling separate from the panel content so
 * the main PartDescription component can stay focused on layout and state.
 */

export default function PartDescriptionPanelDecoration() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          background:
            'radial-gradient(ellipse 55% 120% at 8% 0%, rgba(79,142,255,0.22) 0%, rgba(22,65,185,0.08) 44%, transparent 72%)',
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
    </>
  );
}
