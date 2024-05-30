export type StationType = {
    id: string;
    lat: number;
    lng: number;
    name: string;
};

export type AverageFlowType = {
    stationId: string,
    totalFlow: number,
    numberOfFlow: number,
    averageFlow: number
}

