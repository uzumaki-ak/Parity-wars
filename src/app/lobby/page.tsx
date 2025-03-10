'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import socket from '@/lib/socket';
import PlayerList from '@/components/PlayerList';

interface LobbyPlayer {
  id: string;
  name: string;
  isEliminated: boolean;
}

export default function LobbyPage() {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState<LobbyPlayer[]>([]);
  const [isJoining, setIsJoining] = useState(false);
  const router = useRouter();

  useEffect(() => {
  // Update the gameStart handler
const handleGameStart = (data: { roomId: string }) => {
  router.push(`/game?room=${data.roomId}`);
};

// In useEffect
socket.on('gameStart', handleGameStart);
socket.on('gameStart', handleGameStart);
    return () => {
      socket.off('gameStart', handleGameStart);
    };
  }, [router]);

  useEffect(() => {
    const handleLobbyUpdate = (players: LobbyPlayer[]) => {
      setPlayers(players.filter(p => !p.isEliminated));
    };

    socket.on('lobbyUpdate', handleLobbyUpdate);
    return () => {
      socket.off('lobbyUpdate', handleLobbyUpdate);
    };
  }, []);

  const handleJoin = () => {
    if (name.trim() && !isJoining) {
      setIsJoining(true);
      if (!socket.connected) socket.connect();
      socket.emit('joinLobby', name);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8">Join Lobby</h1>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full p-3 bg-gray-800 text-blood rounded-lg mb-4"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleJoin()}
      />
      <button
        onClick={handleJoin}
        disabled={isJoining}
        className={`w-full py-3 ${
          isJoining ? 'bg-gray-600 cursor-not-allowed' : 'bg-blood hover:bg-blood/90'
        } text-dark font-bold rounded-lg transition-colors`}
      >
        {isJoining ? 'Joining...' : 'Join Game'}
      </button>
      <PlayerList players={players} />
    </div>
  );
}