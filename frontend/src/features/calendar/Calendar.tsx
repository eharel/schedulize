import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import type { EventClickArg, EventDropArg } from "@fullcalendar/core";
import type { DateClickArg } from "@fullcalendar/interaction";
import { useTheme } from "../../context/Theme/useTheme";
import { Theme } from "../../types";
import "../../styles/Calendar.css";

export type CalendarEvent = {
  id: string;
  title: string;
  start: string | Date;
  end?: string | Date;
  allDay?: boolean;
  color?: string;
};

interface CalendarProps {
  events?: CalendarEvent[];
  onEventClick?: (info: EventClickArg) => void;
  onDateClick?: (info: DateClickArg) => void;
  onEventDrop?: (info: EventDropArg) => void;
  onEventResize?: (info: any) => void; // Using any for now as the correct type is not easily available
}

export default function Calendar({
  events = [],
  onEventClick,
  onDateClick,
  onEventDrop,
  onEventResize,
}: CalendarProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with same dimensions to avoid layout shift
    return (
      <div className="h-[600px] bg-surface-100 dark:bg-surface-800 rounded-md animate-pulse" />
    );
  }

  return (
    <div
      className={`calendar-container ${
        theme === Theme.Dark ? "fc-theme-dark" : ""
      }`}
    >
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        eventClick={onEventClick}
        dateClick={onDateClick}
        eventDrop={onEventDrop}
        eventResize={onEventResize}
        height="auto"
      />
    </div>
  );
}
