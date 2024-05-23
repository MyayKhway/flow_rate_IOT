import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/lineChart';
import ControlPanel from '@/app/ui/chartdetails/ctrlPanel';
import { fetchFlowByDateRange } from '@/app/lib/data';


export default async function Page({
    searchParams,
}: {
    searchParams?: {
        daterange?: string;
    };
}) {
    const daterange = searchParams?.daterange || '';
    let [from, to] = daterange.split('Z');
    from = from || '';
    to = to || '';
    const chartData = await fetchFlowByDateRange(from + 'Z', to + 'Z');
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <ControlPanel />
            <LineChartComponent chartData={chartData} />
        </main>
    );
}
