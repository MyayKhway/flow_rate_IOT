"use client";
import { useState } from 'react';
import {
    Select,
    SelectItem
} from '@tremor/react';
import { StationType, } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';

interface VideoPlayerPropsType {
    stations: StationType[];
}

export default function VideoPlayer(props: VideoPlayerPropsType) {
    const [currentStation, setCurrentStation] = useState('');
    return (
        <div className="h-full w-full mx-auto min-h-1024 min-w-720">
            {currentStation != "" ?
                <video className="w-fit h-fit" autoPlay loop muted>
                    <source src={'Background1.mp4'} type='video/mp4' />
                </video> : <p> No Video </p>}
            <Select defaultValue="0" onValueChange={(value: string) => setCurrentStation(value)}>
                <SelectItem value="">No Video Feed</SelectItem>
                {props.stations.map((station) => {
                    return (<SelectItem value={station.id} key={uuidv4()}> {station.name} </SelectItem>)
                })
                }
            </Select>
        </div>
    )
}
