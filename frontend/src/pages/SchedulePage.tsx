import { useState } from "react";
import {
  ListFilter,
  Calendar as CalendarIcon,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

// Defining types for the schedule feature
export interface ScheduleEvent {
  id: string;
  title: string;
  start: Date;
  end?: Date;
  priority: "high" | "medium" | "low";
  status: "scheduled" | "in-progress" | "completed" | "cancelled";
}

export default function SchedulePage() {
  // Filter state will be used in future implementation
  const [_filter, _setFilter] = useState<string>("all");

  // Mock events - in a real app, these would be fetched from an API
  const scheduleEvents: ScheduleEvent[] = [
    {
      id: "1",
      title: "Team Meeting",
      start: new Date(2025, 5, 12, 10, 0),
      end: new Date(2025, 5, 12, 11, 30),
      priority: "high",
      status: "scheduled",
    },
    {
      id: "2",
      title: "Project Review",
      start: new Date(2025, 5, 13, 14, 0),
      end: new Date(2025, 5, 13, 16, 0),
      priority: "medium",
      status: "scheduled",
    },
    {
      id: "3",
      title: "Client Call",
      start: new Date(2025, 5, 14, 9, 0),
      end: new Date(2025, 5, 14, 10, 0),
      priority: "high",
      status: "in-progress",
    },
  ];

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      case "medium":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300";
      case "low":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
      case "in-progress":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300";
      case "completed":
        return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      case "cancelled":
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto py-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-surface-800 dark:text-surface-100">
          Schedule View
        </h1>

        <div className="flex space-x-2">
          <div className="relative inline-block">
            <button
              className="flex items-center space-x-1 bg-surface-100 dark:bg-surface-800 px-3 py-2 rounded-lg"
              onClick={() => {}}
            >
              <ListFilter size={16} />
              <span>Filter</span>
              <ChevronDown size={16} />
            </button>
            {/* Dropdown would go here */}
          </div>

          <Link
            to="/calendar"
            className="flex items-center space-x-1 bg-primary-500 hover:bg-primary-600 text-white px-3 py-2 rounded-lg transition-colors"
          >
            <CalendarIcon size={16} />
            <span>Calendar View</span>
          </Link>
        </div>
      </div>

      <div className="bg-surface-50 dark:bg-surface-800 rounded-lg shadow-sm">
        <div className="border-b border-surface-200 dark:border-surface-700 px-6 py-4 flex items-center justify-between">
          <h2 className="font-medium">Upcoming Schedule</h2>
        </div>

        <div className="divide-y divide-surface-200 dark:divide-surface-700">
          {scheduleEvents.map((event) => (
            <div
              key={event.id}
              className="p-4 flex items-center hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors"
            >
              <div className="flex-grow">
                <h3 className="font-medium text-surface-800 dark:text-surface-200">
                  {event.title}
                </h3>
                <div className="text-sm text-surface-600 dark:text-surface-400 flex items-center space-x-2 mt-1">
                  <CalendarIcon size={14} />
                  <span>
                    {formatDate(event.start)}{" "}
                    {event.end && `- ${formatDate(event.end)}`}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 rounded-full text-xs ${getPriorityClass(
                    event.priority
                  )}`}
                >
                  {event.priority.charAt(0).toUpperCase() +
                    event.priority.slice(1)}
                </span>

                <span
                  className={`px-2 py-1 rounded-full text-xs ${getStatusClass(
                    event.status
                  )}`}
                >
                  {event.status.charAt(0).toUpperCase() +
                    event.status.slice(1).replace("-", " ")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 text-center text-surface-500 dark:text-surface-400">
        <p className="text-sm">
          This is a list view of scheduled events. For a graphical calendar
          view, click the Calendar View button.
        </p>
      </div>
    </div>
  );
}
