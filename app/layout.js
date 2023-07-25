import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

export const metadata = {
  title: 'A website that provides a platform for users to share and challenge each other to complete various tasks.',
  description: 'RepChallenge is a social media platform that allows users to share, rate, and comment on products and services. The site also allows businesses to post challenges for users to complete in exchange for rewards.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
