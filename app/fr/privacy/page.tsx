import { LegalPage } from '@/components/ui/LegalPage'

export default function PrivacyPageFR() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Politique de confidentialité"
      intro="Cette politique de confidentialité explique comment Teragone Factory peut collecter et traiter des données personnelles via ce site, notamment à travers le formulaire de contact."
      updated="Mai 2026"
      sections={[
        { title: 'Responsable du traitement', paragraphs: ['Le responsable du traitement est Teragone Factory. Les informations d’identification complètes de la société doivent être précisées dans les mentions légales avant publication finale.'] },
        { title: 'Données collectées', paragraphs: ['Lors de l’utilisation du formulaire de contact, nous pouvons collecter votre prénom, nom, adresse email professionnelle, société, fonction, sujet, message et consentement à être recontacté.'] },
        { title: 'Finalités du traitement', items: ['Répondre aux demandes commerciales, partenariales, recrutement ou projet.', 'Comprendre le contexte de la demande et préparer un suivi adapté.', 'Conserver un historique minimal des échanges professionnels entrants.'] },
        { title: 'Base légale', paragraphs: ['Le traitement repose sur votre consentement lors de l’envoi du formulaire et sur l’intérêt légitime de Teragone Factory à répondre aux demandes professionnelles entrantes.'] },
        { title: 'Destinataires et services tiers', paragraphs: ['Les soumissions du formulaire peuvent être traitées via Formspree, prestataire technique de routage des formulaires. Les données peuvent également être consultées par les membres autorisés de Teragone Factory chargés de traiter la demande.'] },
        { title: 'Durée de conservation', paragraphs: ['Les données de contact sont conservées uniquement pendant la durée nécessaire au traitement de la demande et au suivi de la relation professionnelle, sauf obligation légale imposant une durée plus longue.'] },
        { title: 'Vos droits', paragraphs: ['Conformément à la réglementation applicable, vous pouvez demander l’accès, la rectification, la suppression, la limitation, la portabilité ou l’opposition concernant vos données personnelles. Vous pouvez également retirer votre consentement lorsque le traitement repose sur celui-ci.'] },
      ]}
    />
  )
}
