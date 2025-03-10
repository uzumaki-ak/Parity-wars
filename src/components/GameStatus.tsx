// export default function GameStatus({ round, timeLeft }: { 
//   round: number
//   timeLeft: number 
// }) {
//   return (
//     <div className="bg-gray-800 p-4 rounded-lg">
//       <div className="flex justify-between text-xl">
//         <span>Round: {round}</span>
//         <span>Time Remaining: {timeLeft}s</span>
//       </div>
//     </div>
//   )
// }



export default function GameStatus({ round, timeLeft }: { 
  round: number
  timeLeft: number 
}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-8">
      <div className="flex justify-between items-center text-xl">
        <div className="flex-1">
          <span className="font-bold">Round:</span> {round}
        </div>
        <div className="flex-1 text-right">
          <span className="font-bold">Time Left:</span> {timeLeft}s
        </div>
      </div>
      {timeLeft === 0 && (
        <div className="text-center mt-2 text-red-500">
          Time's up! Submitting choices...
        </div>
      )}
    </div>
  )
}