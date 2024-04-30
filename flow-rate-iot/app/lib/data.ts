import {
    StationType
} from './definitions';

export async function fetchStations() {
    const station0 = {
        lat: 13.730580,
        lng: 100.769327,
        id: "123123DKSJFK",
        name: "Station 0",
    }
    const station1 = {
        lat: 13.729734,
        lng: 100.769034,
        id: "115674DASDF231",
        name: "Station 1",
    }
    const station2 = {
        lat: 13.730900,
        lng: 100.769317,
        id: "12623DSFSDF",
        name: "Station 2",
    }
    const station3 = {
        lat: 13.729000,
        lng: 100.769202,
        id: "74r58R45",
        name: "Station 3",
    }
    const station4 = {
        lat: 13.731377,
        lng: 100.769254,
        id: "9868Rsdf97Ef",
        name: "Station 4",
    }
    try {
        console.log('Fetching stations data');

        const data = [station0, station1, station2, station3, station4];
        return data;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch station data.');
    }
}
