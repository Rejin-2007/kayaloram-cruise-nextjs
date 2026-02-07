import Script from "next/script";
import Link from "next/link";

export default function TermsAndConditionsSection() {
  return (
    <>
      <Script
        id="terms-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://poovarislandboating.com/terms-and-conditions",
            "url": "https://poovarislandboating.com/terms-and-conditions",
            "name": "Terms and Conditions | Poovar Boating",
            "description":
              "Terms and Conditions for Poovar Boating services including booking, cancellation, pricing, and user responsibilities.",
            "inLanguage": "en-IN",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Poovar Island Boating",
              "url": "https://poovarislandboating.com"
            }
          }),
        }}
      />

      <section className="bg-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 sm:mb-12 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Terms and Conditions for Poovar Boating Services
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">
              Official terms governing Poovar boating and Kerala backwater cruise bookings
            </p>
          </header>

          <div className="space-y-8 sm:space-y-12">
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                General Terms and Acceptance
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                By booking Poovar boating services, you agree to these terms governing Kerala backwater cruises,
                island boating, and related tourism activities.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Booking and Reservations
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                All bookings are confirmed only through official Poovar Boating channels and authorized partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Pricing and Payments
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Prices may vary based on season, availability, and government regulations applicable in Kerala.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                User Responsibilities
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Guests must follow safety instructions and provide accurate booking information.
              </p>
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Service Cancellation
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Poovar Boating reserves the right to cancel services due to weather or safety concerns.
              </p>
            </section>

            <nav className="mt-10 flex flex-wrap justify-center gap-4 text-sm sm:text-base">
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
              <Link href="/service" className="text-blue-600 hover:underline">
                Services
              </Link>
              <Link href="/reservation" className="text-blue-600 hover:underline">
                Booking
              </Link>
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
