import { Form } from "react-bootstrap"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from "@mui/x-date-pickers";
import { renderDigitalClockTimeView } from "@mui/x-date-pickers";

export default function Horario() {
    return (
        <>
            <Form.Label>Horário</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    viewRenderers={{
                        hours: renderDigitalClockTimeView,
                        minutes: renderDigitalClockTimeView,
                    }}
                    label="Horário"
                    // shouldDisableTime /* Desbailita horas indisponiveis */    
                />
            </LocalizationProvider>
        </>
    )
}