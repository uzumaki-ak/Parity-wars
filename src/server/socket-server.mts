// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handler = app.getRequestHandler();
// const PORT = 3000;

// // Game state interfaces
// interface Player {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// interface GameState {
//   players: Map<string, Player>;
//   round: number;
//   results: {
//     majority: 'heads' | 'tails' | null;
//     minority: 'heads' | 'tails' | null;
//   };
// }

// const gameStates = new Map<string, GameState>();

// app.prepare().then(() => {
//   const httpServer = createServer(handler);
  
//   const io = new Server(httpServer, {
//     path: '/api/socket',
//     cors: {
//       origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('joinLobby', (playerName: string) => {
//       const room = Array.from(io.sockets.adapter.rooms.keys())
//         .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
//         || `room-${Date.now()}`;

//       socket.join(room);
      
//       if (!gameStates.has(room)) {
//         gameStates.set(room, {
//           players: new Map(),
//           round: 1,
//           results: { majority: null, minority: null }
//         });
//       }

//       const gameState = gameStates.get(room)!;
//       gameState.players.set(socket.id, {
//         id: socket.id,
//         name: playerName,
//         choice: null,
//         isEliminated: false
//       });

//       io.to(room).emit('lobbyUpdate', Array.from(gameState.players.values()));
      
//       if (gameState.players.size >= 2) {
//         setTimeout(() => io.to(room).emit('gameStart', room), 5000);
//       }
//     });

//     socket.on('submitChoice', ({ choice, roomId }) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//       const player = gameState.players.get(socket.id);
//       if (player) player.choice = choice;

//       const allPlayers = Array.from(gameState.players.values());
//       if (allPlayers.filter(p => !p.isEliminated).every(p => p.choice !== null)) {
//         const headsCount = allPlayers
//           .filter(p => !p.isEliminated)
//           .filter(p => p.choice === 'heads').length;
//         const tailsCount = allPlayers
//           .filter(p => !p.isEliminated)
//           .filter(p => p.choice === 'tails').length;

//         const majority = headsCount > tailsCount ? 'heads' : 'tails';
//         const minority = headsCount > tailsCount ? 'tails' : 'heads';

//         gameState.results = { majority, minority };
//         gameState.players.forEach(player => {
//           if (player.choice === majority) player.isEliminated = true;
//         });

//         io.to(roomId).emit('roundResults', {
//           results: gameState.results,
//           players: Array.from(gameState.players.values())
//         });

//         const remaining = allPlayers.filter(p => !p.isEliminated).length;
//         if (remaining === 1) {
//           io.to(roomId).emit('gameEnd', {
//             winner: allPlayers.find(p => !p.isEliminated)
//           });
//         } else {
//           gameState.round++;
//           gameState.players.forEach(p => p.choice = null);
//           io.to(roomId).emit('newRound', {
//             round: gameState.round,
//             players: Array.from(gameState.players.values())
//           });
//         }
//       }
//     });

//     socket.on('disconnect', () => {
//       gameStates.forEach((state, roomId) => {
//         if (state.players.has(socket.id)) {
//           state.players.delete(socket.id);
//           io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
//         }
//       });
//     });
//   });

//   httpServer.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });



// Add this with other event handlers
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// import { pathToFileURL } from 'node:url';

// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handler = app.getRequestHandler();
// const PORT = 3000;

// interface Player {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// interface GameState {
//   players: Map<string, Player>;
//   round: number;
//   results: {
//     majority: 'heads' | 'tails' | null;
//     minority: 'heads' | 'tails' | null;
//   };
// }

// const gameStates = new Map<string, GameState>();

// app.prepare().then(() => {
//   const httpServer = createServer(handler);
  
//   const io = new Server(httpServer, {
//     path: '/api/socket',
//     cors: {
//       origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('joinLobby', (playerName: string) => {
//       const room = Array.from(io.sockets.adapter.rooms.keys())
//         .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
//         || `room-${Date.now()}`;

//       socket.join(room);
      
//       if (!gameStates.has(room)) {
//         gameStates.set(room, {
//           players: new Map(),
//           round: 1,
//           results: { majority: null, minority: null }
//         });
//       }

//       const gameState = gameStates.get(room)!;
//       gameState.players.set(socket.id, {
//         id: socket.id,
//         name: playerName,
//         choice: null,
//         isEliminated: false
//       });

//       io.to(room).emit('lobbyUpdate', Array.from(gameState.players.values()));
      
