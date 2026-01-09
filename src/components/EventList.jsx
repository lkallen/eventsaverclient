"use client";
import React, { useEffect, useState } from "react";
import { getEvents } from "@/actions/actions";
import ListItem from "./ListItem";

export default function EventList() {
  const [events, setEvents] = useState([]);

  async function getAllEvents() {
    const data = await getEvents();
    setEvents(data);
    console.log(data);
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  const eventItems = events.map((event) => (
    <ListItem key={event.id} event={event} />
  ));

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-8 pb-4 border-b-4">
        <h1 className="text-3xl font-bold text-primary text-center">Events</h1>
      </div>
      <div className="divide-y divide-border">{eventItems}</div>
    </div>
  );
}
