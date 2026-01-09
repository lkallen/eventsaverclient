"use server";

import { db } from "@/db/drizzle";
import { events } from "@/db/schema";
import { asc } from "drizzle-orm";

export async function getEvents() {
  const data = await db
    .select()
    .from(events)
    .orderBy(asc(events.normalizedDate));
  return data;
}
