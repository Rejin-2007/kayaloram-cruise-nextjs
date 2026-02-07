import Link from "next/link";

const blogContent = {
  heading: "Poovar Boating Blog & Travel Guide",
  intro:
    "Welcome to the Poovar Boating Blog — your trusted source for guides, tips, and insights on Poovar island boating, Kerala backwater cruises, and golden beach experiences.",
  sections: [
    {
      title: "Why Poovar Island Boating Is a Must-Visit Experience",
      content:
        "Poovar Island is where river, sea, lake, and golden sand meet naturally. Boating here offers calm backwaters, mangrove forests, floating cottages, and serene scenery guided by experienced local operators.",
    },
    {
      title: "Different Types of Boating in Poovar",
      content:
        "Enjoy sunrise boating, sunset cruises, river cruises, golden beach boating, island hopping, and private boat services. Each ride showcases Poovar’s untouched natural beauty.",
    },
    {
      title: "Best Time to Visit Poovar for Boating",
      content:
        "October to March is ideal for Poovar boating. Early morning and sunset rides are popular for cooler weather and scenic views.",
    },
    {
      title: "Is Poovar Boating Safe for Tourists?",
      content:
        "Poovar boating is safe with licensed operators. Life jackets, maintained boats, and safe routes ensure a secure experience.",
    },
    {
      title: "Poovar Boating Near Kayaloram Resort",
      content:
        "Kayaloram Resort provides easy access to Poovar boating services including backwater cruises and golden beach trips.",
    },
  ],
};

export default function Blog() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": "https://poovarislandboating.com/blog#content",
            "name": "Poovar Boating Blog",
            "url": "https://poovarislandboating.com/blog",
            "publisher": {
              "@type": "Organization",
              "name": "Poovar Island Boating",
              "url": "https://poovarislandboating.com/"
            }
          }),
        }}
      />

      <section
        className="bg-emerald-950 text-white py-20 px-4"
        aria-label="Poovar boating blog and travel guide"
      >
        <header className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-6">
            {blogContent.heading}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-16">
            {blogContent.intro}
          </p>
        </header>

        <div className="mx-auto max-w-3xl space-y-12 px-2">
          {blogContent.sections.map((section, index) => (
            <article
              key={index}
              className="border border-emerald-400/20 rounded-2xl p-6 bg-white/5"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <h2
                className="text-2xl font-semibold mb-3 text-emerald-300"
                itemProp="headline"
              >
                {section.title}
              </h2>
              <p
                className="text-gray-200 leading-relaxed"
                itemProp="articleBody"
              >
                {section.content}
              </p>
            </article>
          ))}
        </div>

        <nav
          className="mt-16 flex flex-wrap justify-center gap-6 text-emerald-300 font-medium underline"
          aria-label="Poovar boating internal navigation"
        >
          <Link href="/reservation">Book Poovar Boating</Link>
          <Link href="/service">View Poovar Boating Packages</Link>
          <Link href="/gallery">Poovar Boating Gallery</Link>
        </nav>
      </section>
    </>
  );
}
