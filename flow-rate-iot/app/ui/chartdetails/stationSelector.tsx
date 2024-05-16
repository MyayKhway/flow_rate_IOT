'use client';

import { MultiSelect, MultiSelectItem } from '@tremor/react';


export default function StationSelector() {
    return (
        <div className="flex-col gap-y-2">
            <MultiSelect onValueChange={()=>console.log("Changed the input")}>
                <MultiSelectItem value="0">Station 0</MultiSelectItem>
                <MultiSelectItem value="1">Station 1</MultiSelectItem>
                <MultiSelectItem value="2">Station 2</MultiSelectItem>
                <MultiSelectItem value="3">Station 3</MultiSelectItem>
                <MultiSelectItem value="4">Station 4</MultiSelectItem>
                <MultiSelectItem value="5">Station 5</MultiSelectItem>
                <MultiSelectItem value="6">Station 6</MultiSelectItem>
            </MultiSelect>
            <div className="mt-4 text-center font-mono text-sm text-slate-500">
                Add series
            </div>
        </div>
    );
}
