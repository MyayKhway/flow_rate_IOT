'use client';
import { StationType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '@tremor/react';
import Link from 'next/link';

export default function Station({ station }: { station: StationType }) {
    return (
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo" key={uuidv4()}>
            <p>
                <b className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                    {station.name}
                </b>
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Average flow last 3 hr:
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold" suppressHydrationWarning>
                {`${Math.round(Math.random() * 1000)} cm3/s` }
            </p>
            <Link className="text-slate-100 underline-offset-1" href="">
                see chart
            </Link>
            <br></br>
            <Link className="text-slate-100 underline-offset-3" href="">
                see live video
            </Link>
        </Card>
    );
}