//       if (gameState.players.size >= 2) {
//         setTimeout(() => io.to(room).emit('gameStart', room), 5000);
//       }
//     });

//     socket.on('submitChoice', ({ choice, roomId }: { choice: 'heads' | 'tails', roomId: string }) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//       const player = gameState.players.get(socket.id);
//       if (player) player.choice = choice;

//       const allPlayers = Array.from(gameState.players.values());
//       if (allPlayers.filter(p => !p.isEliminated).every(p => p.choice !== null)) {
//         const headsCount = allPlayers
//           .filter(p => !p.isEliminated)
//           .filter(p => p.choice === 'heads').length;
//         const tailsCount = allPlayers
//           .filter(p => !p.isEliminated)
//           .filter(p => p.choice === 'tails').length;

//         const majority = headsCount > tailsCount ? 'heads' : 'tails';
//         const minority = headsCount > tailsCount ? 'tails' : 'heads';

//         gameState.results = { majority, minority };
//         gameState.players.forEach(player => {
//           if (player.choice === majority) player.isEliminated = true;
//         });

//         io.to(roomId).emit('roundResults', {
//           results: gameState.results,
//           players: Array.from(gameState.players.values())
//         });

//         const remaining = allPlayers.filter(p => !p.isEliminated).length;
//         if (remaining === 1) {
//           io.to(roomId).emit('gameEnd', {
//             winner: allPlayers.find(p => !p.isEliminated)
//           });
//         } else {
//           gameState.round++;
//           gameState.players.forEach(p => p.choice = null);
//           io.to(roomId).emit('newRound', {
//             round: gameState.round,
//             players: Array.from(gameState.players.values())
//           });
//         }
//       }
//     });

//     // Update the timeExpired handler
// socket.on('timeExpired', (roomId: string) => {
//   const gameState = gameStates.get(roomId);
//   if (!gameState) return;

//   gameState.players.forEach(player => {
//     if (!player.isEliminated && !player.choice) {
//       player.isEliminated = true;
//     }
//   });


//   const activePlayers = Array.from(gameState.players.values())
//   .filter(p => !p.isEliminated);

//   if (activePlayers.length === 1) {
//     io.to(roomId).emit('gameEnd', { winner: activePlayers[0] });
//     return;
//   }

//   const headsCount = activePlayers.filter(p => p.choice === 'heads').length;
//   const tailsCount = activePlayers.filter(p => p.choice === 'tails').length;

//       const majority = headsCount > tailsCount ? 'heads' : 'tails';
//       const minority = headsCount > tailsCount ? 'tails' : 'heads';

//       gameState.players.forEach(player => {
//         if (player.choice === majority) player.isEliminated = true;
//       });

//       const remainingPlayers = Array.from(gameState.players.values())
//         .filter((p: Player) => !p.isEliminated);

//       if (remainingPlayers.length === 1) {
//         io.to(roomId).emit('gameEnd', { winner: remainingPlayers[0] });
//       } else {
//         io.to(roomId).emit('roundResults', {
//           results: { majority, minority },
//           players: Array.from(gameState.players.values())
//         });

//         gameState.round++;
//         gameState.players.forEach(p => p.choice = null);
//         setTimeout(() => {
//           io.to(roomId).emit('newRound', {
//             round: gameState.round,
//             players: Array.from(gameState.players.values())
//           });
//         }, 5000);
//       }
//     });

//     socket.on('disconnect', () => {
//       gameStates.forEach((state, roomId) => {
//         if (state.players.has(socket.id)) {
//           state.players.delete(socket.id);
//           io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
//         }
//       });
//     });
//   });

//   httpServer.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/api/socket`);
//   });
// });



// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
// import { pathToFileURL } from 'node:url';

// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handler = app.getRequestHandler();
// const PORT = 3000;
// const TIME_LIMIT = 30;

// interface Player {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// interface GameState {
//   players: Map<string, Player>;
//   round: number;
//   results: {
//     majority: 'heads' | 'tails' | null;
//     minority: 'heads' | 'tails' | null;
//   };
// }

// const gameStates = new Map<string, GameState>();

// app.prepare().then(() => {
//   const httpServer = createServer(handler);
  
//   const io = new Server(httpServer, {
//     path: '/api/socket',
//     cors: {
//       origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('joinLobby', (playerName: string) => {
//       const room = Array.from(io.sockets.adapter.rooms.keys())
//         .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
//         || `room-${Date.now()}`;

