'use client';
import Station from './station';
import { stations, time_series_data } from '../../lib/dummy-data';
import { v4 as uuidv4 } from 'uuid';

export default function StationList({ focus, setterFocus }) {
    let focusArr;
    if (focus) {
        focusArr = focus;
    } else { focusArr = []; }
    return (
        <div className="top-2 grid grid-cols-2 gap-x-4 gap-y-4" key={uuidv4()}>
            {stations.map((station) => <Station
                key={uuidv4()}
                station={station}
                onClick={() => {setterFocus(focusArr.push(station.name))}}
            />)}
        </div>
    );
}
