import { DateRangePickerPresets } from './dateRangePicker';
import StationSelector  from '@/app/ui/chartdetails/stationSelector';

export default function ControlPanel() {
    return (
    <form className="flex flex-row grow-2">
        <DateRangePickerPresets />
        <StationSelector />
        <button>Submit</button>
    </form>
    )
}