//       socket.join(room);
      
//       if (!gameStates.has(room)) {
//         gameStates.set(room, {
//           players: new Map(),
//           round: 1,
//           results: { majority: null, minority: null }
//         });
//       }

//       const gameState = gameStates.get(room)!;
//       gameState.players.set(socket.id, {
//         id: socket.id,
//         name: playerName,
//         choice: null,
//         isEliminated: false
//       });

//       io.to(room).emit('lobbyUpdate', 
//         Array.from(gameState.players.values()).map(p => ({
//           ...p,
//           id: encodeURIComponent(p.id)
//         })));
      
//       if (gameState.players.size >= 2) {
//         setTimeout(() => {
//           io.to(room).emit('gameStart', { 
//             roomId: encodeURIComponent(room),
//             timeLimit: TIME_LIMIT 
//           });
//         }, 5000);
//       }

    // socket.on('submitChoice', ({ choice, roomId }) => {
    //   const gameState = gameStates.get(roomId);
    //   if (!gameState) return;

    //   const player = gameState.players.get(socket.id);
    //   if (player) player.choice = choice;

    //   const activePlayers = Array.from(gameState.players.values())
    //     .filter(p => !p.isEliminated);

    //   if (activePlayers.every(p => p.choice !== null)) {
    //     const headsCount = activePlayers
    //       .filter(p => p.choice === 'heads').length;
    //     const tailsCount = activePlayers
    //       .filter(p => p.choice === 'tails').length;

    //     if (headsCount === tailsCount) {
    //       io.to(roomId).emit('roundResults', {
    //         results: { majority: null, minority: null },
    //         players: Array.from(gameState.players.values())
    //       });
    //       return;
    //     }

    //     const majority = headsCount > tailsCount ? 'heads' : 'tails';
    //     const minority = headsCount > tailsCount ? 'tails' : 'heads';

    //     gameState.results = { majority, minority };
    //     gameState.players.forEach(player => {
    //       if (player.choice === majority) player.isEliminated = true;
    //     });

    //     const remainingPlayers = activePlayers.filter(p => p.choice !== majority);
        
    //     if (remainingPlayers.length === 1) {
    //       io.to(roomId).emit('gameEnd', {
    //         winner: remainingPlayers[0]
    //       });
    //     } else {
    //       startNewRound(gameState, roomId);
    //     }
    //   }
    // });

    // socket.on('timeExpired', (roomId: string) => {
    //   const gameState = gameStates.get(roomId);
    //   if (!gameState) return;

    //   gameState.players.forEach(player => {
    //     if (!player.isEliminated && !player.choice) {
    //       player.isEliminated = true;
    //     }
    //   });

    //   const activePlayers = Array.from(gameState.players.values())
    //     .filter(p => !p.isEliminated);

    //   if (activePlayers.length === 1) {
    //     io.to(roomId).emit('gameEnd', { winner: activePlayers[0] });
    //     return;
    //   }

    //   const headsCount = activePlayers
    //     .filter(p => p.choice === 'heads').length;
    //   const tailsCount = activePlayers
    //     .filter(p => p.choice === 'tails').length;

    //   if (headsCount === tailsCount) {
    //     io.to(roomId).emit('roundResults', {
    //       results: { majority: null, minority: null },
    //       players: Array.from(gameState.players.values())
    //     });
    //     return;
    //   }

    //   const majority = headsCount > tailsCount ? 'heads' : 'tails';
    //   const minority = headsCount > tailsCount ? 'tails' : 'heads';

    //   gameState.players.forEach(player => {
    //     if (player.choice === majority) player.isEliminated = true;
    //   });

    //   const remainingPlayers = activePlayers.filter(p => p.choice !== majority);

    //   if (remainingPlayers.length === 1) {
    //     io.to(roomId).emit('gameEnd', { winner: remainingPlayers[0] });
    //   } else {
    //     startNewRound(gameState, roomId);
    //   }
    // });

//     socket.on('disconnect', () => {
//       gameStates.forEach((state, roomId) => {
//         if (state.players.has(socket.id)) {
//           state.players.delete(socket.id);
//           io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
//         }
//       });
//     });
//   });

  // function startNewRound(gameState: GameState, roomId: string) {
  //   gameState.round++;
  //   gameState.players.forEach(p => p.choice = null);
  //   io.to(roomId).emit('newRound', {
  //     round: gameState.round,
  //     players: Array.from(gameState.players.values()),
  //     timeLimit: TIME_LIMIT
  //   });
  // }

