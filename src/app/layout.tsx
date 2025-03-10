import type { Metadata } from 'next'
// import './styles/globals.css'

export const metadata: Metadata = {
  title: 'Majority Loses',
  description: 'Real-time elimination game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-dark text-blood">
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
}