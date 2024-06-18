import FeaturesSection from '@/components/custom/FeaturesSection';
import HeroSection from '@/components/custom/HeroSection';
import useHome from '@/hooks/app/useHome';

export default async function Home() {
  const { heroData, featuresData } = await useHome();

  return (
    <main>
      <HeroSection data={heroData} />
      <FeaturesSection data={featuresData} />
    </main>
  );
}
