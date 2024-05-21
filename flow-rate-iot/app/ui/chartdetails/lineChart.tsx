'use client';
import { LineChart } from '@tremor/react';

const chartdata = [
    {
        date: 'Jan 22',
        Station0: 2890,
        'Station1': 2338,
        'Station3': 2000,
    },
    {
        date: 'Feb 22',
        Station0: 2756,
        'Station1': 2103,
        'Station3': 2000,
    },
    {
        date: 'Mar 22',
        Station0: 3322,
        'Station1': 2194,
        'Station3': 2000,
    },
    {
        date: 'Apr 22',
        Station0: 3470,
        'Station1': 2108,
        'Station3': 2000,
    },
    {
        date: 'May 22',
        Station0: 3475,
        'Station1': 1812,
        'Station3': 2000,
    },
    {
        date: 'Jun 22',
        Station0: 3129,
        'Station1': 1726,
        'Station3': 2000,
    },
    {
        date: 'Jul 22',
        Station0: 3490,
        'Station1': 1982,
        'Station3': 2000,
    },
    {
        date: 'Aug 22',
        Station0: 2903,
        'Station1': 2012,
        'Station3': 2000,
    },
    {
        date: 'Sep 22',
        Station0: 2643,
        'Station1': 2342,
        'Station3': 2000,
    },
    {
        date: 'Oct 22',
        Station0: 2837,
        'Station1': 2473,
        'Station3': 2000,
    },
    {
        date: 'Nov 22',
        Station0: 2954,
        'Station1': 3848,
        'Station3': 2000,
    },
    {
        date: 'Dec 22',
        Station0: 3239,
        'Station1': 3736,
        'Station3': 2000,
    },
];

const dataFormatter = (number: number) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;


export function LineChartComponent({ dateRange }: { dateRange: string }) {
    // TODO respond to dateRange data
    return (
        <LineChart
            className="h-80"
            data={chartdata}
            index="date"
            categories={['Station0', 'Station1', 'Station3']}
            colors={['indigo', 'rose', 'blue']}
            valueFormatter={dataFormatter}
            yAxisWidth={60}
            onValueChange={(v) => console.log(v)}
        />
    );
}
