export default function manifest() {
  return {
    name: "Event Saver",
    short_name: "Event Saver",
    description: "A PWA to view events saved from images",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/calendar-192x192.jpg",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/calendar-512x512.jpg",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
