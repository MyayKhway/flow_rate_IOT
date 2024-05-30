import Navbar from '@/app/ui/navbar';
import { fetchStations } from '@/app/lib/data';
import VideoWrapper from '@/app/ui/livevideo/videoWrapper';

export default async function Home() {
    const stations = await fetchStations();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <VideoWrapper stations={stations} />
        </main>
    );
}
