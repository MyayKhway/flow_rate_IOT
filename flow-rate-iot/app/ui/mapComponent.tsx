'use client';
import {
    APIProvider,
    Map,
} from "@vis.gl/react-google-maps";
import { fetchStations } from '@/app/lib/data';
import { useState } from "react";
import MapMarker from './mapMarker';

export default async function MapComponent() {
    const position = { lat: 13.729088, lng: 100.76935}

    let apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    if (!apiKey) apiKey = '';

    let mapID = process.env.NEXT_PUBLIC_MAP_ID;
    if (!mapID) mapID = '';

    const data = await fetchStations();
    return (
        <APIProvider apiKey={apiKey}>
            <div className="h-svh w-2/3">
                <Map defaultZoom={17.5} defaultCenter={position} mapId={mapID}>
                {data.map((station) => 
                    <MapMarker station={station} />
                )}
                </Map>
            </div>
        </APIProvider >
    );
}
