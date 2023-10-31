import '@/assets/css/style.css';
import TopNav from './components/TopNav';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopNav />
        {children}
      </body>
    </html>
  )
}
