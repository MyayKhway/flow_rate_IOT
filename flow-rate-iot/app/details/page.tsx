import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/LineChart';
import { DateRangePickerPresets } from '@/app/ui/chartdetails/dateRangePicker';
import ControlPanel from '@/app/ui/chartdetails/ctrlPanel';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <ControlPanel />
        <LineChartComponent />
    </main>
  );
}
