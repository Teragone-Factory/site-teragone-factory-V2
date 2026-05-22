import { LegalPage } from '@/components/ui/LegalPage'

export default function TermsPageFR() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Conditions générales d’utilisation"
      intro="En accédant à ce site et en l’utilisant, les visiteurs acceptent les présentes conditions d’utilisation."
      updated="Mai 2026"
      sections={[
        { title: 'Utilisation du site', paragraphs: ['Ce site présente les activités, expertises et contenus professionnels de Teragone Factory.'], items: ['Les utilisateurs ne doivent pas détourner la plateforme ni tenter un accès non autorisé.', 'Les contenus publiés sont fournis à titre informatif uniquement.'] },
        { title: 'Liens externes', paragraphs: ['Le site peut contenir des liens vers des plateformes externes. Teragone Factory ne peut être tenu responsable des contenus ou politiques de ces services tiers.'] },
        { title: 'Disponibilité', paragraphs: ['Le site peut évoluer, être mis à jour ou temporairement interrompu sans préavis pour des raisons techniques ou de maintenance.'] },
        { title: 'Droit applicable', paragraphs: ['Les présentes conditions sont régies par le droit français applicable.'] },
      ]}
    />
  )
}
