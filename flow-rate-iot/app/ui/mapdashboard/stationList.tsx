'use client';
import Station from './station';
import { stations, time_series_data } from '../../lib/dummy-data';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';
import { StationType, AverageFlowType } from '@/app/lib/definitions';
import { findInObjArray } from '@/app/lib/utils';

interface propsType {
    stations: StationType[];
    averageFlows: AverageFlowType[];
    focus: string[];
    setFocus: Dispatch<SetStateAction<string[]>>;
}

export default function StationList(props: propsType) {
    return (
        <div className="top-2 grid grid-cols-2 gap-x-4 gap-y-4">
            {props.stations.map((station) => {
                let found = findInObjArray(props.averageFlows, station.id);
                let averageflow = 0;
                if (found) averageflow = found.averageFlow;
                else averageflow = 0;
                return (<Station key={uuidv4()}
                    station={station}
                    averageFlow={Math.round(averageflow)}
                    focus={props.focus}
                    setFocus={props.setFocus}
                />)
            })}
        </div>
    );
}
