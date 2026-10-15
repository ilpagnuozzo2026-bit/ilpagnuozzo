import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="15 ottobre 2026"
      intro="Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 e successive modifiche, questa informativa descrive il trattamento dei dati personali sul sito Il Pagnuozzo, anche quando accessibile tramite il dominio di pubblicazione ilpagnuozzo.lovable.app. Riguarda le richieste di campioni gratuiti, informazioni commerciali e collaborazioni B2B e i contatti avviati tramite WhatsApp o email."
      sections={[
        {
          title: '1. Titolare del trattamento',
          paragraphs: [
            'Il Titolare del trattamento è Società Duegi S.r.l., con sede legale in Via Giulio Cesare 55, 80049 Somma Vesuviana (NA), Italia, P.IVA 02936711213, che presenta i propri prodotti con il marchio Il Pagnuozzo. Per questioni relative alla privacy e per esercitare i propri diritti: info@ilpagnuozzo.com; WhatsApp +39 370 164 4530.',
          ],
        },
        {
          title: '2. Dati personali trattati',
          paragraphs: [
            'Il modulo per il campione gratuito richiede nome e cognome, nome del locale o dell’azienda e numero WhatsApp; il messaggio è facoltativo. Il modulo non contiene campi per email o indirizzo di consegna e richiede di selezionare la casella relativa al trattamento dei dati per il ricontatto.',
            'Il modulo non invia le richieste a un archivio del sito e non le salva nei cookie o nello spazio di archiviazione del browser. Prepara un link a WhatsApp contenente il testo della richiesta: aprendo il link, il testo viene trasmesso al servizio WhatsApp per la precompilazione; il Titolare riceve il messaggio soltanto se l’utente ne conferma l’invio in WhatsApp. La conferma visualizzata sul sito non attesta che il messaggio sia stato inviato o che la richiesta sia stata accettata.',
            'Se comunicati successivamente dall’utente tramite WhatsApp o email per gestire un campione, una richiesta commerciale o una collaborazione B2B, possono essere trattati anche email, indirizzo di consegna, recapiti del referente, dati aziendali e altre informazioni strettamente necessarie alla richiesta. Non sono presenti moduli separati di contatto o di candidatura B2B. Si invita a non inserire dati particolari, come informazioni sulla salute, né dati di terzi non necessari.',
            'Dati tecnici di navigazione: i sistemi informatici che rendono disponibile il sito possono acquisire, nel normale funzionamento dei protocolli di comunicazione Internet, dati quali indirizzo IP, tipo di browser, data e ora della richiesta. Tali dati sono utilizzati esclusivamente per garantire il funzionamento e la sicurezza del sito. Il sito non utilizza strumenti di analisi statistica, pixel di tracciamento o cookie di profilazione (si veda la Cookie Policy).',
          ],
        },
        {
          title: '3. Finalità e base giuridica del trattamento',
          paragraphs: [
            'a) Rispondere alla richiesta, verificarne i requisiti professionali, organizzare l’eventuale campione e gestire informazioni su forniture o collaborazioni richieste. Base giuridica: misure precontrattuali adottate su richiesta dell’interessato (art. 6, par. 1, lett. b GDPR); per i dati dei referenti che agiscono per conto di un’azienda, legittimo interesse a gestire i rapporti professionali richiesti (art. 6, par. 1, lett. f GDPR).',
            'b) La casella attualmente presente nel modulo riguarda il ricontatto richiesto dall’utente: non costituisce un consenso separato a campagne pubblicitarie, newsletter o messaggi promozionali ulteriori. La gestione della richiesta non è subordinata a un consenso al marketing. Eventuali comunicazioni promozionali ulteriori tramite WhatsApp o altri canali che richiedono consenso potranno essere effettuate soltanto dopo aver acquisito uno specifico consenso libero, facoltativo e documentabile, ai sensi dell’art. 6, par. 1, lett. a GDPR e dell’art. 130 del D.Lgs. 196/2003, revocabile in qualsiasi momento.',
            'c) Funzionamento tecnico e sicurezza del sito. Base giuridica: legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR).',
            'd) Adempimento di obblighi di legge e tutela dei diritti del Titolare, anche in sede giudiziaria. Base giuridica: obbligo legale e legittimo interesse (art. 6, par. 1, lett. c e f GDPR).',
          ],
        },
        {
          title: '4. Video testimonianze',
          paragraphs: [
            'Il sito può contenere video testimonianze in cui compaiono clienti o professionisti del settore che hanno scelto volontariamente di partecipare. Per finalità di comunicazione e promozione dei prodotti Il Pagnuozzo, il Titolare può trattare e pubblicare immagine, voce, nome (ove applicabile), dichiarazioni e materiale audiovisivo delle persone ritratte.',
            'Per pubblicare questi materiali è necessario acquisire e conservare una specifica autorizzazione documentabile per immagine, voce e testimonianza da ciascuna persona identificabile, con indicazione di finalità, canali e durata di utilizzo. La base giuridica è il consenso (art. 6, par. 1, lett. a GDPR), insieme all’autorizzazione all’uso dell’immagine richiesta dalla normativa applicabile. La consultazione del sito o la casella del modulo campioni non costituiscono tale autorizzazione; le liberatorie non vengono pubblicate sul sito.',
            'La persona ritratta può esercitare i diritti previsti dal GDPR, inclusa la revoca del consenso per il futuro, contattando il Titolare; la revoca non pregiudica la liceità del trattamento effettuato prima della stessa.',
          ],
        },
        {
          title: '5. Natura del conferimento',
          paragraphs: [
            'I dati contrassegnati con un asterisco e la selezione della casella per il ricontatto sono necessari per utilizzare il modulo attuale; il messaggio è facoltativo. Senza i recapiti necessari non è possibile gestire la richiesta tramite questo canale. È comunque possibile contattare il Titolare direttamente via email o WhatsApp. Un eventuale consenso al marketing è distinto e facoltativo: il suo rifiuto non pregiudica la gestione della richiesta.',
          ],
        },
        {
          title: '6. Modalità di trattamento e conservazione',
          paragraphs: [
            'I dati sono trattati con strumenti elettronici e manuali, da personale autorizzato, adottando misure tecniche e organizzative adeguate a garantirne la sicurezza.',
            'I dati delle richieste sono conservati per il tempo necessario a rispondere, verificare l’eventuale consegna del campione e concludere le attività richieste. Una volta esaurite tali finalità, sono cancellati o anonimizzati, salvo i dati necessari a un rapporto commerciale ancora in corso, ad adempimenti di legge o alla tutela di un diritto per il relativo periodo applicabile. Non si applica un termine fisso di 24 mesi non definito dal Titolare.',
            'Per eventuali attività promozionali autorizzate, il periodo o i criteri di conservazione devono essere comunicati al momento del consenso; la revoca interrompe l’utilizzo promozionale, ferma restando la conservazione minima necessaria a documentare le scelte dell’interessato o rispettare obblighi di legge. I materiali delle testimonianze sono utilizzati per la durata e sui canali indicati nell’autorizzazione; in caso di revoca cessa l’utilizzo basato sul consenso per il futuro, fatti salvi gli obblighi applicabili. I dati tecnici sono conservati dai fornitori per il tempo necessario alle rispettive finalità di erogazione e sicurezza.',
          ],
        },
        {
          title: '7. Destinatari dei dati',
          paragraphs: [
            'I dati delle richieste non sono pubblicati. Nei limiti necessari, possono essere accessibili al personale autorizzato e comunicati ai fornitori di hosting e gestione tecnica (piattaforma Lovable e relativa infrastruttura di distribuzione e sicurezza), ai servizi di comunicazione utilizzati (WhatsApp/Meta e fornitore email), agli eventuali incaricati della consegna dei campioni, a consulenti e ad autorità nei casi previsti dalla legge. Il loro ruolo di responsabile del trattamento o titolare autonomo dipende dal servizio e dagli accordi applicabili. Le testimonianze, invece, sono accessibili al pubblico nei limiti dell’autorizzazione prevista nella sezione 4.',
            'Il sito carica i caratteri da Google Fonts e immagini, copertine e video da servizi di distribuzione dei contenuti (CDN). Queste richieste comunicano ai relativi fornitori indirizzo IP e dati tecnici del browser. Le copertine possono caricarsi all’apertura della pagina; i video sono riprodotti su scelta dell’utente con il lettore del sito, senza un lettore YouTube o altri widget social incorporati.',
          ],
        },
        {
          title: '8. Trasferimento dei dati extra UE',
          paragraphs: [
            'I servizi WhatsApp/Meta, Google e alcuni fornitori tecnici possono comportare trattamenti fuori dallo Spazio Economico Europeo. I trasferimenti devono rispettare gli artt. 44 e seguenti GDPR: una decisione di adeguatezza è utilizzabile soltanto se applicabile allo specifico destinatario e trattamento; in alternativa occorrono garanzie adeguate, quali le Clausole Contrattuali Standard e, ove necessarie, misure supplementari. Non si presume che ogni fornitore sia coperto dall’EU-U.S. Data Privacy Framework.',
            'Per conoscere i destinatari, i Paesi interessati e le garanzie applicabili al trattamento effettuato dal Titolare, o richiederne copia nei limiti consentiti, è possibile scrivere a info@ilpagnuozzo.com. I servizi esterni utilizzati direttamente dall’utente applicano anche le proprie informative. La configurazione tecnica del sito non consente, da sola, di attestare gli accordi e le garanzie adottati dai fornitori.',
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
            'Nei casi e nei limiti degli artt. 15–22 GDPR, l’interessato può chiedere accesso, rettifica, cancellazione e limitazione del trattamento; può ottenere la portabilità dei dati quando il trattamento automatizzato è basato su consenso o contratto e opporsi, per motivi connessi alla propria situazione, al trattamento basato sul legittimo interesse. L’opposizione al marketing diretto può essere esercitata in qualsiasi momento, senza motivazione. Le richieste vanno inviate a info@ilpagnuozzo.com.',
            'L’interessato può revocare in qualsiasi momento il consenso prestato, senza pregiudicare la liceità del trattamento basata sul consenso prima della revoca.',
            'L’interessato ha inoltre diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it) o all’autorità di controllo dello Stato membro in cui risiede o lavora.',
            'Il Titolare risponde senza ingiustificato ritardo e, di norma, entro un mese dalla ricezione della richiesta; nei casi previsti dall’art. 12 GDPR il termine può essere prorogato di altri due mesi, informando l’interessato entro il primo mese. Può essere richiesta soltanto la documentazione necessaria a verificare l’identità.',
          ],
        },
        {
          title: '11. Dati ricevuti da altri soggetti',
          paragraphs: [
            'Il sito non acquisisce elenchi di contatti da terzi. Se, per gestire una richiesta professionale, un’azienda comunica i dati di un proprio referente, possono essere trattati nome, ruolo e recapiti professionali provenienti da tale azienda. Il Titolare rende le informazioni previste dall’art. 14 GDPR entro i termini applicabili e, al più tardi, al primo contatto con il referente, salvo le eccezioni previste dalla legge.',
          ],
        },
        {
          title: '12. Modifiche alla presente informativa',
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
