// data fetchings will be done here after implementing database
import {
    StationType
} from './definitions';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchStations() {
    console.log('Fetching stations data');
    const allStations = await prisma.station.findMany()
    console.log(allStations);
}

export async function last3hrAvg() {
    console.log("placeholder cm3");
}
