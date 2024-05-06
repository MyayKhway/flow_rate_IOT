import Station from './station';
import { stations, time_series_data } from '../../lib/dummy-data';

export default async function StationList() {
    return (
        <div className="flex flex-col flex-nowrap grow">
            {stations.map((station) => <Station station={station}/>)}
        </div>
    );
}
