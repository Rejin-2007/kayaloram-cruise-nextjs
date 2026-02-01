/* ---------- BLOG CONTENT DATA ---------- */
const blogContent = {
  heading: "Poovar Boating Blog & Travel Guide",
  intro:
    "Welcome to the Poovar Boating Blog — your trusted source for news, tips, stories, and guides related to Poovar island boating, Kerala backwater cruises, and golden beach experiences near Kayaloram Resort.",

  sections: [
    {
      title: "Why Poovar Island Boating Is a Must-Visit Experience",
      content:
        "Poovar Island is a rare destination where river, sea, lake, and golden sand meet naturally. Boating in Poovar offers calm backwaters, mangrove forests, floating cottages, and peaceful scenery guided by experienced local boat operators.",
    },
    {
      title: "Different Types of Boating in Poovar",
      content:
        "Visitors can enjoy sunrise boating, sunset cruises, river cruises, golden beach boating, island hopping, and private boat services. Each boating experience provides a unique view of Poovar’s untouched natural beauty.",
    },
    {
      title: "Best Time to Visit Poovar for Boating",
      content:
        "The best time for Poovar boating is from October to March, when the climate is pleasant and water conditions are ideal. Early morning and sunset boat rides are the most popular due to cooler weather and scenic lighting.",
    },
    {
      title: "Is Poovar Boating Safe for Tourists?",
      content:
        "Poovar boating is safe when operated by licensed and experienced local boatmen. Life jackets are provided, boats are well maintained, and routes are carefully chosen to ensure a safe and enjoyable experience for all visitors.",
    },
    {
      title: "Poovar Boating Near Kayaloram Resort",
      content:
        "Kayaloram Resort offers easy access to Poovar boating services, allowing guests to enjoy river cruises, backwater boating, and golden beach trips with professional guidance and comfortable arrangements.",
    },
  ],

  links: [
    { label: "Book Poovar Boating", href: "/reservation" },
    { label: "View Boating Packages", href: "/service" },
  ],
};

/* ---------- BLOG COMPONENT (SERVER) ---------- */
export default function Blog() {
  return (
    <section className="bg-emerald-950 text-white py-20 px-4">
      {/* Centered Container */}
      <div className="mx-auto max-w-4xl text-center">
        {/* H1 */}
        <h1 className="text-4xl font-extrabold tracking-tight mb-6">
          {blogContent.heading}
        </h1>

        {/* Intro */}
        <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-16">
          {blogContent.intro}
        </p>
      </div>

      {/* Blog Sections */}
      <div className="mx-auto max-w-3xl space-y-12 px-2">
        {blogContent.sections.map((section, index) => (
          <article
            key={index}
            className="border border-emerald-400/20 rounded-2xl p-6 bg-white/5"
          >
            <h2 className="text-2xl font-semibold mb-3 text-emerald-300">
              {section.title}
            </h2>
            <p className="text-gray-200 leading-relaxed">
              {section.content}
            </p>
          </article>
        ))}
      </div>

      {/* Internal Links */}
      <nav className="mt-16 flex flex-wrap justify-center gap-6 text-emerald-300 font-medium underline">
        {blogContent.links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </section>
  );
}
