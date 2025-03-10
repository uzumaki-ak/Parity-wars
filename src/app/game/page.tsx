// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import socket from '@/lib/socket';
// import ChoiceButtons from '@/components/ChoiceButtons';
// import PlayerList from '@/components/PlayerList';
// import GameStatus from '@/components/GameStatus';

// interface GamePlayer {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// export default function GamePage() {
//   const [players, setPlayers] = useState<GamePlayer[]>([]);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [round, setRound] = useState(1);
//   const params = useSearchParams();
//   const roomId = params.get('room');

//   useEffect(() => {
//     if (!roomId) return;

//     const handleNewRound = (data: { round: number; players: GamePlayer[] }) => {
//       setRound(data.round);
//       setPlayers(data.players);
//       setTimeLeft(30);
//     };

//     const handleRoundResults = (data: { 
//       results: { majority: string; minority: string };
//       players: GamePlayer[] 
//     }) => {
//       setPlayers(data.players);
//     };

//     const handleGameEnd = (data: { winner: GamePlayer }) => {
//       window.location.href = `/winner?name=${data.winner.name}`;
//     };

//     socket.on('newRound', handleNewRound);
//     socket.on('roundResults', handleRoundResults);
//     socket.on('gameEnd', handleGameEnd);

//     return () => {
//       socket.off('newRound', handleNewRound);
//       socket.off('roundResults', handleRoundResults);
//       socket.off('gameEnd', handleGameEnd);
//     };
//   }, [roomId]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => Math.max(0, prev - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <GameStatus round={round} timeLeft={timeLeft} />
//       <div className="grid md:grid-cols-2 gap-8 mt-8">
//         <ChoiceButtons roomId={roomId!} disabled={timeLeft === 0} />
//         <PlayerList players={players} />
//       </div>
//     </div>
//   );
// }

// 'use client'
// import { useEffect, useState } from 'react'
// import { useSearchParams } from 'next/navigation'
// import socket from '@/lib/socket'
// import ChoiceButtons from '@/components/ChoiceButtons'
// import PlayerList from '@/components/PlayerList'
// import GameStatus from '@/components/GameStatus'

// interface GamePlayer {
//   id: string
//   name: string
//   choice: 'heads' | 'tails' | null
//   isEliminated: boolean
// }

// export default function GamePage() {
//   const [players, setPlayers] = useState<GamePlayer[]>([])
//   const [timeLeft, setTimeLeft] = useState(30)
//   const [round, setRound] = useState(1)
//   const params = useSearchParams()
//   const roomId = params.get('room')

//   useEffect(() => {
//     if (!roomId) return

//     const handleNewRound = (data: { round: number; players: GamePlayer[] }) => {
//       setRound(data.round)
//       setPlayers(data.players)
//       setTimeLeft(30)
//     }

//     const handleRoundResults = (data: { results: any; players: GamePlayer[] }) => {
//       setPlayers(data.players)
//     }

//     const handleGameEnd = (data: { winner: GamePlayer }) => {
//       window.location.href = `/winner?name=${data.winner.name}`
//     }

//     socket.on('newRound', handleNewRound)
//     socket.on('roundResults', handleRoundResults)
//     socket.on('gameEnd', handleGameEnd)

//     return () => {
//       socket.off('newRound', handleNewRound)
//       socket.off('roundResults', handleRoundResults)
//       socket.off('gameEnd', handleGameEnd)
//     }
//   }, [roomId])

//   useEffect(() => {
//     if (timeLeft === 0 && roomId) {
//       socket.emit('timeExpired', roomId)
//     }
//   }, [timeLeft, roomId])

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => Math.max(0, prev - 1))
//     }, 1000)

//     return () => clearInterval(timer)
//   }, [])

//   return (
//     <div className="container mx-auto p-4">
//       <GameStatus round={round} timeLeft={timeLeft} />
//       <div className="grid md:grid-cols-2 gap-8 mt-8">
//         <ChoiceButtons roomId={roomId!} disabled={timeLeft === 0} />
//         <PlayerList players={players} />
//       </div>
//     </div>
//   )
// }



// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'next/navigation';
// import socket from '@/lib/socket';
// import ChoiceButtons from '@/components/ChoiceButtons';
// import PlayerList from '@/components/PlayerList';
// import GameStatus from '@/components/GameStatus';
// import Router from 'next/router';

// interface GamePlayer {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// export default function GamePage() {
//   const [players, setPlayers] = useState<GamePlayer[]>([]);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [round, setRound] = useState(1);
//   const params = useSearchParams();
//   const roomId = decodeURIComponent(params.get('room') || '');

//   useEffect(() => {
//     if (!roomId) return;

//     useEffect(() => {
//       if (!roomId || !/^room-\d+$/.test(roomId)) {
//         Router.push('/lobby');
//       }
//     }, [roomId, Router]);

//     const handleNewRound = (data: { 
//       round: number; 
//       players: GamePlayer[];
//       timeLimit: number 
//     }) => {
//       setRound(data.round);
//       setPlayers(data.players);
//       setTimeLeft(data.timeLimit);
//     };

//     const handleRoundResults = (data: { 
//       results: { majority: string; minority: string };
//       players: GamePlayer[] 
//     }) => {
//       setPlayers(data.players);
//     };

//     const handleGameEnd = (data: { winner: GamePlayer }) => {
//       window.location.href = `/winner?name=${data.winner.name}`;
//     };

//     socket.on('newRound', handleNewRound);
//     socket.on('roundResults', handleRoundResults);
//     socket.on('gameEnd', handleGameEnd);

