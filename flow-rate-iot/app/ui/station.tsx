import { StationType } from '@/app/lib/definitions';
import { v4 as uuidv4 } from 'uuid';

export default function Station({ station }: {station:StationType}) {
    return (
        <div className="w-full mx-1 my-1 gap-x-14">
            <b className="text-black indent-3" key={uuidv4()}>Station Name: {station.name}</b>
            <p>Station Position: {station.lat}, {station.lng}</p>
            <p>Station ID: {station.id}</p>
        </div>
    );
}
