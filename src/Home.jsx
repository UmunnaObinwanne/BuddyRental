import Hero from "./Hero";

import FeaturesSection from "./homepage-components/FeaturesSection";

export default function Home() {
  return (
    <div className="bg-light">
      <Hero />
      <FeaturesSection />
    </div>
  );
}
