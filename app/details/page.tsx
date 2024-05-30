import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/lineChart';
import ControlPanel from '@/app/ui/chartdetails/ctrlPanel';
import { fetchFlowByDateRange, fetchStations } from '@/app/lib/data';


export default async function Page({
    searchParams,
}: {
    searchParams?: {
        daterange?: string;
        stations?: string;
    };
}) {
    const daterange = searchParams?.daterange || '';
    const selectedStations = searchParams?.stations ? searchParams.stations.split(',') : [];
    let [from, to] = daterange.split('Z');
    from = from || '';
    to = to || '';
    const chartData = await fetchFlowByDateRange(from + 'Z', to + 'Z', selectedStations);
    const stations = await fetchStations();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <ControlPanel stations={stations}/>
            <LineChartComponent chartData={chartData} />
        </main>
    );
}
