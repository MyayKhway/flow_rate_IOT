'use client';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import Station from './station';
import { useState } from 'react';
import { StationType } from '@/app/lib/definitions';
import { Dispatch, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface propsType {
    station: StationType;
    averageFlow: number;
    focus: string[];
    setFocus: Dispatch<SetStateAction<string[]>>;
}

export default function MapMarker(props: propsType) {
    let found = false;
    for (let i = 0; i < props.focus.length; i++) {
        if (props.focus[i] == props.station.name) found = true;
    }
    const [open, setOpen] = useState(found);
    if (!open) {
        return (
            <AdvancedMarker position={{ lat: props.station.lat, lng: props.station.lng }} onClick={() => setOpen(true)} key={uuidv4()}>
            </AdvancedMarker>
        )
    } else return (
        <>
            <AdvancedMarker position={{ lat: props.station.lat, lng: props.station.lng }} onClick={() => setOpen(true)} key={uuidv4()}>
            </AdvancedMarker>
            <InfoWindow position={{ lat: props.station.lat, lng: props.station.lng }} onCloseClick={() => setOpen(false)} key={uuidv4()}>
            <Station station={props.station} averageFlow={props.averageFlow} focus={props.focus} setFocus={props.setFocus} key={uuidv4()}/>
            </InfoWindow>
        </>
    )
}
