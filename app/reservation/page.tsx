import ReservationClient from "./ReservationClient";

/* ---------- SEO Metadata ---------- */
export const metadata = {
  title: "Poovar Boating Reservation | Book Poovar Island Boating Online",
  description:
    "Book Poovar boating and Poovar island boating online. Choose golden beach cruise, island boating tour, or full-day Kerala backwater cruise at Kayaloram Resort Poovar.",
  keywords:
    "Poovar boating, Poovar island boating, Poovar boating booking, Kerala backwater cruise, golden beach cruise Poovar, Kayaloram Resort Poovar",
  alternates: {
    canonical: "https://www.poovarislandboating.com/reservation",
  },
};

export default function ReservationPage() {
  return <ReservationClient />;
}
