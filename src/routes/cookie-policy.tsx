import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="7 ottobre 2026"
      intro="La presente Cookie Policy descrive i cookie e le tecnologie simili utilizzati sul sito www.ilpagnuozzo.com, gestito da Società Duegi S.r.l., in conformità al GDPR, all’art. 122 del D.Lgs. 196/2003 e alle Linee guida del Garante per la protezione dei dati personali del 10 giugno 2021."
      sections={[
        {
          title: '1. Cosa sono i cookie',
          paragraphs: [
            'I cookie sono piccoli file di testo che i siti visitati salvano sul dispositivo dell’utente per consentire il funzionamento delle pagine o raccogliere informazioni sulla navigazione. Tecnologie simili (come pixel o local storage) svolgono funzioni analoghe.',
          ],
        },
        {
          title: '2. Cookie tecnici strettamente necessari',
          paragraphs: [
            'Il sito utilizza esclusivamente gli strumenti tecnici strettamente necessari alla sua erogazione e al suo corretto funzionamento. Per tali strumenti, ai sensi della normativa vigente, non è richiesto il consenso dell’utente.',
          ],
        },
        {
          title: '3. Cookie analitici',
          paragraphs: [
            'Il sito non utilizza cookie analitici né strumenti di statistica o misurazione delle visite.',
          ],
        },
        {
          title: '4. Cookie di marketing e profilazione',
          paragraphs: [
            'Il sito non utilizza cookie di marketing o di profilazione, pixel pubblicitari o altri strumenti di tracciamento.',
          ],
        },
        {
          title: '5. Cookie e servizi di terze parti',
          paragraphs: [
            'Il sito carica i caratteri tipografici dal servizio Google Fonts (Google). Per fornire i caratteri, il browser dell’utente si collega ai server di Google, che ricevono l’indirizzo IP e i dati tecnici della richiesta. Questo servizio non installa cookie di profilazione da parte del sito.',
            'Il sito non incorpora contenuti di terze parti come video, mappe o widget social. I link ai profili social (Instagram, Facebook, YouTube, TikTok, LinkedIn), a Google Maps e a WhatsApp portano a siti o applicazioni esterni, che applicano le proprie informative su privacy e cookie solo quando l’utente sceglie di visitarli.',
          ],
        },
        {
          title: '6. Consenso',
          paragraphs: [
            'Poiché il sito utilizza solo strumenti tecnici strettamente necessari, non viene mostrato un banner di consenso. Qualora in futuro venissero introdotti cookie analitici non anonimizzati, di marketing o altri strumenti non necessari, questi saranno attivati solo previo consenso, tramite un meccanismo che consentirà di accettarli, rifiutarli, gestire le preferenze e modificare o revocare la scelta in qualsiasi momento; la presente policy sarà aggiornata di conseguenza.',
          ],
        },
        {
          title: '7. Gestione dei cookie dal browser',
          paragraphs: [
            'L’utente può in ogni momento gestire o eliminare i cookie tramite le impostazioni del proprio browser. La disattivazione degli strumenti tecnici potrebbe compromettere alcune funzionalità del sito.',
          ],
        },
        {
          title: '8. Ulteriori informazioni',
          paragraphs: [
            'Per maggiori informazioni sul trattamento dei dati personali e sui diritti dell’utente si rinvia alla Privacy Policy.',
          ],
        },
      ]}
    />
  )
}

const pageMeta = {
  title: 'Cookie Policy',
  description: 'Informazioni sull’uso dei cookie sul sito di Il Pagnuozzo.',
}
export const Route = createFileRoute('/cookie-policy')({
  component: CookiePolicyPage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
