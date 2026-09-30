import './globals.css'
import Loader from '../components/Loader/Loader.jsx'
import Footer from '../components/Footer/footer.jsx'

export const metadata = {
  title: 'Santosh Rawat - Portfolio',
  description: 'Portfolio of Santosh Rawat',
  icons: {
    icon: '/logoo.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Loader />
        {children}
        <Footer />
      </body>
    </html>
  )
}
