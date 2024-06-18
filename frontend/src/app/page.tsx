import FeaturesSection from '@/components/custom/FeaturesSection';
import HeroSection from '@/components/custom/HeroSection';
import useHome from '@/hooks/app/useHome';

export default async function Home() {
  const { blocks } = await useHome();
  const heroData = blocks[0];
  const featuresData = blocks[1];

  return (
    <main>
      <HeroSection data={heroData} />
      <div className="container">
        <FeaturesSection data={featuresData} />
      </div>
    </main>
  );
}
