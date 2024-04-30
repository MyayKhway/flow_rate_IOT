import MapComponent from './mapComponent';
import StationList from './stationList';

export default function Dashboard() {
    return (
        <div className="flex flex-row item-center h-100 w-full">
            <MapComponent />
            <StationList />
        </div>
    );
}
