import { StationType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';
import { Card } from '@tremor/react';

export default function Station({ station }: { station: StationType }) {
    return (
        <Card className="mx-auto max-w-xs" decoration="top" decorationColor="indigo" key={uuidv4()}>
            <b className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                {station.name}
            </b>
            <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                Average flow last 3 hr:
            </p>
            <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                {`${Math.round(Math.random() * 1000)} cm3/s`}
            </p>
        </Card>
    );
}
