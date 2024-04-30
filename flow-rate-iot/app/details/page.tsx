import Navbar from '@/app/ui/navbar';
import { LineChartComponent } from '@/app/ui/chart';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <LineChartComponent />
    </main>
  );
}
