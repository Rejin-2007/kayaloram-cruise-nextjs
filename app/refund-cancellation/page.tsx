import CancellationRefundPolicy from "@/components/CancellationRefundPolicySection";

export const metadata = {
  title: "Refund & Cancellation Policy | Poovar Island Boating",
  description:
    "Cancellation and refund policy for Poovar Island Boating bookings and Kerala backwater cruise reservations.",
  alternates: {
    canonical: "https://poovarislandboating.com/refund-cancellation",
  },
};

const REFUND_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Refund & Cancellation Policy - Poovar Island Boating",
  description:
    "Policy explaining cancellations, refunds, and rescheduling of Poovar Island boating services.",
  url: "https://poovarislandboating.com/refund-cancellation",
};

export default function RefundCancellationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REFUND_SCHEMA) }}
      />

      <main role="main">
        <section aria-label="Refund and Cancellation Policy">
          <h1 className="sr-only">
            Refund and Cancellation Policy for Poovar Island Boating
          </h1>
          <CancellationRefundPolicy />
        </section>
      </main>
    </>
  );
}
