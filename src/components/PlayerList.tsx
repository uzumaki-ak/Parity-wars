// "use client";

// interface Player {
//   id: string;
//   name: string;
//   isEliminated: boolean;
// }

// export default function PlayerList({ players }: { players: Player[] }) {
//   return (
//     <div className="mt-8">
//       <h2 className="text-2xl mb-4">Players ({players.length})</h2>
//       <div className="space-y-2">
//         {players.map((player) => (
//           <div
//             key={player.id}
//             className={`p-3 rounded-lg ${
//               player.isEliminated
//                 ? "bg-red-900/30 line-through"
//                 : "bg-gray-800 animate-pulse"
//             }`}
//           >
//             {players.map((player) => (
//               <li key={decodeURIComponent(player.id)}>
//                 {decodeURIComponent(player.name)}
//               </li>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



'use client';

interface Player {
  id: string;
  name: string;
  isEliminated: boolean;
}

export default function PlayerList({ players }: { players: Player[] }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-2xl mb-4">Players ({players.length})</h2>
      <ul className="space-y-2">
        {players
          .filter((player, index, self) => 
            // Remove duplicates by ID
            index === self.findIndex(p => p.id === player.id)
          )
          .map(player => (
            <li 
              key={player.id} 
              className={`p-2 rounded ${player.isEliminated ? 'bg-red-900/30 line-through' : 'bg-gray-700'}`}
            >
              {player.name}
            </li>
          ))}
      </ul>
    </div>
  );
}