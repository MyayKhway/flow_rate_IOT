'use client';
import { StationType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '@tremor/react';
import Link from 'next/link';


interface propsType {
    station: StationType;
    averageFlow: number;
    focus: string[];
    setFocus(data: string[]): void;
}

export default function Station(props: propsType) {
    const pushName = (focus: string[], name: string) => {
        let found = false;
        for (let i = 0; i < focus.length; i++) {
            if (focus[i] == name) found = true;
        }
        if (!found) {
            return focus.concat([name]);
        }
        else {
            const filtered = focus.filter((e) => e != name);
            return filtered;
        }
    }
    const focus = props.focus;
    return (
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo" key={uuidv4()}
            onClick={() => props.setFocus(pushName(focus, props.station.name))}>
            <p key={uuidv4()}>
                <b className="text-tremor-default text-tremor-content dark:text-dark-tremor-content" key={uuidv4()}>
                    {props.station.name}
                </b>
            </p>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content" key={uuidv4()}>
                Average flow last 3 hr:
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold"
                key={uuidv4()} suppressHydrationWarning>
                {`${props.averageFlow} cm3/s`}
            </p>
            <Link className="text-slate-100 underline-offset-1" href="" key={uuidv4()}>
                see chart
            </Link>
            <br key={uuidv4()}></br>
            <Link className="text-slate-100 underline-offset-3" href="" key={uuidv4()}>
                see live video
            </Link>
        </Card>
    );
}
