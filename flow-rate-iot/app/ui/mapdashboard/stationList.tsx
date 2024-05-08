'use client';
import Station from './station';
import { stations, time_series_data } from '../../lib/dummy-data';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';

interface propsType {
    focus: string[];
    setFocus: Dispatch<SetStateAction<string[]>>;
}

export default function StationList(props: propsType) {
    return (
        <div className="top-2 grid grid-cols-2 gap-x-4 gap-y-4">
            {stations.map((station) => <Station key={uuidv4()}
                station={station}
                focus={props.focus}
                setFocus={props.setFocus}
            />)}
        </div>
    );
}
