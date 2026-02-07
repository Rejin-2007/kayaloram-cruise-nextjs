import Head from "next/head";

export default function PrivacyPolicySection() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Poovar Island Boating Services</title>
        <meta
          name="description"
          content="Privacy Policy of Poovar Island Boating Services. Learn how customer data is collected, used, and protected for Poovar backwater cruise and boat ride bookings."
        />
        <link
          rel="canonical"
          href="https://poovarislandboating.com/privacy-policy"
        />
        <meta name="robots" content="index,follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PrivacyPolicy",
              name: "Poovar Island Boating Privacy Policy",
              url: "https://poovarislandboating.com/privacy-policy",
              datePublished: "2025-01-27",
              publisher: {
                "@type": "Organization",
                name: "Poovar Island Boating",
                url: "https://poovarislandboating.com",
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
      </Head>

      <section className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-emerald-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Poovar Island Boating Services
            </p>
          </header>

          {/* Policy Card */}
          <div className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8 md:p-12 space-y-8 text-gray-700 leading-relaxed">
            <p>
              Poovar Island Boating is committed to protecting your privacy and
              safeguarding personal information collected during boat ride and
              backwater cruise bookings in Poovar, Kerala.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Information We Collect
              </h2>
              <p>
                We collect personal details such as name, phone number, email
                address, booking preferences, and payment references strictly
                for service fulfillment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Use of Information
              </h2>
              <p>
                Information is used for booking confirmation, customer support,
                service improvements, safety communication, and legal
                compliance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Information Sharing
              </h2>
              <p>
                Data is shared only with operational partners such as boat
                operators or authorities when legally required.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Data Security
              </h2>
              <p>
                Secure servers, SSL encryption, and restricted access protocols
                protect all stored and transmitted data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Your Rights
              </h2>
              <p>
                You may request access, correction, or deletion of personal data
                by contacting our support team.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-emerald-800 mb-2">
                Policy Updates
              </h2>
              <p>
                Updates to this policy will be published on this page with a
                revised effective date.
              </p>
            </div>
          </div>

          {/* Footer Nav */}
          <div className="mt-12 text-center text-sm text-gray-600">
            <a
              href="/"
              className="text-emerald-700 font-semibold hover:underline"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
