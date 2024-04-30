export type StationType = {
    lat: number;
    lng: number;
    id: string;
    name: string;
};

export type StationTable = {

}

export type FLowRateTable = {
    station_id: string;
    flow_rate: number;
    time: EpochTimeStamp;

}
