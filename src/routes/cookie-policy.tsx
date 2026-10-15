import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="15 ottobre 2026"
      intro="Questa Cookie Policy riguarda il sito Il Pagnuozzo di Società Duegi S.r.l., anche sul dominio di pubblicazione ilpagnuozzo.lovable.app, ed è redatta in riferimento al GDPR, all’art. 122 del D.Lgs. 196/2003 e alle Linee guida del Garante del 10 giugno 2021. Distingue i cookie tecnici dalle connessioni ai servizi esterni, che possono comunicare dati tecnici anche senza installare cookie."
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
            'Il codice dei moduli non imposta cookie e non salva le richieste in local storage o session storage. L’infrastruttura di pubblicazione può impostare cookie tecnici per la distribuzione del sito e la sicurezza. Sul dominio ilpagnuozzo.lovable.app, durante la verifica del 15 ottobre 2026, è stato rilevato il cookie __dpl, di sessione, associato alla distribuzione del sito; in alcune risposte è stato osservato anche __cf_bm, utilizzato da Cloudflare per la protezione automatizzata contro i bot, con durata limitata (normalmente 30 minuti). La loro presenza dipende dalla risposta dell’infrastruttura e può variare tra domini e sessioni.',
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
            'I caratteri provengono da Google Fonts; immagini, copertine e video vengono caricati tramite servizi di distribuzione dei contenuti (CDN). Il browser comunica a questi fornitori indirizzo IP e dati tecnici della richiesta. Una connessione esterna non equivale di per sé all’installazione di un cookie, ma può comportare un trattamento di dati personali, descritto nella Privacy Policy.',
            'La Home contiene tre video di partner B2B con un lettore video del sito e copertine caricate prima della riproduzione. I video non sono incorporati tramite YouTube o altri lettori social e sono riprodotti su scelta dell’utente. Non sono incorporate mappe o widget social.',
            'I link a Instagram, Facebook, YouTube, TikTok, LinkedIn, Google Maps e WhatsApp aprono servizi esterni. Il modulo campioni apre WhatsApp tramite un link con il testo precompilato: all’apertura il testo viene comunicato a WhatsApp, mentre il messaggio al Titolare deve essere inviato dall’utente. Navigando su questi servizi si applicano le rispettive informative su privacy e cookie.',
          ],
        },
        {
          title: '6. Consenso',
          paragraphs: [
            'Nella configurazione verificata non sono presenti cookie analitici o di marketing, pixel pubblicitari o archiviazioni non necessarie: non è quindi previsto un banner per il consenso ai cookie. Questa conclusione riguarda la configurazione attuale, non esonera dal verificare le modifiche ai servizi tecnici e non costituisce un consenso al trattamento dei dati da parte dei servizi esterni.',
            'Se saranno introdotti cookie o strumenti di tracciamento non necessari, saranno bloccati fino al consenso. L’utente dovrà poter accettare, rifiutare, scegliere per finalità e revocare o modificare la scelta con la stessa facilità con cui l’ha espressa. La policy e l’elenco dei cookie saranno aggiornati prima dell’attivazione.',
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
