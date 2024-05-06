import Station from './station';
import { stations, time_series_data } from '../../lib/dummy-data';

export default async function StationList() {
    return (
        <div className="top-2 grid grid-cols-2 gap-x-4 gap-y-4">
            {stations.map((station) => <Station station={station}/>)}
        </div>
    );
}
