import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chartdetails/chart';
import { LineChartHero } from '@/app/ui/chartdetails/LineChart';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <LineChartHero />
        <LineChartComponent />
    </main>
  );
}
