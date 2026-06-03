type PlusPinProps = {
	active?: boolean;
};

export default function PlusPin({ active = false }: PlusPinProps){
    return (
    	<svg width="56" height="56" viewBox="0 0 56 56" className="group cursor-pointer transition-all duration-200">
      	<circle cx="28" cy="28" r="26" 
					fill="rgba(37, 20, 20, 0.3)" 
					stroke="rbga(255, 255, 255, 0.2)" 
					strokeWidth="1.5"
					className={`transition-all duration-200 group-hover:fill-white/[0.10] group-hover:stroke-white/[0.2] ${active ? 'fill-white/[0.10] stroke-white/[0.2]' : ''}`}
				/>
				<circle cx="28" cy="28" r="4" fill="white"
					className={`transition-all duration-200 group-hover:opacity-0 ${active ? 'opacity-0' : ''}`}
				/>
        <line x1="28" y1="16" x2="28" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"
					className={`transition-all duration-200 origin-center scale-y-0 group-hover:scale-y-100 ${active ? 'scale-y-100' : ''}`}
				/>
        <line x1="16" y1="28" x2="40" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"
					className={`transition-all duration-200 origin-center scale-x-0 group-hover:scale-x-100 ${active ? 'scale-x-100' : ''}`}
				/>
      </svg>
    );
}
