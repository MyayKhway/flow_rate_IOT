import Navbar from '@/app/ui/navbar';
import { fetchStations } from '@/app/lib/data';
import VideoPlayer from '@/app/ui/livevideo/videoPlayer';

export default async function Home() {
    const stations = await fetchStations();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar />
            <div className="grid grid-cols-3 gap-0 min-h-screen">
                <VideoPlayer stations={stations} />
            </div>
            <svg className="size-20 absolute right-10 bottom-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </main>
    );
}
