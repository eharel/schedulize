import { useState } from 'react';
import Calendar from '../components/Calendar/Calendar';
import type { CalendarEvent } from '../components/Calendar/Calendar';

// Mock events
const MOCK_EVENTS: CalendarEvent[] = [
  {
    id: '1',
    title: 'Team Meeting',
    start: new Date(new Date().setHours(9, 0, 0, 0)),
    end: new Date(new Date().setHours(10, 30, 0, 0)),
    color: '#3b82f6', // primary-500
  },
  {
    id: '2',
    title: 'Product Demo',
    start: new Date(new Date().setHours(14, 0, 0, 0)),
    end: new Date(new Date().setHours(16, 0, 0, 0)),
    color: '#8b5cf6', // secondary-500
  },
  {
    id: '3',
    title: 'Client Call',
    start: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(11, 0, 0, 0)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() + 1)).setHours(12, 0, 0, 0)),
    color: '#f59e0b', // accent-500
  },
  {
    id: '4',
    title: 'Sprint Planning',
    start: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(10, 0, 0, 0)),
    end: new Date(new Date(new Date().setDate(new Date().getDate() + 2)).setHours(12, 0, 0, 0)),
    color: '#3b82f6', // primary-500
  },
  {
    id: '5',
    title: 'All-day Event',
    start: new Date(new Date().setDate(new Date().getDate() - 1)),
    allDay: true,
    color: '#22c55e', // success-500
  }
];

export default function CalendarPage() {
  const [events, setEvents] = useState<CalendarEvent[]>(MOCK_EVENTS);

  const handleEventClick = (info: any) => {
    alert(`Event: ${info.event.title}`);
    // In the future, this could open a modal with event details
  };

  const handleDateClick = (info: any) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent: CalendarEvent = {
        id: String(Date.now()),
        title,
        start: info.date,
        allDay: info.allDay,
        color: '#3b82f6', // primary-500 as default
      };
      
      setEvents([...events, newEvent]);
    }
  };

  const handleEventDrop = (info: any) => {
    // Update event dates when dragged
    const updatedEvents = events.map(event => {
      if (event.id === info.event.id) {
        return {
          ...event,
          start: info.event.start,
          end: info.event.end,
        };
      }
      return event;
    });
    
    setEvents(updatedEvents);
  };

  const handleEventResize = (info: any) => {
    // Update event duration when resized
    const updatedEvents = events.map(event => {
      if (event.id === info.event.id) {
        return {
          ...event,
          end: info.event.end,
        };
      }
      return event;
    });
    
    setEvents(updatedEvents);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <Calendar 
        events={events}
        onEventClick={handleEventClick}
        onDateClick={handleDateClick}
        onEventDrop={handleEventDrop}
        onEventResize={handleEventResize}
      />
    </div>
  );
}
