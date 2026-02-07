import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Poovar Boating",
  description:
    "Official cancellation and refund policy for Poovar boating and Poovar island boating services by Kayaloram Cruise, Kerala.",
  alternates: {
    canonical: "https://www.poovarislandboating.com/refund-cancellation-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CancellationRefundPolicy() {
  return (
    <main className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Cancellation & Refund Policy – Poovar Boating",
            url: "https://www.poovarislandboating.com/refund-cancellation-policy",
            isPartOf: {
              "@type": "WebSite",
              name: "Poovar Island Boating",
              url: "https://www.poovarislandboating.com",
            },
            about: {
              "@type": "LocalBusiness",
              name: "Kayaloram Cruise Poovar",
              telephone: "+91-8139031924",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Poovar",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
            },
          }),
        }}
      />

      <article className="mx-auto max-w-4xl">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Cancellation & Refund Policy
          </h1>
          <p className="mt-3 text-gray-600">
            Poovar boating & Poovar island boating services
          </p>
        </header>

        <section className="space-y-8 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Cancellation Policy
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>
                100% refund for cancellations made 48 hours before scheduled
                Poovar boating service.
              </li>
              <li>
                50% refund for cancellations made within 48 hours of departure.
              </li>
              <li>
                No refunds for same-day cancellations, no-shows, or late arrivals.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Refund Processing
            </h2>
            <p className="mt-3">
              Approved refunds are processed to the original payment method
              within 7–10 business days. International transactions may take up
              to 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              How to Request a Refund
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-6">
              <li>Email support@poovarboating.in with your booking ID.</li>
              <li>Include booking date, package type, and contact details.</li>
              <li>Wait for confirmation within 4–6 business hours.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              Contact & Support
            </h2>
            <p className="mt-3">
              For help with Poovar boating cancellations or refunds, contact our
              support team.
            </p>

          </section>
        </section>

        <nav className="sr-only">
          <Link href="/">Poovar Boating Home</Link>
          <Link href="/services">Poovar Boating Services</Link>
          <Link href="/reservation">Poovar Boating Booking</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </nav>
      </article>
    </main>
  );
}
