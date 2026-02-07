import PrivacyPolicySection from "@/components/PrivacyPolicySection";

export const metadata = {
  title: "Privacy Policy | Poovar Island Boating",
  description:
    "Privacy policy for Poovar Island Boating explaining how user data is collected, used, and protected for Poovar backwater cruise services.",
  alternates: {
    canonical: "https://poovarislandboating.com/privacy-policy",
  },
};

const PRIVACY_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy - Poovar Island Boating",
  description:
    "Privacy policy detailing data collection, usage, and protection for Poovar Island boating and backwater cruise services.",
  url: "https://poovarislandboating.com/privacy-policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRIVACY_SCHEMA) }}
      />

      <main role="main">
        <section aria-label="Privacy Policy">
          <h1 className="sr-only">
            Privacy Policy for Poovar Island Boating Services
          </h1>
          <PrivacyPolicySection />
        </section>
      </main>
    </>
  );
}
