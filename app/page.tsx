import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to introduction page
  redirect('/docs/introduction')
}