//   httpServer.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/api/socket`);
//   });
// })});



// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handler = app.getRequestHandler();
// const PORT = 3000;
// const TIME_LIMIT = 30;

// interface Player {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// interface GameState {
//   players: Map<string, Player>;
//   round: number;
//   results: {
//     majority: 'heads' | 'tails' | null;
//     minority: 'heads' | 'tails' | null;
//   };
// }

// const gameStates = new Map<string, GameState>();

// app.prepare().then(() => {
//   const httpServer = createServer(handler);
  
//   const io = new Server(httpServer, {
//     path: '/api/socket',
//     cors: {
//       origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('joinLobby', (playerName: string) => {
//       const room = Array.from(io.sockets.adapter.rooms.keys())
//         .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
//         || `room-${Date.now()}`;

//       socket.join(room);
      
//       if (!gameStates.has(room)) {
//         gameStates.set(room, {
//           players: new Map(),
//           round: 1,
//           results: { majority: null, minority: null }
//         });
//       }

//       const gameState = gameStates.get(room)!;
//       gameState.players.set(socket.id, {
//         id: socket.id,
//         name: playerName,
//         choice: null,
//         isEliminated: false
//       });

//       io.to(room).emit('lobbyUpdate', 
//         Array.from(gameState.players.values()).map(p => ({
//           ...p,
//           id: encodeURIComponent(p.id)
//         })));
      
//       if (gameState.players.size >= 2) {
//         setTimeout(() => {
//           io.to(room).emit('gameStart', { 
//             roomId: encodeURIComponent(room),
//             timeLimit: TIME_LIMIT 
//           });
//         }, 5000);
//       }
//     }); // Fixed missing closing bracket for joinLobby handler

//     socket.on('submitChoice', ({ choice, roomId }) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//       const player = gameState.players.get(socket.id);
//       if (player) player.choice = choice;

//       const activePlayers = Array.from(gameState.players.values())
//         .filter(p => !p.isEliminated);

//       if (activePlayers.every(p => p.choice !== null)) {
//         const headsCount = activePlayers
//           .filter(p => p.choice === 'heads').length;
//         const tailsCount = activePlayers
//           .filter(p => p.choice === 'tails').length;

//         if (headsCount === tailsCount) {
//           io.to(roomId).emit('roundResults', {
//             results: { majority: null, minority: null },
//             players: Array.from(gameState.players.values())
//           });
//           return;
//         }

//         const majority = headsCount > tailsCount ? 'heads' : 'tails';
//         const minority = headsCount > tailsCount ? 'tails' : 'heads';

//         gameState.results = { majority, minority };
//         gameState.players.forEach(player => {
//           if (player.choice === majority) player.isEliminated = true;
//         });

//         const remainingPlayers = activePlayers.filter(p => p.choice !== majority);
        
//         if (remainingPlayers.length === 1) {
//           io.to(roomId).emit('gameEnd', {
//             winner: remainingPlayers[0]
//           });
//         } else {
//           startNewRound(gameState, roomId);
//         }
//       }
//     });

//     socket.on('timeExpired', (roomId: string) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//       gameState.players.forEach(player => {
//         if (!player.isEliminated && !player.choice) {
//           player.isEliminated = true;
//         }
//       });

//       const activePlayers = Array.from(gameState.players.values())
//         .filter(p => !p.isEliminated);

//       if (activePlayers.length === 1) {
//         io.to(roomId).emit('gameEnd', { winner: activePlayers[0] });
//         return;
//       }

//       const headsCount = activePlayers
//         .filter(p => p.choice === 'heads').length;
//       const tailsCount = activePlayers
//         .filter(p => p.choice === 'tails').length;

//       if (headsCount === tailsCount) {
//         io.to(roomId).emit('roundResults', {
//           results: { majority: null, minority: null },
//           players: Array.from(gameState.players.values())
//         });
//         return;
//       }

//       const majority = headsCount > tailsCount ? 'heads' : 'tails';
//       const minority = headsCount > tailsCount ? 'tails' : 'heads';

//       gameState.players.forEach(player => {
//         if (player.choice === majority) player.isEliminated = true;
//       });

//       const remainingPlayers = activePlayers.filter(p => p.choice !== majority);

