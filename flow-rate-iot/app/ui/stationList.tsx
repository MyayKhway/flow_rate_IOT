import Station from './station';
import { fetchStations } from '@/app/lib/data';
import { stations, _ } from '../lib/dummy-data';

export default async function StationList() {
    const data = await fetchStations();
    return (
        <div className="flex flex-col flex-nowrap grow">
            {stations.map((station) => <Station station={station}/>)}
        </div>
    );
}
