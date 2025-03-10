This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Minority Wins Game - README

🚀 Introduction

Minority Wins is a real-time multiplayer game where players join a lobby, choose between Heads or Tails, and compete based on the rule that the majority loses while the minority progresses. The game continues until only one player remains, who is declared the winner.


---

📌 Features

✅ Real-time Multiplayer – Players join a shared lobby and interact in real-time.
✅ WebSocket Communication – Uses Socket.io for instant updates.
✅ Dynamic Lobby System – Displays active players in real-time.
✅ Elimination Rounds – The majority choice is eliminated, and the game repeats until one winner remains.
✅ Minimal UI with Dark Mode – Styled using TailwindCSS with a black background and red text.
✅ Automatic Game Reset – After a game ends, players can start a new round.


---

🛠 Tech Stack

Frontend: Next.js 15 (App Router)

Backend: Node.js, Express

WebSockets: Socket.io

Styling: TailwindCSS

State Management: React Hooks



---

📥 Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/your-repo/minority-wins-game.git
cd minority-wins-game

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

Run the Next.js Client

npm run dev

Open http://localhost:3000 in your browser.


Run the WebSocket Server

If the WebSocket server is a separate backend, navigate to the server folder and start it:

node server.js

The WebSocket server will run on http://localhost:3001 (if separate from Next.js).



---

🕹 How to Play?

1️⃣ Enter your name and join the lobby.
2️⃣ Wait for other players to join.
3️⃣ Each round, choose Heads or Tails.
4️⃣ The majority choice gets eliminated while the minority moves forward.
5️⃣ The game continues until only one winner remains!


---

🌍 Deployment (Optional)

To deploy your Next.js frontend:

vercel deploy

To deploy your WebSocket server (if separate):

render deploy


---

📌 Future Enhancements

🚀 Leaderboard System – Track past winners.
🚀 Private Game Rooms – Allow players to create & join custom lobbies.
🚀 Spectator Mode – Let users watch ongoing games.


---

Let me know if you need any modifications!


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