//       if (remainingPlayers.length === 1) {
//         io.to(roomId).emit('gameEnd', { winner: remainingPlayers[0] });
//       } else {
//         startNewRound(gameState, roomId);
//       }
//     });

    
//     socket.on('disconnect', () => {
//       gameStates.forEach((state, roomId) => {
//         if (state.players.has(socket.id)) {
//           state.players.delete(socket.id);
//           io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
//         }
//       });
//     });
//   });
//   });

 
//   function startNewRound(gameState: GameState, roomId: string) {
//     gameState.round++;
//     gameState.players.forEach(p => p.choice = null);
//     io.to(roomId).emit('newRound', {
//       round: gameState.round,
//       players: Array.from(gameState.players.values()),
//       timeLimit: TIME_LIMIT
//     });
//   }

//   httpServer.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/api/socket`);
//   });
// }); // Fixed syntax error here


// import { Server } from 'socket.io';
// import { createServer } from 'http';
// import next from 'next';

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handler = app.getRequestHandler();
// const PORT = 3000;
// const TIME_LIMIT = 30;

// interface Player {
//   id: string;
//   name: string;
//   choice: 'heads' | 'tails' | null;
//   isEliminated: boolean;
// }

// interface GameState {
//   players: Map<string, Player>;
//   round: number;
//   results: {
//     majority: 'heads' | 'tails' | null;
//     minority: 'heads' | 'tails' | null;
//   };
// }

// const gameStates = new Map<string, GameState>();

// app.prepare().then(() => {
//   const httpServer = createServer(handler);
  
//   const io = new Server(httpServer, {
//     path: '/api/socket',
//     cors: {
//       origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
//       methods: ['GET', 'POST']
//     }
//   });

//   io.on('connection', (socket) => {
//     console.log('Client connected:', socket.id);

//     socket.on('joinLobby', (playerName: string) => {
//       const room = Array.from(io.sockets.adapter.rooms.keys())
//         .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
//         || `room-${Date.now()}`;

//       socket.join(room);
      
//       if (!gameStates.has(room)) {
//         gameStates.set(room, {
//           players: new Map(),
//           round: 1,
//           results: { majority: null, minority: null }
//         });
//       }

//       const gameState = gameStates.get(room)!;
//       gameState.players.set(socket.id, {
//         id: socket.id,
//         name: playerName,
//         choice: null,
//         isEliminated: false
//       });

//       io.to(room).emit('lobbyUpdate', 
//         Array.from(gameState.players.values()).map(p => ({
//           ...p,
//           id: encodeURIComponent(p.id)
//         })));
      
//       if (gameState.players.size >= 2) {
//         setTimeout(() => {
//           io.to(room).emit('gameStart', { 
//             roomId: encodeURIComponent(room),
//             timeLimit: TIME_LIMIT 
//           });
//         }, 5000);
//       }
//     });

//     socket.on('submitChoice', ({ choice, roomId }) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//       const player = gameState.players.get(socket.id);
//       if (player) player.choice = choice;

//       const activePlayers = Array.from(gameState.players.values())
//         .filter(p => !p.isEliminated);

//       if (activePlayers.every(p => p.choice !== null)) {
//         const headsCount = activePlayers
//           .filter(p => p.choice === 'heads').length;
//         const tailsCount = activePlayers
//           .filter(p => p.choice === 'tails').length;

//         if (headsCount === tailsCount) {
//           io.to(roomId).emit('roundResults', {
//             results: { majority: null, minority: null },
//             players: Array.from(gameState.players.values())
//           });
//           return;
//         }

//         const majority = headsCount > tailsCount ? 'heads' : 'tails';
//         const minority = headsCount > tailsCount ? 'tails' : 'heads';

//         gameState.results = { majority, minority };
//         gameState.players.forEach(player => {
//           if (player.choice === majority) player.isEliminated = true;
//         });

//         const remainingPlayers = activePlayers.filter(p => p.choice !== majority);
        
//         if (remainingPlayers.length === 1) {
//           io.to(roomId).emit('gameEnd', {
//             winner: remainingPlayers[0]
//           });
//         } else {
//           startNewRound(gameState, roomId);
//         }
//       }
//     });

//     socket.on('timeExpired', (roomId: string) => {
//       const gameState = gameStates.get(roomId);
//       if (!gameState) return;

