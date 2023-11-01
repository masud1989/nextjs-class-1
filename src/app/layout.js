"use client"
import './globals.css';
import '@/assets/css/style.css';
import TopNav from './components/TopNav';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
        <ProgressBar
          height="4px"
          color="#6c3483"
          options={{ showSpinner: false }}
          // shallowRouting
        />
      </body>
    </html>
  )
}
