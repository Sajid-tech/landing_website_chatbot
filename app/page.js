import Business from "@/components/business/Business";
import Faq from "@/components/faq/Faq";
import Hero from "@/components/hero/Hero";
import Pricing from "@/components/pricing/Pricing";
import Service from "@/components/service/Service";
import SimpleStep from "@/components/simpleStep/SimpleStep";
import WhyRmax from "@/components/whyRmax/WhyRmax";

/**
 * Home Page Component
 *
 * This is the main entry point for the application's home page. It serves as the
 * container for all the sub-components that make up the home page experience.
 *
 * The component imports and renders the following sections:
 * - Hero: The main hero section with a call-to-action .
 * - SimpleStep: A section showcasing the key steps for using the product.
 * - WhyRmax: A section explaining the benefits and unique value proposition of Rmax.
 * - Service: A section highlighting the core services or product features.
 * - Pricing: A section displaying the pricing plans and options.
 * - Business: A section focused on the  link of the app.
 * - Faq: A section with frequently asked questions and answers.
 *
 * The component is responsible for  composition of these
 * sections to create a cohesive and visually appealing home page experience for
 * the end-user.
 *
 * The rendered Home Page component.
 */

export default function Home() {
  return (
    <div className="max-w-[100%] ">
      {/* Hero Section */}
      <Hero />
      {/* Simple Steps Section */}
      <SimpleStep />
      {/* Why Rmax Section */}
      <WhyRmax />
      {/* Services Section */}
      <Service />
      {/* Pricing Section */}
      <Pricing />

      {/* Business Section */}
      <Business />
      {/* FAQ Section */}
      <Faq />
    </div>
  );
}
