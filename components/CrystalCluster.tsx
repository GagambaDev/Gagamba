import type { SVGProps } from "react";

// Shard formations that grow out of the left edge of the page and curve back into it,
// styled like the hero's (see HeroBackground.tsx): see-through Pearl-to-pink fill, white edges
// and red/cyan fringes, drifting slowly. x = 0 is the page edge; flip with -scale-x-100 for the right edge.
//
// The shards share edges here, then each one is shrunk toward its own center to open the gaps
// the fringes show through. Points on the page edge are pushed past it instead, so the
// formation stays attached to the edge with no gap.
const SHAPES = {
  // A compact gem, 2:3
  short: {
    width: 400,
    height: 600,
    shards: [
      [[0, 30], [140, 0], [130, 150], [0, 190]],
      [[140, 0], [320, 110], [240, 270], [130, 150]],
      [[320, 110], [400, 300], [240, 270]],
      [[0, 190], [130, 150], [240, 270], [150, 400], [0, 380]],
      [[400, 300], [330, 470], [150, 400], [240, 270]],
      [[0, 380], [150, 400], [70, 500], [0, 520]],
      [[150, 400], [330, 470], [150, 600], [70, 500]],
      [[0, 520], [70, 500], [150, 600], [0, 575]],
    ],
  },
  // A long sweep: a thin sliver at the top, widest just below the middle, tapering back into the edge
  long: {
    width: 460,
    height: 1000,
    shards: [
      [[0, 0], [60, 40], [120, 120], [0, 110]],
      [[0, 110], [120, 120], [250, 170], [130, 230]],
      [[250, 170], [270, 250], [130, 230]],
      [[0, 110], [130, 230], [0, 330]],
      [[130, 230], [270, 250], [340, 360], [200, 380]],
      [[0, 330], [130, 230], [200, 380]],
      [[0, 330], [200, 380], [150, 600], [0, 560]],
      [[200, 380], [340, 360], [440, 450], [300, 520]],
      [[200, 380], [300, 520], [150, 600]],
      [[300, 520], [440, 450], [455, 560], [320, 680]],
      [[150, 600], [300, 520], [320, 680]],
      [[455, 560], [430, 700], [320, 680]],
      [[0, 560], [150, 600], [180, 800], [0, 760]],
      [[150, 600], [320, 680], [180, 800]],
      [[320, 680], [430, 700], [340, 790], [180, 800]],
      [[0, 760], [180, 800], [0, 900]],
      [[180, 800], [340, 790], [240, 870]],
      [[0, 900], [180, 800], [240, 870], [150, 930]],
      [[0, 900], [150, 930], [0, 1000]],
    ],
  },
};

const SHRINK = 0.93;
const PAST_EDGE = -24;

function toPoints(shard: number[][]) {
  const centerX = shard.reduce((sum, [x]) => sum + x, 0) / shard.length;
  const centerY = shard.reduce((sum, [, y]) => sum + y, 0) / shard.length;
  return shard
    .map(([x, y]) => {
      const shrunkX = x === 0 ? PAST_EDGE : centerX + (x - centerX) * SHRINK;
      const shrunkY = centerY + (y - centerY) * SHRINK;
      return `${shrunkX.toFixed(1)},${shrunkY.toFixed(1)}`;
    })
    .join(" ");
}

const SHAPE_POINTS = {
  short: SHAPES.short.shards.map(toPoints),
  long: SHAPES.long.shards.map(toPoints),
};

function ShardLayer({ shardsId, ...props }: SVGProps<SVGUseElement> & { shardsId: string }) {
  return <use href={`#${shardsId}`} {...props} />;
}

type CrystalClusterProps = {
  // Makes the SVG ids unique, so formations can appear more than once on a page
  id: string;
  // "short" is a 2:3 box (aspect-[2/3]), "long" is a 23:50 box (aspect-[23/50])
  shape?: keyof typeof SHAPES;
  // Positions and sizes it, at the shape's width-to-height ratio
  className?: string;
};

export default function CrystalCluster({ id, shape = "short", className = "" }: CrystalClusterProps) {
  const { width, height } = SHAPES[shape];
  const shardsId = `${id}-shards`;
  const fillId = `${id}-fill`;
  const maskId = `${id}-fringe-mask`;

  return (
    <div aria-hidden="true" className={`pointer-events-none ${className}`}>
      {/* Drifts left, into the page edge, so the attached side never pulls away from it */}
      <style>{`
        @keyframes crystal-cluster-drift {
          50% { transform: translateX(-8px); }
        }
      `}</style>

      {/* Soft lavender and pink glow behind the shards, like the hero's clouds.
          closest-side makes each glow fade out before it reaches the box edge, so no hard lines show. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_closest-side_at_30%_45%,#C9C3F566,transparent),radial-gradient(ellipse_closest-side_at_20%_70%,#EFBEEF59,transparent)]" />

      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="relative size-full overflow-visible motion-safe:animate-[crystal-cluster-drift_14s_ease-in-out_infinite]"
      >
        <defs>
          <linearGradient id={fillId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--color-pearl)" />
            <stop offset="50%" stopColor="#C9C3F5" />
            <stop offset="100%" stopColor="#EFBEEF" />
          </linearGradient>

          <symbol id={shardsId} viewBox={`0 0 ${width} ${height}`} width={width} height={height} overflow="visible">
            {SHAPE_POINTS[shape].map((points) => (
              <polygon key={points} points={points} vectorEffect="non-scaling-stroke" />
            ))}
          </symbol>

          {/* Cuts the shards out of the red and cyan copies so only their edges show */}
          <mask id={maskId} maskUnits="userSpaceOnUse" x={-60} y={-20} width={width + 80} height={height + 40}>
            <rect x={-60} y={-20} width={width + 80} height={height + 40} fill="white" />
            <ShardLayer shardsId={shardsId} fill="black" />
          </mask>
        </defs>

        <g mask={`url(#${maskId})`}>
          <ShardLayer shardsId={shardsId} x={-5} fill="#FF4A00" opacity={0.12} />
          <ShardLayer shardsId={shardsId} x={5} fill="#02EBEF" opacity={0.16} />
        </g>

        <ShardLayer
          shardsId={shardsId}
          fill={`url(#${fillId})`}
          fillOpacity={0.5}
          stroke="var(--color-white)"
          strokeWidth={1}
        />
      </svg>
    </div>
  );
}
