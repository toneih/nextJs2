import '@/app/ui/global.css';
import { Inter } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


// import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css';


// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Byggebot',
//   description: 'This is a description.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   )
// }