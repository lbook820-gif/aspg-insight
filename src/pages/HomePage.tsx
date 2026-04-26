import LatestNews from '../sections/LatestNews';
import WeeklySummary from '../sections/WeeklySummary';

export default function HomePage() {
  return (
    <main className="pt-16">
      <LatestNews />
      <WeeklySummary />
    </main>
  );
}
