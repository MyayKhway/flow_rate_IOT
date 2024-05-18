'use client';
import MapComponent from './mapComponent';
import StationList from './stationList';
import { useContext, useState } from 'react';


export default function Dashboard() {
    const [focus, setFocus] = useState<string[]>([]);
    return (
        <div className="flex flex-row item-center h-100 w-full">
            <MapComponent focus={focus} setFocus={setFocus} />
            <StationList focus={focus} setFocus={setFocus} />
        </div>
    );
}
