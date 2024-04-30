import Image from "next/image";
import MapComponent from '@/app/ui/mapComponent';
import Navbar from '@/app/ui/navbar';
import Dashboard from "@/app/ui/dashboard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar/>
        <Dashboard/>
    </main>
  );
}
