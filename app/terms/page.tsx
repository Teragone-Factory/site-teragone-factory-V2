import { LegalPage } from '@/components/ui/LegalPage'

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of use"
      intro="By accessing and using this website, visitors agree to comply with these terms of use."
      updated="May 2026"
      sections={[
        {
          title: 'Website usage',
          paragraphs: [
            'This website is intended to present Teragone Factory activities, expertise, articles and professional content.',
          ],
          items: [
            'Users must not misuse the platform or attempt unauthorized access.',
            'Published content is provided for informational purposes only.',
          ],
        },
        {
          title: 'External links',
          paragraphs: [
            'The website may contain links to external websites or platforms. Teragone Factory is not responsible for third-party content or policies.',
          ],
        },
        {
          title: 'Availability',
          paragraphs: [
            'The website may evolve, be updated or temporarily interrupted without notice for maintenance or technical reasons.',
          ],
        },
        {
          title: 'Applicable law',
          paragraphs: [
            'These terms are governed by applicable French law.',
          ],
        },
      ]}
    />
  )
}
