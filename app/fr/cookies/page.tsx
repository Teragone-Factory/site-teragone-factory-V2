import { LegalPage } from '@/components/ui/LegalPage'

export default function CookiesPageFR() {
  return (
    <LegalPage
      eyebrow="Légal"
      title="Politique de cookies"
      intro="Cette page explique comment des cookies et technologies similaires peuvent être utilisés sur le site Teragone Factory."
      updated="Mai 2026"
      sections={[
        { title: 'Qu’est-ce qu’un cookie', paragraphs: ['Les cookies sont de petits fichiers stockés sur l’appareil du visiteur afin d’améliorer l’expérience de navigation, les analyses ou certaines fonctionnalités techniques.'] },
        { title: 'Utilisations possibles', items: ['Navigation et fonctionnement technique du site.', 'Mesure d’audience et statistiques de fréquentation.', 'Optimisation des performances et diagnostic technique.'] },
        { title: 'Services tiers', paragraphs: ['Certains services tiers intégrés au site peuvent également utiliser des cookies ou technologies similaires.'] },
        { title: 'Gestion des cookies', paragraphs: ['Les utilisateurs peuvent configurer leur navigateur afin de bloquer ou supprimer les cookies à tout moment. Si des cookies non essentiels sont ajoutés au site, un dispositif de gestion devra être prévu.'] },
      ]}
    />
  )
}
