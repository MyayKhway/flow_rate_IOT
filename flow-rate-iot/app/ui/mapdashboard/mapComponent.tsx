'use client';
import {
    APIProvider,
    Map,
} from "@vis.gl/react-google-maps";
const { stations, _ } = require('../../lib/dummy-data.js');
import MapMarker from './mapMarker';
import { StationType, AverageFlowType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';
import { Dispatch, SetStateAction } from 'react';
import { findInObjArray } from '@/app/lib/utils';

interface propsType {
    stations: StationType[];
    averageFlows: AverageFlowType[];
    focus: string[];
    setFocus: Dispatch<SetStateAction<string[]>>;
}

export default function MapComponent(props: propsType) {
    const position = { lat: 13.729088, lng: 100.76935 }

    // to solve type problems
    let apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

    let mapID = process.env.NEXT_PUBLIC_MAP_ID || '';

    return (
        <APIProvider apiKey={apiKey}>
            <div className="h-svh w-2/3">
                <Map defaultZoom={17.3} defaultCenter={position} mapId={mapID}>
                    {props.stations.map((station: StationType) => {
                        let found = findInObjArray(props.averageFlows, station.id);
                        let averageFlow = 0;
                        if (found) averageFlow = found.averageFlow;
                        else averageFlow = 0;
                        return (
                            <MapMarker
                                key={uuidv4()}
                                station={station}
                                averageFlow={Math.round(averageFlow)}
                                focus={props.focus}
                                setFocus={props.setFocus}
                            />)
                    }
                    )}
                </Map>
            </div>
        </APIProvider >
    );
}
