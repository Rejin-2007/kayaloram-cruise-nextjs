import AboutInformation from '@/components/AboutInformation'
import Enquiry from '@/components/Enquiry'
import Reviews from '@/components/Reviews'

export const metadata = {
    title: "About Kayaloram Resort | Poovar Island Boating",
    description:
        "Learn more about Kayaloram Resort and Poovar Island boating services. Discover Kerala backwater experiences, guest reviews, and easy booking.",
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
