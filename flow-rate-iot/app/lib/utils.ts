// Tremor Raw focusRing [v0.0.1]
import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { AverageFlowType } from '@/app/lib/definitions';


export const focusRing = [
    // base
    "outline outline-offset-2 outline-0 focus-visible:outline-2",
    // outline color
    "outline-blue-500 dark:outline-blue-500",
]


export function cx(...args: ClassValue[]) {
    return twMerge(clsx(...args))
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
    // base
    "focus:ring-2",
    // ring color
    "focus:ring-blue-200 focus:dark:ring-blue-700/30",
    // border color
    "focus:border-blue-500 focus:dark:border-blue-700",
]

// Tremor Raw hasErrorInput [v0.0.1]

export const hasErrorInput = [
    // base
    "ring-2",
    // border color
    "border-red-500 dark:border-red-700",
    // ring color
    "ring-red-200 dark:ring-red-700/30",
]


export const findInObjArray = (arr: AverageFlowType[], val: string) => {
    for (const ele of arr) {
        if (ele.stationId == val) {
            return ele;
        }
    } return null;
}
