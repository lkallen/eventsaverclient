"use client";
import { useState } from "react";
import EventDrawer from "./EventDrawer";

export default function ListItem({ event }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function openDrawer() {
    setDrawerOpen(true);
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <>
      <div
        onClick={() => openDrawer()}
        className="group flex items-center justify-between py-3 px-3 hover:border-accent cursor-pointer transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="text-sm text-muted-foreground font-medium mb-1">
            {formatDate(event.normalizedDate)}
          </div>
          <h3 className="font-semibold capitalize text-primary">
            {event.title.toLowerCase()}
          </h3>
        </div>
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ml-2">
          <svg
            className="h-5 w-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      <EventDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        event={event}
      />
    </>
  );
}
