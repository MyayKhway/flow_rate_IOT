'use client';
import MapComponent from './mapComponent';
import StationList from './stationList';
import { useState } from 'react';


export default function Dashboard() {
    const [ focus, setFocus ] = useState([]);
    console.log(focus);
    return (
        <div className="flex flex-row item-center h-100 w-full">
            <MapComponent />
            <StationList focus={focus} setterFocus={setFocus}/>
        </div>
    );
}