//      // Eliminate players who didn't choose
//   gameState.players.forEach(player => {
//     if (!player.isEliminated && !player.choice) {
//       player.isEliminated = true;
//     }
//   });

  

//   let activePlayers = Array.from(gameState.players.values())
//   .filter(p => !p.isEliminated);

// // Immediate winner check
// if (activePlayers.length === 1) {
//   io.to(roomId).emit('gameEnd', { winner: activePlayers[0] });
//   gameStates.delete(roomId); // Clear game state
//   return;
// }
// const headsCount = activePlayers
// .filter(p => p.choice === 'heads').length;
// const tailsCount = activePlayers
// .filter(p => p.choice === 'tails').length;
// if (headsCount === tailsCount) {
//   io.to(roomId).emit('roundResults', {
//     results: { majority: null, minority: null },
//     players: Array.from(gameState.players.values())
//   });
//   return;
// }


//       const majority = headsCount > tailsCount ? 'heads' : 'tails';
//       const minority = headsCount > tailsCount ? 'tails' : 'heads';

//       gameState.players.forEach(player => {
//         if (player.choice === majority) player.isEliminated = true;
//       });
//       activePlayers = Array.from(gameState.players.values())
//     .filter(p => !p.isEliminated);

//   if (activePlayers.length === 1) {
//     io.to(roomId).emit('gameEnd', { winner: activePlayers[0] });
//     gameStates.delete(roomId);
//   } else {
//     io.to(roomId).emit('roundResults', {
//       results: { majority, minority },
//       players: Array.from(gameState.players.values())
//     });
    
//     // Start new round only if players remain
//     if (activePlayers.length > 1) {
//       startNewRound(gameState, roomId);
//     }
//   }
// });

//     socket.on('disconnect', () => {
//       gameStates.forEach((state, roomId) => {
//         if (state.players.has(socket.id)) {
//           state.players.delete(socket.id);
//           io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
//         }
//       });
//     });
//   });

//   function startNewRound(gameState: GameState, roomId: string) {
//     gameState.round++;
//     gameState.players.forEach(p => p.choice = null);
//     io.to(roomId).emit('newRound', {
//       round: gameState.round,
//       players: Array.from(gameState.players.values()),
//       timeLimit: TIME_LIMIT
//     });
//   }

//   httpServer.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
//     console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/api/socket`);
//   });
// });




import { Server } from 'socket.io';
import { createServer } from 'http';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();
const PORT = 3000;
const TIME_LIMIT = 30;

interface Player {
  id: string;
  name: string;
  choice: 'heads' | 'tails' | null;
  isEliminated: boolean;
  
}

interface GameState {
  players: Map<string, Player>;
  round: number;
  results: {
    majority: 'heads' | 'tails' | null;
    minority: 'heads' | 'tails' | null;
  };
}

const gameStates = new Map<string, GameState>();

