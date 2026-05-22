import { LegalPage } from '@/components/ui/LegalPage'

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy policy"
      intro="This privacy policy explains how Teragone Factory may collect and process personal data through this website, especially through the contact form."
      updated="May 2026"
      sections={[
        {
          title: 'Data controller',
          paragraphs: [
            'The data controller is Teragone Factory. Detailed company identification information should be completed in the legal notice page before final publication.',
          ],
        },
        {
          title: 'Data collected',
          paragraphs: [
            'When using the contact form, we may collect your first name, last name, business email address, company, role, subject, message and consent to be contacted.',
          ],
        },
        {
          title: 'Purpose of processing',
          items: [
            'Responding to commercial, partnership, recruitment or project-related requests.',
            'Understanding the context of the request and preparing an appropriate follow-up.',
            'Maintaining basic records of inbound professional exchanges.',
          ],
        },
        {
          title: 'Legal basis',
          paragraphs: [
            'The processing is based on your consent when submitting the contact form and on Teragone Factory legitimate interest in responding to professional inbound requests.',
          ],
        },
        {
          title: 'Recipients and third-party services',
          paragraphs: [
            'Contact form submissions may be processed through Formspree, which acts as a technical service provider for form routing. Data may also be accessed by authorized Teragone Factory team members handling the request.',
          ],
        },
        {
          title: 'Retention period',
          paragraphs: [
            'Contact data is retained only for the time necessary to handle the request and follow up on the professional relationship, unless a longer retention period is required by law.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'Under applicable data protection laws, you may request access, rectification, deletion, limitation, portability or objection regarding your personal data. You may also withdraw your consent where processing is based on consent.',
          ],
        },
      ]}
    />
  )
}
