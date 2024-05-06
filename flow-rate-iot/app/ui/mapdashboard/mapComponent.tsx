'use client';
import {
    APIProvider,
    Map,
} from "@vis.gl/react-google-maps";
const { stations, _ } = require('../../lib/dummy-data.js');
import MapMarker from './mapMarker';
import { StationType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';

export default function MapComponent() {
    const position = { lat: 13.729088, lng: 100.76935}

    let apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) apiKey = '';

    let mapID = process.env.NEXT_PUBLIC_MAP_ID;
    if (!mapID) mapID = '';
    return (
        <APIProvider apiKey={apiKey}>
            <div className="h-svh w-2/3">
                <Map defaultZoom={17.3} defaultCenter={position} mapId={mapID}>
                {stations.map((station : StationType) => 
                    <MapMarker key={uuidv4()} station={station} />
                )}
                </Map>
            </div>
        </APIProvider >
    );
}
