import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/lineChart';
import ControlPanel from '@/app/ui/chartdetails/ctrlPanel';


export default function Page({
    searchParams,
}: {
    searchParams?: {
        daterange?: string;
    };
}) {
    const daterange = searchParams?.daterange || '';
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <ControlPanel />
            <LineChartComponent dateRange={daterange}/>
        </main>
    );
}