app.prepare().then(() => {
  const httpServer = createServer(handler);
  
  const io = new Server(httpServer, {
    path: '/api/socket',
    cors: {
      origin: dev ? 'http://localhost:3000' : 'https://your-domain.com',
      methods: ['GET', 'POST']
    }
  });

  // Helper functions
  const declareWinner = (roomId: string, winner: Player | null) => {
    const gameState = gameStates.get(roomId);
    if (!gameState) return;
  
    // Force hard navigation for all clients
    io.to(roomId).emit('gameEnd', { winner });
    
    // Cleanup
    gameStates.delete(roomId);
    io.socketsLeave(roomId);
    io.in(roomId).disconnectSockets(true);
  };

  const startNewRound = (gameState: GameState, roomId: string) => {
    gameState.round++;
    gameState.players.forEach(p => p.choice = null);
    io.to(roomId).emit('newRound', {
      round: gameState.round,
      players: Array.from(gameState.players.values()),
      timeLimit: TIME_LIMIT
    });
  };

  io.on('connection', (socket) => {
    console.log('Client connected:', socket.id);

    socket.on('joinLobby', (playerName: string) => {
      const room = Array.from(io.sockets.adapter.rooms.keys())
        .find(key => key.startsWith('room-') && io.sockets.adapter.rooms.get(key)!.size < 8)
        || `room-${Date.now()}`;

      socket.join(room);
      
      if (!gameStates.has(room)) {
        gameStates.set(room, {
          players: new Map(),
          round: 1,
          results: { majority: null, minority: null }
        });
      }

      const gameState = gameStates.get(room)!;
      gameState.players.set(socket.id, {
        id: socket.id,
        name: playerName,
        choice: null,
        isEliminated: false
      });

      io.to(room).emit('lobbyUpdate', 
        Array.from(gameState.players.values()).map(p => ({
          ...p,
          id: encodeURIComponent(p.id)
        })));
      
      if (gameState.players.size >= 2) {
        setTimeout(() => {
          io.to(room).emit('gameStart', { 
            roomId: encodeURIComponent(room),
            timeLimit: TIME_LIMIT 
          });
        }, 5000);
      }
    });

    socket.on('submitChoice', ({ choice, roomId }) => {
      const gameState = gameStates.get(roomId);
      if (!gameState) return;

      const player = gameState.players.get(socket.id);
      if (player) player.choice = choice;

      const activePlayers = Array.from(gameState.players.values())
        .filter(p => !p.isEliminated);

      if (activePlayers.every(p => p.choice !== null)) {
        const headsCount = activePlayers
          .filter(p => p.choice === 'heads').length;
        const tailsCount = activePlayers
          .filter(p => p.choice === 'tails').length;

        if (headsCount === tailsCount) {
          io.to(roomId).emit('roundResults', {
            results: { majority: null, minority: null },
            players: Array.from(gameState.players.values())
          });
          return;
        }

        const majority = headsCount > tailsCount ? 'heads' : 'tails';
        const minority = headsCount > tailsCount ? 'tails' : 'heads';

        gameState.results = { majority, minority };
        gameState.players.forEach(player => {
          if (player.choice === majority) player.isEliminated = true;
        });

        const remainingPlayers = activePlayers.filter(p => p.choice !== majority);
        
        if (remainingPlayers.length === 1) {
          declareWinner(roomId, remainingPlayers[0]);
        } else {
          startNewRound(gameState, roomId);
        }
      }
    });

  // Add this helper function
  const declareWinner = (roomId: string, winner: Player | null) => {
    const gameState = gameStates.get(roomId);
    if (!gameState) return;

    const winnerData = winner ? {
      name: winner.name,
      id: winner.id
    } : null;
  
    io.to(roomId).emit('gameEnd', { winner: winnerData });

  // Force hard navigation for all clients
  io.to(roomId).emit('gameEnd', { winner });
  
  // Cleanup
  gameStates.delete(roomId);
  io.socketsLeave(roomId);
  io.in(roomId).disconnectSockets(true);
};
// Update timeExpired handler
socket.on('timeExpired', (roomId: string) => {
  const gameState = gameStates.get(roomId);
  if (!gameState) return;

  gameState.players.forEach(player => {
    if (!player.isEliminated && !player.choice) {
      player.isEliminated = true;
    }
  });

  let activePlayers = Array.from(gameState.players.values())
    .filter(p => !p.isEliminated);

  if (activePlayers.length === 1) {
    declareWinner(roomId, activePlayers[0]);
    return;
  } else if (activePlayers.length === 0) {
    declareWinner(roomId, null);
    return;
  }

  const headsCount = activePlayers
    .filter(p => p.choice === 'heads').length;
  const tailsCount = activePlayers
    .filter(p => p.choice === 'tails').length;

  if (headsCount === tailsCount) {
    declareWinner(roomId, null);
    return;
  }

  const majority = headsCount > tailsCount ? 'heads' : 'tails';
  const minority = headsCount > tailsCount ? 'tails' : 'heads';

  gameState.players.forEach(player => {
    if (player.choice === majority) player.isEliminated = true;
  });

  activePlayers = Array.from(gameState.players.values())
    .filter(p => !p.isEliminated);

  if (activePlayers.length === 1) {
    declareWinner(roomId, activePlayers[0]);
  } else if (activePlayers.length === 0) {
    declareWinner(roomId, null);
  } else {
    io.to(roomId).emit('roundResults', {
      results: { majority, minority },
      players: Array.from(gameState.players.values())
    });
    
    if (activePlayers.length === 1) {
      declareWinner(roomId, activePlayers[0]);
      return;
    }
  }
});
    socket.on('disconnect', () => {
      gameStates.forEach((state, roomId) => {
        if (state.players.has(socket.id)) {
          state.players.delete(socket.id);
          io.to(roomId).emit('lobbyUpdate', Array.from(state.players.values()));
        }
      });
    });
  });

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`🔗 WebSocket endpoint: ws://localhost:${PORT}/api/socket`);
  });
});