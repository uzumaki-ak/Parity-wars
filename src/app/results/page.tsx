// 'use client'
// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import socket from '@/lib/socket'

// interface ResultsData {
//   majority: 'heads' | 'tails'
//   minority: 'heads' | 'tails'
// }

// export default function ResultsPage() {
//   const [results, setResults] = useState<ResultsData | null>(null)
//   const [countdown, setCountdown] = useState(5)
//   const router = useRouter()

//   useEffect(() => {
//     const handleRoundResults = (data: { results: ResultsData }) => {
//       setResults(data.results)
//     }

//     socket.on('roundResults', handleRoundResults)

//     const timer = setInterval(() => {
//       setCountdown(prev => {
//         if (prev === 1) {
//           router.push('/game')
//           return 5
//         }
//         return prev - 1
//       })
//     }, 1000)

//     return () => {
//       clearInterval(timer)
//       socket.off('roundResults', handleRoundResults)
//     }
//   }, [router])

//   if (!results) return <div className="text-blood text-center">Loading results...</div>

//   return (
//     <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
//       <h1 className="text-4xl font-bold mb-8">Round Results</h1>
//       <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
//         <div className="mb-6">
//           <h2 className="text-2xl mb-2">Majority Choice:</h2>
//           <div className="text-blood text-3xl font-bold uppercase">
//             {results.majority}
//           </div>
//         </div>
//         <div className="mb-8">
//           <h2 className="text-2xl mb-2">Safe Choice:</h2>
//           <div className="text-green-500 text-3xl font-bold uppercase">
//             {results.minority}
//           </div>
//         </div>
//         <div className="text-center text-xl">
//           Next round starting in {countdown}...
//         </div>
//       </div>
//     </div>
//   )
// }


// 'use client';
// import { useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';

// export default function ResultsPage() {
//   const params = useSearchParams();
//   const outcome = params.get('outcome');

//   useEffect(() => {
//     // Force hard navigation after 5 seconds
//     const timer = setTimeout(() => {
//       window.location.href = '/';
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-8">🎮 Game Over 🎮</h1>
//         <div className="bg-gray-800 p-8 rounded-lg mb-8">
//           {outcome === 'draw' ? (
//             <p className="text-3xl">All players eliminated!<br/>No winner this round.</p>
//           ) : (
//             <p className="text-3xl">Invalid game outcome</p>
//           )}
//         </div>
//         <p className="text-xl mb-4">Redirecting to homepage in 5 seconds...</p>
//         <Link
//           href="/"
//           className="bg-blood/80 hover:bg-blood text-dark font-bold py-3 px-8 rounded-lg"
//         >
//           Play Again
//         </Link>
//       </div>
//     </div>
//   );
// }



// 'use client';
// import { useEffect } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';

// export default function ResultsPage() {
//   const params = useSearchParams();
//   const outcome = params.get('outcome');

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       window.location.href = '/';
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-8">🎮 Game Over 🎮</h1>
//         <div className="bg-gray-800 p-8 rounded-lg mb-8">
//           {outcome === 'timeout' ? (
//             <p className="text-3xl">⏰ Time's Up!<br/>No winner this round.</p>
//           ) : (
//             <p className="text-3xl">Invalid game outcome</p>
//           )}
//         </div>
//         <Link
//           href="/"
//           className="bg-blood/80 hover:bg-blood text-dark font-bold py-3 px-8 rounded-lg"
//         >
//           Play Again
//         </Link>
//       </div>
//     </div>
//   );
// }


'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ResultsPage() {
  const params = useSearchParams();
  const outcome = params.get('outcome');

  const getMessage = () => {
    switch(outcome) {
      case 'timeout':
        return "⏰ Time's Up! No winner this round";
      case 'nowinner':
        return "🎮 All players eliminated! No winner";
      case 'invalid':
        return "⚠️ Invalid game session";
      default:
        return "🎮 Game Over";
    }
  };

  return (
    <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">Game Results</h1>
        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <p className="text-3xl">{getMessage()}</p>
        </div>
        <Link
          href="/"
          className="bg-blood/80 hover:bg-blood text-dark font-bold py-3 px-8 rounded-lg"
        >
          Play Again
        </Link>
      </div>
    </div>
  );
}