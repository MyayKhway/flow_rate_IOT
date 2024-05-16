export type StationType = {
    lat: number;
    lng: number;
    id: string;
    name: string;
};

export type StationTable = {

}

export type FLowRateTable = {
    station0_data: number;
    station1_data: number;
    station2_data: number;
    station3_data: number;
    station4_data: number;
    time: EpochTimeStamp;
    id: string;
}
