'use client';
import VideoPlayer from './videoPlayer';
import { StationType } from '@/app/lib/definitions';
import { useState } from 'react';

interface VideoWrapperType {
    stations: StationType[]
}

export default function VideoWrapper(props: VideoWrapperType) {
    const [playerNum, setPlayerNum] = useState(0);
    const generateVideoPlayers = (number: number, stations: StationType[]) => {
        const arr = [];
        for (let i = 0; i < number; i++) {
            arr.push(<VideoPlayer stations={stations} key={i}/>);
        }
        return arr;
    }
    return (
        <>
            <div className="grid grid-cols-3 gap-0 min-h-screen">
                {generateVideoPlayers(playerNum, props.stations)}
            </div>
            <svg className="size-20 absolute right-10 bottom-3" onClick={()=>setPlayerNum(playerNum+1)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </>
    );
}
