import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="7 ottobre 2026"
      intro="Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, la presente informativa descrive le modalità con cui Società Duegi S.r.l. tratta i dati personali degli utenti del sito www.ilpagnuozzo.com, in particolare dei dati forniti tramite il modulo di richiesta del campione gratuito."
      sections={[
        {
          title: '1. Titolare del trattamento',
          paragraphs: [
            'Il Titolare del trattamento è Società Duegi S.r.l., con sede legale in Via Giulio Cesare 55, 80049 Somma Vesuviana (NA), Italia, P.IVA 02936711213. Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile contattare il Titolare all’indirizzo email info@ilpagnuozzo.com o al numero +39 370 164 4530 (telefono / WhatsApp).',
          ],
        },
        {
          title: '2. Dati personali trattati',
          paragraphs: [
            'Dati forniti volontariamente tramite il modulo di richiesta del campione gratuito: nome e cognome, nome del locale o dell’azienda, numero di telefono / WhatsApp ed eventuale messaggio facoltativo.',
            'Il modulo non salva i dati su server del sito: alla conferma, il testo della richiesta viene precompilato e aperto in WhatsApp, e l’invio avviene solo quando l’utente conferma il messaggio all’interno dell’applicazione WhatsApp. I dati sono quindi ricevuti dal Titolare tramite WhatsApp, oppure tramite email o telefono qualora l’utente scelga di contattarci con questi mezzi.',
            'Dati tecnici di navigazione: i sistemi informatici che rendono disponibile il sito possono acquisire, nel normale funzionamento dei protocolli di comunicazione Internet, dati quali indirizzo IP, tipo di browser, data e ora della richiesta. Tali dati sono utilizzati esclusivamente per garantire il funzionamento e la sicurezza del sito. Il sito non utilizza strumenti di analisi statistica, pixel di tracciamento o cookie di profilazione (si veda la Cookie Policy).',
          ],
        },
        {
          title: '3. Finalità e base giuridica del trattamento',
          paragraphs: [
            'a) Gestione della richiesta di campione gratuito e risposta alle richieste di contatto, inclusa la verifica della richiesta e l’organizzazione dell’eventuale invio. Base giuridica: esecuzione di misure precontrattuali adottate su richiesta dell’interessato (art. 6, par. 1, lett. b GDPR).',
            'b) Successivo ricontatto commerciale relativo ai prodotti Il Pagnuozzo, collegato alla richiesta effettuata. Base giuridica: consenso dell’interessato espresso tramite l’apposita casella del modulo (art. 6, par. 1, lett. a GDPR), revocabile in qualsiasi momento.',
            'c) Funzionamento tecnico e sicurezza del sito. Base giuridica: legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR).',
            'd) Adempimento di obblighi di legge e tutela dei diritti del Titolare, anche in sede giudiziaria. Base giuridica: obbligo legale e legittimo interesse (art. 6, par. 1, lett. c e f GDPR).',
          ],
        },
        {
          title: '4. Video testimonianze',
          paragraphs: [
            'Il sito può contenere video testimonianze in cui compaiono clienti o professionali del settore che hanno scelto volontariamente di partecipare. Per finalità di comunicazione e promozione dei prodotti Il Pagnuozzo, il Titolare può trattare e pubblicare immagine, voce, nome (ove applicabile), dichiarazioni e materiale audiovisivo delle persone ritratte.',
            'Tale trattamento avviene esclusivamente sulla base di una specifica autorizzazione scritta (liberatoria per l’uso di immagine, voce e testimonianza) rilasciata separatamente da ciascuna persona identificabile, conservata dal Titolare e non pubblicata sul sito. La consultazione del sito o l’accettazione della presente informativa non costituiscono in alcun caso autorizzazione all’uso dell’immagine o della testimonianza di alcuno.',
            'La persona ritratta può esercitare i diritti previsti dal GDPR, inclusa la revoca del consenso per il futuro, contattando il Titolare; la revoca non pregiudica la liceità del trattamento effettuato prima della stessa.',
          ],
        },
        {
          title: '5. Natura del conferimento',
          paragraphs: [
            'Il conferimento dei dati contrassegnati come obbligatori nel modulo è necessario per gestire la richiesta del campione: in mancanza non sarà possibile darvi seguito. Il messaggio è facoltativo.',
          ],
        },
        {
          title: '6. Modalità di trattamento e conservazione',
          paragraphs: [
            'I dati sono trattati con strumenti elettronici e manuali, da personale autorizzato, adottando misure tecniche e organizzative adeguate a garantirne la sicurezza.',
            'I dati relativi alle richieste di campione e di contatto sono conservati per il tempo necessario a gestire la richiesta e l’eventuale rapporto commerciale e, in ogni caso, non oltre 24 mesi dall’ultimo contatto, salvo obblighi di legge o necessità di tutela dei diritti. I dati trattati sulla base del consenso sono cancellati in caso di revoca. I materiali delle video testimonianze sono conservati per la durata indicata nella relativa autorizzazione o fino alla sua revoca.',
          ],
        },
        {
          title: '7. Destinatari dei dati',
          paragraphs: [
            'I dati non sono diffusi. Possono essere comunicati, nei limiti necessari, a: fornitori dei servizi di hosting e gestione tecnica del sito; fornitori dei servizi di comunicazione utilizzati per ricevere le richieste (WhatsApp, email, telefonia); consulenti e professionisti che assistono il Titolare (es. consulenti fiscali o legali); autorità pubbliche, ove previsto dalla legge. Tali soggetti operano, ove richiesto, come responsabili del trattamento o come titolari autonomi.',
            'Il sito carica i caratteri tipografici dal servizio Google Fonts: in tale occasione il browser dell’utente comunica a Google l’indirizzo IP e i dati tecnici della richiesta.',
          ],
        },
        {
          title: '8. Trasferimento dei dati extra UE',
          paragraphs: [
            'Alcuni fornitori sopra indicati (ad esempio WhatsApp e Google) possono trattare dati al di fuori dello Spazio Economico Europeo. In tali casi il trasferimento avviene sulla base di decisioni di adeguatezza della Commissione europea (incluso l’EU-U.S. Data Privacy Framework) o di altre garanzie adeguate previste dagli artt. 44 e ss. GDPR, come le Clausole Contrattuali Standard.',
          ],
        },
        {
          title: '9. Processi decisionali automatizzati',
          paragraphs: [
            'I dati non sono sottoposti a processi decisionali automatizzati né ad attività di profilazione.',
          ],
        },
        {
          title: '10. Diritti dell’interessato',
          paragraphs: [
            'Ai sensi degli artt. 15–22 GDPR, l’interessato può in qualsiasi momento chiedere l’accesso ai propri dati, la rettifica, la cancellazione, la limitazione del trattamento, la portabilità dei dati e opporsi al trattamento basato sul legittimo interesse, scrivendo a info@ilpagnuozzo.com.',
            'L’interessato può revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca.',
            'L’interessato ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o all’autorità di controllo dello Stato membro in cui risiede o lavora.',
          ],
        },
        {
          title: '11. Modifiche alla presente informativa',
          paragraphs: [
            'Il Titolare può aggiornare la presente informativa. La versione vigente è sempre pubblicata su questa pagina con la data di ultimo aggiornamento.',
          ],
        },
      ]}
    />
  )
}

const pageMeta = {
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali di Il Pagnuozzo – Società Duegi srl.',
}
export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPolicyPage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
