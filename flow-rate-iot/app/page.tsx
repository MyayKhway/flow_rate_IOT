import Navbar from '@/app/ui/navbar';
import Dashboard from "@/app/ui/mapdashboard/dashboard";
import { fetchStations, fetchLast3hrAvg } from './lib/data';
import { StationType, AverageFlowType } from '@/app/lib/definitions';
import { InferGetServerSidePropsType, GetServerSideProps } from 'next';


export default async function Home() {
    const stations: StationType[] = await fetchStations();
    const flows: AverageFlowType[]  = await fetchLast3hrAvg();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <Dashboard stations={stations} averageFlows={flows}/>
        </main>
    );
}
