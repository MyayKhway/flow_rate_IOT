// data fetchings will be done here after implementing database
import { ZonedDateTime } from '@internationalized/date';
import {
    StationType, AverageFlowType
} from './definitions';

import { PrismaClient } from '@prisma/client';
import { findInObjArray } from '@/app/lib/utils';


const prisma = new PrismaClient();

export const fetchStations = async () => {
    console.log('Fetching stations data');
    const allStations = await prisma.station.findMany(
        {
            orderBy: {
                id: 'asc'
            }
        }
    );
    console.log(allStations);
    return allStations;
}

export async function fetchLast3hrAvg() {
    //TODO remove this hardcoded value and replace with Date.now()-3hours after database periodic inputs
    const last3Hr = new Date("2024-05-13 21:15:00:00.00").toISOString();
    const flows = await prisma.flow.findMany({
        where: {
            time: {
                gte: last3Hr
            }
        }
    });
    let results: AverageFlowType[] = []
    for (const volume_data of flows) {
        const found = findInObjArray(results, volume_data.stationId);
        if (found) {
            // already exists just need to update
            found.totalFlow = found.totalFlow + volume_data.volume;
            found.numberOfFlow = found.numberOfFlow + 1;
            found.averageFlow = found.totalFlow / found.numberOfFlow;
        } else {
            const new_obj: AverageFlowType = {
                stationId: volume_data.stationId,
                totalFlow: volume_data.volume,
                numberOfFlow: 1,
                averageFlow: volume_data.volume
            }
            results.push(new_obj);
        }
    }
    return results;
}


export async function fetchFlowByDateRange(from: string, to: string, stations: string[]) {
    // if from or to are empty strings, display last day data
    if (from == 'Z' || to == 'Z') {
        from = new Date(new Date().setHours(0)).toISOString();
        to = new Date().toISOString();
    }
    const results = await prisma.flow.findMany({
        include: {
            stationFrom: {
                select: {
                    name: true,
                }
            }
        },
        where: {
            time: {
                gte: from,
                lte: to,
            },
            stationId: {
                in: stations
            }
        },
        orderBy: {
            time: 'asc'
        },
    });
    console.log(`returned results have length of: ${results.length}`);
    // returned results will look like this
    // {
    // stationId: '0000',
    // volume: 748.5275216399856,
    // time: 2024-04-30T17:00:00.000Z,
    //stationFrom: { name: 'Station0' }
    // }
    return results;
}
