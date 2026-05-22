import { LegalPage } from '@/components/ui/LegalPage'

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Legal notice"
      intro="This website is operated by Teragone Factory. These legal notices provide information regarding website ownership, hosting and publication responsibilities."
      updated="May 2026"
      sections={[
        {
          title: 'Website publisher',
          paragraphs: [
            'Teragone Factory is the Digital & AI Delivery Factory of the Teragone Solutions group, focused on software architecture, AI Engineering, Web3 and distributed systems.',
            'For any request related to the website or published content, you can contact the company through the contact section available on the website.',
          ],
        },
        {
          title: 'Hosting',
          paragraphs: [
            'This website is hosted through GitHub Pages infrastructure.',
            'Some third-party services may be used for analytics, content delivery or external integrations.',
          ],
        },
        {
          title: 'Intellectual property',
          paragraphs: [
            'All texts, visuals, illustrations, branding elements and technical content published on this website are protected by intellectual property laws.',
          ],
          items: [
            'Unauthorized reproduction or redistribution is prohibited.',
            'Company names, logos and project references remain the property of their respective owners.',
          ],
        },
        {
          title: 'Liability',
          paragraphs: [
            'Teragone Factory makes reasonable efforts to ensure the accuracy and relevance of published information but cannot guarantee the absence of inaccuracies or temporary service interruptions.',
          ],
        },
      ]}
    />
  )
}
