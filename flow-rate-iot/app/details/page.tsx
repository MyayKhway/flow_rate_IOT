import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/LineChart';
import { DateRangePickerPresets } from '@/app/ui/chartdetails/dateRangePicker';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <DateRangePickerPresets />
        <LineChartComponent />
    </main>
  );
}
