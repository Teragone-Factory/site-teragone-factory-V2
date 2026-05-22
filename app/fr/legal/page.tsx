import { LegalPage } from '@/components/ui/LegalPage'

export default function LegalNoticePageFR() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Mentions légales"
      intro="Ce site est exploité par Teragone Factory. Ces mentions légales fournissent les informations relatives à l’éditeur, à l’hébergement et aux responsabilités de publication."
      updated="Mai 2026"
      sections={[
        { title: 'Éditeur du site', paragraphs: ['Teragone Factory est la Digital & AI Delivery Factory du groupe Teragone Solutions, spécialisée en architecture logicielle, AI Engineering, Web3 et systèmes distribués.', 'Pour toute demande relative au site ou aux contenus publiés, vous pouvez contacter la société via la page de contact du site.'] },
        { title: 'Hébergement', paragraphs: ['Ce site est hébergé via l’infrastructure GitHub Pages.', 'Des services tiers peuvent être utilisés pour des fonctions d’analyse, de diffusion de contenu ou d’intégration externe.'] },
        { title: 'Propriété intellectuelle', paragraphs: ['Les textes, visuels, illustrations, éléments de marque et contenus techniques publiés sur ce site sont protégés par les lois relatives à la propriété intellectuelle.'], items: ['Toute reproduction ou redistribution non autorisée est interdite.', 'Les noms de sociétés, logos et références projets restent la propriété de leurs détenteurs respectifs.'] },
        { title: 'Responsabilité', paragraphs: ['Teragone Factory met en œuvre des efforts raisonnables pour garantir l’exactitude et la pertinence des informations publiées, sans pouvoir garantir l’absence d’erreurs ou d’interruptions temporaires du service.'] },
      ]}
    />
  )
}
