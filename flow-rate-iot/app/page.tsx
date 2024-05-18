import Navbar from '@/app/ui/navbar';
import Dashboard from "@/app/ui/mapdashboard/dashboard";
import { PrismaClient } from '@prisma/client';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <Dashboard/>
    </main>
  );
}
