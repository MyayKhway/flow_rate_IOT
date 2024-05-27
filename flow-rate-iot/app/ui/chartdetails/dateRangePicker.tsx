"use client"

import React from "react"
import { DateRange, DateRangePicker } from "@/app/ui/chartdetails/datePicker"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export function DateRangePickerPresets({ selectedStations }: {selectedStations: string[]}) {
    const searchParams = useSearchParams();

    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
        undefined,
    )
    const params = new URLSearchParams(searchParams);
    if (dateRange != undefined) {
        if (dateRange.from != undefined && dateRange.to != undefined && selectedStations.length != 0) {
            params.set('daterange', dateRange.from.toISOString() + dateRange.to.toISOString());
            params.set('stations', selectedStations.toString());
        } else {
            const params = new URLSearchParams(searchParams);
            params.delete('daterange');
            params.delete('stations');
        }
    } else {
        params.delete('daterange');
        params.delete('stations');
    }
    const pathname = usePathname();
    const { replace } = useRouter();
    replace(`${pathname}?${params.toString()}`)

    const presets = [
        {
            label: "Last 1 hour",
            dateRange: {
                from: new Date(new Date().setHours(new Date().getHours() - 1)),
                to: new Date(),
            },
        },
        {
            label: "Last 2 hour",
            dateRange: {
                from: new Date(new Date().setHours(new Date().getHours() - 2)),
                to: new Date(),
            },
        },
        {
            label: "Last 6 hour",
            dateRange: {
                from: new Date(new Date().setHours(new Date().getHours() - 6)),
                to: new Date(),
            },
        },
        {
            label: "Last 12 hour",
            dateRange: {
                from: new Date(new Date().setHours(new Date().getHours() - 12)),
                to: new Date(),
            },
        },
        {
            label: "Today",
            dateRange: {
                from: new Date(),
                to: new Date(),
            },
        },
        {
            label: "Last 7 days",
            dateRange: {
                from: new Date(new Date().setDate(new Date().getDate() - 7)),
                to: new Date(),
            },
        },
        {
            label: "Last 30 days",
            dateRange: {
                from: new Date(new Date().setDate(new Date().getDate() - 30)),
                to: new Date(),
            },
        },
        {
            label: "Last 3 months",
            dateRange: {
                from: new Date(new Date().setMonth(new Date().getMonth() - 3)),
                to: new Date(),
            },
        },
        {
            label: "Last 6 months",
            dateRange: {
                from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
                to: new Date(),
            },
        },
        {
            label: "Month to date",
            dateRange: {
                from: new Date(new Date().setDate(1)),
                to: new Date(),
            },
        },
    ]
    return (
        <div className="flex flex-col items-center gap-y-4">
            <DateRangePicker
                presets={presets}
                value={dateRange}
                onChange={(date) => {
                    setDateRange(date);
                }}
                className="w-60"
            />

            <p className="flex items-center rounded-md bg-gray-100 p-2 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-300">
                Selected Range:{" "}
                {dateRange
                    ? `${dateRange.from?.toLocaleDateString()} – ${dateRange.to?.toLocaleDateString() ?? ""}`
                    : "None"}
            </p>
        </div>
    )
}
