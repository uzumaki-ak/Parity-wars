// 'use client'
// import { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'

// export default function WinnerPage() {
//   const [winner, setWinner] = useState('')
//   const params = useSearchParams()

//   useEffect(() => {
//     setWinner(params.get('name') || 'Unknown Player')
//   }, [params])

//   return (
//     <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-8">🏆 Winner! 🏆</h1>
//         <div className="bg-gray-800 p-8 rounded-lg mb-8">
//           <p className="text-3xl mb-4">Congratulations</p>
//           <p className="text-4xl font-bold text-blood">{winner}</p>
//         </div>
//         <Link
//           href="/"
//           className="bg-blood/80 hover:bg-blood text-dark font-bold py-3 px-8 rounded-lg"
//         >
//           Play Again
//         </Link>
//       </div>
//     </div>
//   )
// }




// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function WinnerPage() {
//   const [winner, setWinner] = useState('');
//   const params = useSearchParams();
//   const router = useRouter()


// // Add error handling
// useEffect(() => {
//   const name = params.get('name');
//   if (!name) {
//     router.push('/results?outcome=invalid');
//   } else {
//     setWinner(decodeURIComponent(name));
//   }
// }, [params, router]);



//   return (
//     <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold mb-8">🏆 Winner! 🏆</h1>
//         <div className="bg-gray-800 p-8 rounded-lg mb-8">
//           <p className="text-3xl mb-4">Congratulations</p>
//           <p className="text-4xl font-bold text-blood">{winner}</p>
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


'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function WinnerPage() {
  const [winner, setWinner] = useState('');
  const params = useSearchParams();

  useEffect(() => {
    const name = params.get('name');
    if (!name) {
      window.location.href = '/results?outcome=invalid';
    } else {
      setWinner(decodeURIComponent(name));
    }
  }, [params]);

  return (
    <div className="min-h-screen bg-dark text-blood flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">🏆 Winner! 🏆</h1>
        <div className="bg-gray-800 p-8 rounded-lg mb-8">
          <p className="text-3xl">Congratulations</p>
          <p className="text-4xl font-bold mt-4">{winner}</p>
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