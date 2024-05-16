'use client';
import { LineChart } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 22',
        Station0: 2890,
        'Station1': 2338,
    },
    {
        date: 'Feb 22',
        Station0: 2756,
        'Station1': 2103,
    },
    {
        date: 'Mar 22',
        Station0: 3322,
        'Station1': 2194,
    },
    {
        date: 'Apr 22',
        Station0: 3470,
        'Station1': 2108,
    },
    {
        date: 'May 22',
        Station0: 3475,
        'Station1': 1812,
    },
    {
        date: 'Jun 22',
        Station0: 3129,
        'Station1': 1726,
    },
    {
        date: 'Jul 22',
        Station0: 3490,
        'Station1': 1982,
    },
    {
        date: 'Aug 22',
        Station0: 2903,
        'Station1': 2012,
    },
    {
        date: 'Sep 22',
        Station0: 2643,
        'Station1': 2342,
    },
    {
        date: 'Oct 22',
        Station0: 2837,
        'Station1': 2473,
    },
    {
        date: 'Nov 22',
        Station0: 2954,
        'Station1': 3848,
    },
    {
        date: 'Dec 22',
        Station0: 3239,
        'Station1': 3736,
    },
];

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;

export function LineChartComponent() {
    return (
        <LineChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={['Station0', 'Station1']}
            colors={['indigo', 'rose']}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
        />
    );
}
