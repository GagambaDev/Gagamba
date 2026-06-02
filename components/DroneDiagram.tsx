'use client';
import Image from 'next/image';

const Drone_Parts = [
    {
        id:'propellors',
        title: 'Propellors',
        description: 'something about the propellors',
        top: '30%', // % from top of image
        left: '20%', // % from left of image
    },
    {
        // same layout here
    }

    // other component details go here
]


export default function DroneDiagram() {
    // someway to signal when a popup is active
    const activepart = '';

    return(
        <div>
            hello
        </div>
    )


}