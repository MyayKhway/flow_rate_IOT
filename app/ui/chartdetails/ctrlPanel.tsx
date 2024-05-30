'use client';
import { DateRangePickerPresets } from './dateRangePicker';
import { StationType } from '@/app/lib/definitions';
import { MultiSelect, MultiSelectItem } from '@tremor/react';
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

interface ControlPanelType {
    stations: StationType[]
}

export default function ControlPanel(props: ControlPanelType) {
    const [selectedStations, setSelectedStations] = useState<string[]>([]);
    return (
        <div className="flex flex-row grow-2">
            <DateRangePickerPresets selectedStations={selectedStations}/>
            <MultiSelect placeholder="Select Stations" onValueChange={(value) => setSelectedStations(value)}>
                {props.stations.map((station: StationType) =>
                    <MultiSelectItem value={station.id}>{station.name}</MultiSelectItem>)
                }
            </MultiSelect>
        </div>
    )
}
