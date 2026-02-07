import TermsAndConditionsSection from "@/components/TermsAndConditionsSection";

export const metadata = {
  title: "Terms & Conditions | Poovar Island Boating",
  description:
    "Terms and conditions governing Poovar Island Boating services, bookings, payments, and Kerala backwater cruise operations.",
  alternates: {
    canonical: "https://poovarislandboating.com/terms-conditions",
  },
};

const TERMS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms & Conditions - Poovar Island Boating",
  description:
    "Terms and conditions for Poovar Island boating services and backwater cruise reservations.",
  url: "https://poovarislandboating.com/terms-conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TERMS_SCHEMA) }}
      />

      <main role="main">
        <section aria-label="Terms and Conditions">
          <h1 className="sr-only">
            Terms and Conditions for Poovar Island Boating
          </h1>
          <TermsAndConditionsSection />
        </section>
      </main>
    </>
  );
}
