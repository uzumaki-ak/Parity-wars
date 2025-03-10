


// import { io } from 'socket.io-client';

// const socket = io(process.env.NODE_ENV === 'production' 
//   ? window.location.origin 
//   : 'http://localhost:3000', {
//     path: '/api/socket',
//     autoConnect: false,
//     reconnection: true,
//     transports: ['websocket'],
//     withCredentials: true
// });

// export default socket;


import { io } from 'socket.io-client';

const socket = io(
  process.env.NODE_ENV === 'production'
    ? window.location.origin
    : 'http://localhost:3000',
  {
    path: '/api/socket',
    autoConnect: false,
    reconnection: true,
    transports: ['websocket'],
    withCredentials: true,
  }
);

export default socket;