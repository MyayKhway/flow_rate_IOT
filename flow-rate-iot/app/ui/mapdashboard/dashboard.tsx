'use client';
import MapComponent from './mapComponent';
import StationList from './stationList';
import { useState } from 'react';
import { StationType, AverageFlowType } from '@/app/lib/definitions';

interface DashboardPropsType {
    stations: StationType[],
    averageFlows: AverageFlowType[]
}

export default function Dashboard(props: DashboardPropsType) {
    const [focus, setFocus] = useState<string[]>([]);
    return (
        <div className="flex flex-row item-center h-100 w-full">
            <MapComponent focus={focus} setFocus={setFocus} stations={props.stations} averageFlows={props.averageFlows}/>
            <StationList focus={focus} setFocus={setFocus} stations={props.stations} averageFlows={props.averageFlows}/>
        </div>
    );
}
