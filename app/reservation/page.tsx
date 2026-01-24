import ReservationClient from "./ReservationClient";
import type { Metadata } from "next";

/* ---------- SEO Metadata ---------- */
export const metadata: Metadata = {
  title:
    "Poovar Boating Reservation | Book Poovar Island Boating & Backwater Cruise",
  description:
    "Reserve Poovar boating and Poovar island boating online at Kayaloram Resort. Book golden beach cruises, island boating tours, and Kerala backwater cruises with instant confirmation.",
  keywords: [
    "Poovar boating reservation",
    "Poovar island boating booking",
    "Poovar boat service",
    "Kerala backwater cruise booking",
    "Golden beach cruise Poovar",
    "Kayaloram Resort Poovar",
    "Poovar boating price",
    "Poovar boating online booking",
    "Trivandrum backwater boating",
    "Poovar tourism boating",
  ],
  alternates: {
    canonical: "https://www.poovarislandboating.com/reservation",
  },
};

/* ---------- Reservation Page ---------- */
export default function ReservationPage() {
  return <ReservationClient />;
}
