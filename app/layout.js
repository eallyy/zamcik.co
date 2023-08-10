import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zamcik.co ile zamcıklanmanın tadını sen de çıkar',
  description: 'Project of alany.co',
  author: 'Emir ALANYALIOGLU'
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
