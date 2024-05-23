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

interface ChartDataType {
    stationId: string;
    volume: number,
    time: Date;
    stationFrom: {
        name: string;
    }
}

interface ResultDataType {
    [key: string]: string;
}


const findInObjArr = (results: ResultDataType[], val: string) => {
    for (const row of results) {
        if (val == row.time) {
            // there is already one object with time value
            return row;
        }
    } return false;
}

export function LineChartComponent({ chartData }: { chartData: ChartDataType[] }) {
    // chartData will look like this
    // {
    // stationId: '0000',
    // volume: 748.5275216399856,
    // time: 2024-04-30T17:00:00.000Z,
    //stationFrom: { name: 'Station0' }
    //}


    const parseChartData = (data: ChartDataType[]) => {
        // ASSUMPTION!!!! is that there is no two volume data for same station at the same time
        // result will save data in the from LineChart component will accept which is 
        // { 
        // xAxisname: xAxisval,
        // Series0: data0 
        // Series1: data1 
        // ...    : ...
        // Seriesn: datan 
        // }
        let results: ResultDataType[] = [];
        for (const row of data) {
            let found = findInObjArr(results, row.time.toISOString());
            if (found) {
                // there is already an entry with that time xAxis value
                found[row.stationFrom.name] = Math.round(row.volume).toString();
            } else {
                // construct a new object and append to results
                const stationName = row.stationFrom.name;
                const new_obj: ResultDataType = {
                    'time': row.time.toISOString(),
                }
                new_obj[stationName] = Math.round(row.volume).toString();
                results.push(new_obj);
            }
        }
        for (let i = 0; i < 10; i++) {
            console.log(results[i]);
        }
        return results;
    }


    const getRandomSubArray = (arr: string[], size: number) => {
        let shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }

    const tailWindColors = [
        'slate', 'gray',
        'zinc', 'neutral',
        'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue',
        'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose',
    ]


    const chartDataParsed = parseChartData(chartData);
    let categories: string[] = [];
    // ugly, TODO fix this
    if (chartDataParsed != undefined && chartDataParsed != null && chartDataParsed[0] != undefined && chartDataParsed[0] != null) {
        let keys = Object.keys(chartDataParsed[0]);
        const index = keys.indexOf("time");
        keys.splice(index, 1);
        categories = keys;
    }

    const randomColors = getRandomSubArray(tailWindColors, 7);

    return (
        <LineChart
            className="h-80"
            data={chartDataParsed}
            index="time"
            categories={categories}
            colors={randomColors}
            valueFormatter={dataFormatter}
            yAxisWidth={100}
            onValueChange={(v) => console.log(v)}
        />
    );
}
