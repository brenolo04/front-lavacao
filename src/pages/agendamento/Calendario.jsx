import { useEffect, useId, useRef, useState } from "react";

import { format, isValid, parse } from "date-fns";
import { DayPicker } from "react-day-picker";
import { Form, Button, Stack } from "react-bootstrap"

import "react-day-picker/style.css";

export default function Calendario() {
    const dialogRef = useRef(null);
    const dialogId = useId();
    const headerId = useId();

    // Hold the month in state to control the calendar when the input changes
    const [month, setMonth] = useState(new Date());
    
    // Hold the selected date in state
    const [selectedDate, setSelectedDate] = useState(undefined);

    // Hold the input value in state
    const [inputValue, setInputValue] = useState("");

    // Hold the dialog visibility in state
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to toggle the dialog visibility
    const toggleDialog = () => setIsDialogOpen(!isDialogOpen);

    // Hook to handle the body scroll behavior and focus trapping
    useEffect(() => {
        const handleBodyScroll = (isOpen) => {
            document.body.style.overflow = isOpen ? "hidden" : "";
        };
        if (!dialogRef.current) return;
        if (isDialogOpen) {
            handleBodyScroll(true);
            dialogRef.current.showModal();
        } else {
            handleBodyScroll(false);
            dialogRef.current.close();
        }
        return () => {
            handleBodyScroll(false);
        };
    }, [isDialogOpen]);

    // Altera data
    const handleDayPickerSelect = (date) => {
        if (!date) {
            setInputValue("");
            setSelectedDate(undefined);
        } else {
            setSelectedDate(date);
            setInputValue(format(date, "dd/MM/yyyy"));
        }
        dialogRef.current?.close();
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value); // Keep the input value in sync

        const parsedDate = parse(e.target.value, "dd/MM/yyyy", new Date());

        if (isValid(parsedDate)) {
            setSelectedDate(parsedDate);
            setMonth(parsedDate);
        } else {
            setSelectedDate(undefined);
        }
    };
    // Aqui deveria fazer uma requisição para habilitar apenas os dias disponíveis

    return (
        <>
            <label htmlFor="date-input">Data</label>
            <Stack direction="horizontal" gap={2}>
                <Form.Control
                    style={{ fontSize: "inherit" }}
                    id="date-input"
                    type="text"
                    disabled
                    value={inputValue}
                    placeholder="dd/MM/yyyy"
                    onChange={handleInputChange}
                />{" "}
                <Button
                    style={{ fontSize: "inherit" }}
                    onClick={toggleDialog}
                    aria-controls="dialog"
                    aria-haspopup="dialog"
                    aria-expanded={isDialogOpen}
                    aria-label="Open calendar to choose booking date"
                >
                    🗓️
                </Button>
            </Stack>
            <dialog
                    role="dialog"
                    ref={dialogRef}
                    id={dialogId}
                    aria-modal
                    aria-labelledby={headerId}
                    onClose={() => setIsDialogOpen(false)}
            >
                <DayPicker
                startMonth={month}
                onMonthChange={setMonth}
                disabled={{before: new Date()}}
                autoFocus
                mode="single"
                selected={selectedDate}
                onSelect={handleDayPickerSelect}
                footer={
                    selectedDate !== undefined &&
                    `Selecionado: ${selectedDate.toDateString()}`
                }
                />
            </dialog>
        </>
    );
}