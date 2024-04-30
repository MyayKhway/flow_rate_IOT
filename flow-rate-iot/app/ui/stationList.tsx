import Station from './station';
import { fetchStations } from '@/app/lib/data';

export default async function StationList() {
    const data = await fetchStations();
    return (
        <div className="flex flex-col flex-nowrap grow">
            {data.map((station) => <Station station={station}/>)}
        </div>
    );
}
