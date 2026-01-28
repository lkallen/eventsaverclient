# Event Saver

## An app that transforms event images into organized information

This application is the frontend interface for viewing structured event information. It’s designed to work alongside a separate backend service that parses event details from screenshots or images using OCR and custom image‑processing logic. The frontend is built as a Progressive Web App (PWA), giving users a more app‑like experience when accessing event information. It can be installed directly onto a device, placing an app icon on the home screen for quick access.

## Why I Built This

I built this because I was constantly saving screenshots or photos of events from a variety of sources. Over time, they turned into an unorganized archive buried in my phone’s images, resulting in forgotten events or information being hard to find. This app gives those scattered images a structured place to live so event details are easy to view and keep track of.

## Tech Stack

- React with Next.js
- JavaScript
- Tailwind CSS
- shadcn/ui
- Drizzle ORM
- PostgreSQL (hosted on Neon)

## Image Processing Service

Event data is extracted from images using a [separate service](https://github.com/lkallen/eventsaverserver?tab=readme-ov-file) built with Node.js, Express, and OCR technology.
