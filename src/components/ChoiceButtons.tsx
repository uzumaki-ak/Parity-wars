// 'use client'
// import { useState } from 'react'
// import socket from '@/lib/socket'

// export default function ChoiceButtons({ 
//   roomId,
//   disabled
// }: { 
//   roomId: string
//   disabled: boolean
// }) {
//   const [selected, setSelected] = useState<'heads' | 'tails' | null>(null)

//   const handleChoice = (choice: 'heads' | 'tails') => {
//     if (!disabled) {
//       setSelected(choice)
//       socket.emit('submitChoice', { choice, roomId })
//     }
//   }

//   return (
//     <div className="space-y-4">
//       <button
//         onClick={() => handleChoice('heads')}
//         className={`w-full py-4 text-xl font-bold rounded transition-all
//           ${selected === 'heads' ? 'bg-blood/90' : 'bg-gray-800'}
//           ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blood/50'}
//         `}
//       >
//         HEADS
//       </button>
//       <button
//         onClick={() => handleChoice('tails')}
//         className={`w-full py-4 text-xl font-bold rounded transition-all
//           ${selected === 'tails' ? 'bg-blood/90' : 'bg-gray-800'}
//           ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blood/50'}
//         `}
//       >
//         TAILS
//       </button>
//     </div>
//   )
// }



'use client';
import { useState } from 'react';
import socket from '@/lib/socket';

export default function ChoiceButtons({ 
  roomId,
  disabled
}: { 
  roomId: string;
  disabled: boolean;
}) {
  const [selected, setSelected] = useState<'heads' | 'tails' | null>(null);

  const handleChoice = (choice: 'heads' | 'tails') => {
    if (!disabled) {
      setSelected(choice);
      socket.emit('submitChoice', { choice, roomId });
    }
  };

  return (
    <div className="space-y-4">
      <button
        onClick={() => handleChoice('heads')}
        className={`w-full py-4 text-xl font-bold rounded transition-all
          ${selected === 'heads' ? 'bg-blood/90' : 'bg-gray-800'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blood/50'}
        `}
      >
        HEADS
      </button>
      <button
        onClick={() => handleChoice('tails')}
        className={`w-full py-4 text-xl font-bold rounded transition-all
          ${selected === 'tails' ? 'bg-blood/90' : 'bg-gray-800'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blood/50'}
        `}
      >
        TAILS
      </button>
    </div>
  );
}