import { LegalPage } from '@/components/ui/LegalPage'

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie policy"
      intro="This page explains how cookies and similar technologies may be used on the Teragone Factory website."
      updated="May 2026"
      sections={[
        {
          title: 'What are cookies',
          paragraphs: [
            'Cookies are small files stored on a visitor device to improve browsing experience, analytics or technical functionality.',
          ],
        },
        {
          title: 'Potential usage',
          items: [
            'Navigation and technical functionality.',
            'Traffic measurement and audience analytics.',
            'Performance optimization and debugging.',
          ],
        },
        {
          title: 'Third-party services',
          paragraphs: [
            'Some third-party services integrated into the website may also use cookies or similar technologies.',
          ],
        },
        {
          title: 'Managing cookies',
          paragraphs: [
            'Users can configure browser settings to block or delete cookies at any time.',
          ],
        },
      ]}
    />
  )
}
