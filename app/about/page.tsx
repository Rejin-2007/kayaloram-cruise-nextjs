import AboutInformation from '@/components/AboutInformation'
import Enquiry from '@/components/Enquiry'
import Reviews from '@/components/Reviews'

export const metadata = {
  title: "About Kayaloram Resort | Poovar Island Boating & Backwater Cruise",
  description:
    "Learn more about Kayaloram Resort and Poovar Island boating services. Discover Kerala backwater cruises, golden beach tours, guest reviews, and easy booking in Poovar.",
  keywords: [
    "Poovar boating",
    "Poovar island boating",
    "Kayaloram resort",
    "Poovar backwater cruise",
    "Poovar boat service",
    "Poovar golden beach boating",
    "Kerala backwater boating",
    "Poovar boating price",
    "Poovar tourist boating",
    "Poovar island resort",
    "Poovar river cruise",
    "Trivandrum backwater boating",
    "Poovar boating reviews",
    "Poovar houseboat experience"
  ],
};

export default function page() {
  return (
    <div>
      <AboutInformation />
      <Reviews />
      <Enquiry />
    </div>
  )
}