//     return () => {
//       socket.off('newRound', handleNewRound);
//       socket.off('roundResults', handleRoundResults);
//       socket.off('gameEnd', handleGameEnd);
//     };
//   }, [roomId]);

//   useEffect(() => {
//     if (timeLeft === 0 && roomId) {
//       socket.emit('timeExpired', roomId);
//     }
//   }, [timeLeft, roomId]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => Math.max(0, prev - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <GameStatus round={round} timeLeft={timeLeft} />
//       <div className="grid md:grid-cols-2 gap-8 mt-8">
//         <ChoiceButtons roomId={roomId!} disabled={timeLeft === 0} />
//         <PlayerList players={players} />
//       </div>
//     </div>
//   );
// }

// 'use client';
// import { useEffect, useState } from 'react';
// import { useSearchParams, useRouter } from 'next/navigation';
// import socket from '@/lib/socket';
// import ChoiceButtons from '@/components/ChoiceButtons';
// import PlayerList from '@/components/PlayerList';
// import GameStatus from '@/components/GameStatus';

// interface GamePlayer {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// export default function GamePage() {
//   const [players, setPlayers] = useState<GamePlayer[]>([]);
//   const [timeLeft, setTimeLeft] = useState(30);
//   const [round, setRound] = useState(1);
//   const params = useSearchParams();
//   const router = useRouter();
//   const roomId = params.get('room');

//   // Validate room ID format
//   useEffect(() => {
//     if (!roomId || !/^room-\d+$/.test(roomId)) {
//       router.push('/lobby');
//     }
//   }, [roomId, router]);

//   // Handle socket events
//   useEffect(() => {
//     if (!roomId) return;

//     const handleNewRound = (data: { 
//       round: number; 
//       players: GamePlayer[];
//       timeLimit: number 
//     }) => {
//       setRound(data.round);
//       setPlayers(data.players);
//       setTimeLeft(data.timeLimit);
//     };

//     const handleRoundResults = (data: { 
//       results: { majority: string; minority: string };
//       players: GamePlayer[] 
//     }) => {
//       setPlayers(data.players);
//     };

//     const handleGameEnd = (data: { winner: GamePlayer | null }) => {
//       if (data.winner) {
//         router.push(`/winner?name=${encodeURIComponent(data.winner.name)}`);
//       } else {
//         router.push('/results?outcome=draw');
//       }
//     };
//     socket.on('newRound', handleNewRound);
//     socket.on('roundResults', handleRoundResults);
//     socket.on('gameEnd', handleGameEnd);

//     return () => {
//       socket.off('newRound', handleNewRound);
//       socket.off('roundResults', handleRoundResults);
//       socket.off('gameEnd', handleGameEnd);
//     };
//   }, [roomId, router]);

//   // Handle time expiration
//   useEffect(() => {
//     if (timeLeft === 0 && roomId) {
//       socket.emit('timeExpired', roomId);
//     }
//   }, [timeLeft, roomId]);

//   // Timer management
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => Math.max(0, prev - 1));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);


//   useEffect(() => {
//     return () => {
//       // Clear all socket listeners when unmounting
//       socket.off('newRound');
//       socket.off('roundResults');
//       socket.off('gameEnd');
//     };
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <GameStatus round={round} timeLeft={timeLeft} />
//       <div className="grid md:grid-cols-2 gap-8 mt-8">
//         <ChoiceButtons roomId={roomId!} disabled={timeLeft === 0} />
//         <PlayerList players={players} />
//       </div>
//     </div>
//   );
// }


'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import socket from '@/lib/socket';
import ChoiceButtons from '@/components/ChoiceButtons';
import PlayerList from '@/components/PlayerList';
import GameStatus from '@/components/GameStatus';

interface GamePlayer {
  id: string;
  name: string;
  choice: 'heads' | 'tails' | null;
  isEliminated: boolean;
}

export default function GamePage() {
  const [players, setPlayers] = useState<GamePlayer[]>([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [round, setRound] = useState(1);
  const params = useSearchParams();
  const roomId = params.get('room');

  // Game end handler
  useEffect(() => {
    const handleGameEnd = (data: { winner: { name: string, id: string } | null }) => {
      socket.disconnect();
      if (data.winner?.name) {
        window.location.href = `/winner?name=${encodeURIComponent(data.winner.name)}`;
      } else {
        window.location.href = '/results?outcome=nowinner';
      }
    };
    

    socket.on('gameEnd', handleGameEnd);
    
    return () => {
      socket.off('gameEnd', handleGameEnd);
    };
  }, []);

  // Rest of existing game logic
  useEffect(() => {
    if (!roomId) return;

    const handleNewRound = (data: { 
      round: number; 
      players: GamePlayer[];
      timeLimit: number 
    }) => {
      setRound(data.round);
      setPlayers(data.players);
      setTimeLeft(data.timeLimit);
    };

    const handleRoundResults = (data: { 
      results: { majority: string; minority: string };
      players: GamePlayer[] 
    }) => {
      setPlayers(data.players);
    };

    socket.on('newRound', handleNewRound);
    socket.on('roundResults', handleRoundResults);

    return () => {
      socket.off('newRound', handleNewRound);
      socket.off('roundResults', handleRoundResults);
    };
  }, [roomId]);

  useEffect(() => {
    if (timeLeft === 0 && roomId) {
      socket.emit('timeExpired', roomId);
    }
  }, [timeLeft, roomId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <GameStatus round={round} timeLeft={timeLeft} />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <ChoiceButtons roomId={roomId!} disabled={timeLeft === 0} />
        <PlayerList players={players} />
      </div>
    </div>
  );
}