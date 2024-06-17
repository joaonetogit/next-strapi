import { Button } from '@/components/ui/Button';
import useHome from '@/hooks/app/useHome';

export default async function Home() {
  const { Title, Description } = await useHome();

  return (
    <main>
      <div className="container">
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h1>{Title}</h1>
          <p>{Description}</p>
          <div>
            <Button>
              <span>Learn more</span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
