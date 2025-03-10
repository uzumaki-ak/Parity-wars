import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Majority Loses</h1>
      <Link 
        href="/lobby"
        className="bg-blood/80 hover:bg-blood text-dark font-bold py-2 px-6 rounded-lg text-xl transition-colors"
      >
        Start Game
      </Link>
      <div className="mt-8 text-lg text-center">
        <p>Rules:</p>
        <ul className="list-disc list-inside mt-2 text-gray-400">
          <li>Players choose Heads or Tails each round</li>
          <li>Majority choice gets eliminated</li>
          <li>Last remaining player wins</li>
        </ul>
      </div>
    </div>
  );
}