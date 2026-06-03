export default function PlusPin(){
    return (
    	<svg width="56" height="56" viewBox="0 0 56 56" className="group cursor-pointer transition-all duration-200">
      	<circle cx="28" cy="28" r="26" 
					fill="rgba(37, 20, 20, 0.3)" 
					stroke="rbga(255, 255, 255, 0.2)" 
					strokeWidth="1.5"
					className="transition-all duration-200 group-hover:fill-white/[0.10] group-hover:stroke-white/[0.2]"
				/>
        <line x1="28" y1="16" x2="28" y2="40" stroke="white" strokeWidth="3" strokeLinecap="round"/>
        <line x1="16" y1="28" x2="40" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
}