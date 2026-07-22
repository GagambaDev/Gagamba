import { CSSProperties } from "react";

export default function SectionDivider( { className, style}: { className?: string; style?: CSSProperties}) { 
    return (
        <div className={`w-16 h-[2px] bg-blue-500 ${className}`} style={style}/>
    )
}