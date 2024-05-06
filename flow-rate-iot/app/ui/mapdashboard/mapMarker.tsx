'use client';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import Station from './station';
import { useState } from 'react';
import { StationType } from '@/app/lib/definitions';

export default function MapMarker({ station}: { station: StationType }) {
    const [open, setOpen] = useState(false);
    if (!open) {
        return (
            <AdvancedMarker position={{ lat: station.lat, lng: station.lng }} onClick={() => setOpen(true)}>
            </AdvancedMarker>
        )
    } else return (
        <>
            <AdvancedMarker position={{ lat: station.lat, lng: station.lng }} onClick={() => setOpen(true)}>
            </AdvancedMarker>
            <InfoWindow position={{ lat: station.lat, lng: station.lng }} onCloseClick={() => setOpen(false)}>
                <Station station={station} />
            </InfoWindow>
        </>
    )
}
