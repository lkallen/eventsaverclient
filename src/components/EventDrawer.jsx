import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

import React from "react";

export default function EventDrawer({ open, onOpenChange, event }) {
  function formatDate(dateString) {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${month}-${day}-${year}`;
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader className="space-y-3 px-6 pt-8 pb-2">
          <DrawerTitle className="text-2xl font-bold tracking-tight capitalize text-primary">
            {event.title.toLowerCase()}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            Event details for {event.title}
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-6 pt-2 flex-1 overflow-y-auto">
          <div className="divide-y">
            {/* Date Section */}
            <div className="space-y-2 pb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                Date
              </h3>
              <p className="text-base font-medium text-foreground">
                {formatDate(event.normalizedDate)}
              </p>
            </div>

            {/* Location Section */}
            {event.location && (
              <div className="space-y-2 py-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Location
                </h3>
                <p className="text-base font-medium text-foreground">
                  {event.location}
                </p>
              </div>
            )}

            {/* Description Section */}
            {event.description && (
              <div className="space-y-2 pt-6">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Details
                </h3>
                <p className="text-base leading-relaxed text-foreground">
                  {event.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
