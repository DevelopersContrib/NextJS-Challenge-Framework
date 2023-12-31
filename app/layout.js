import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import { getData } from '@/lib/data'
export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const c = await getData();
 
	return {
		title: c.data.title==='' || c.data.title === null ?'Welcome to '+c.data.domainName:c.data.title,
		description: c.data.description === '' || c.data.description === null ? 'Join a vibrant community of developers, influencers, and entrepreneurs on '+c.data.domainName+', all using the versatile CONTRIB token to power their token economies!':c.data.description,
    keywords: c.data.keywords == '' || c.data.keywords === null ? 'website': c.data.keywords,
    author: c.data.author  == '' || c.data.author === null ? 'contrib': c.data.author
	}
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}
