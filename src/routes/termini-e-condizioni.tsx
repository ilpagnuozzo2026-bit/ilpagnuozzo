import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function TerminiPage() {
  return (
    <LegalPage
      title="Termini e condizioni"
      updated="15 ottobre 2026"
      intro="Questi Termini e condizioni disciplinano l’utilizzo del sito Il Pagnuozzo, anche sul dominio di pubblicazione ilpagnuozzo.lovable.app, gestito da Società Duegi S.r.l. (P.IVA 02936711213). Riguardano la consultazione dei contenuti e le richieste professionali; non sono condizioni di vendita online. La navigazione non costituisce consenso al marketing o all’uso dell’immagine."
      sections={[
        {
          title: '1. Oggetto del sito',
          paragraphs: [
            'Il sito presenta i prodotti a marchio Il Pagnuozzo e consente di avviare una richiesta di campione gratuito o un contatto per informazioni su forniture e collaborazioni B2B. Non contiene un carrello, un pagamento online né un modulo per concludere ordini: eventuali richieste commerciali tramite WhatsApp o email sono valutate separatamente.',
          ],
        },
        {
          title: '2. Destinatari',
          paragraphs: [
            'I contenuti e il servizio di richiesta del campione sono rivolti a operatori professionali del settore HORECA (ristoranti, pizzerie, paninoteche, pub, rosticcerie, bar e simili) e della distribuzione alimentare.',
          ],
        },
        {
          title: '3. Richiesta del campione gratuito',
          paragraphs: [
            'La richiesta del campione è gratuita e senza impegno. Il campione è destinato esclusivamente a operatori professionali.',
            'Il modulo richiede nome e cognome, locale o azienda, numero WhatsApp e selezione della casella per il ricontatto; il messaggio è facoltativo. Apre WhatsApp con un testo precompilato: la richiesta raggiunge il Titolare soltanto dopo che l’utente invia il messaggio nell’applicazione. L’avviso del sito invita a completare l’invio e non è una conferma di ricezione, accettazione o spedizione.',
            'Ogni richiesta è soggetta a verifica da parte di Società Duegi S.r.l., che si riserva di valutare la corrispondenza del richiedente ai destinatari del servizio e di non dare seguito a richieste incomplete, non verificabili o non coerenti con tali finalità.',
            'La disponibilità dei campioni è limitata e può variare in base alle scorte, alla zona di consegna e alle esigenze organizzative.',
            'L’eventuale indirizzo di consegna e i dettagli organizzativi vengono richiesti successivamente attraverso il canale di contatto. Tempi e modalità di consegna devono essere confermati dal Titolare; l’indicazione di un tempo di risposta sul sito non equivale a una garanzia di consegna del campione.',
            'La richiesta del campione non costituisce un ordine e non determina la conclusione di alcun contratto di acquisto. Eventuali forniture successive saranno regolate da specifici accordi commerciali tra le parti.',
          ],
        },
        {
          title: '4. Informazioni e disponibilità dei prodotti',
          paragraphs: [
            'Le descrizioni, le immagini e le informazioni sui prodotti hanno carattere illustrativo e possono differire lievemente dal prodotto reale. Le informazioni ufficiali su ingredienti, allergeni e conservazione sono quelle riportate in etichetta.',
            'La disponibilità dei prodotti, i formati e le condizioni commerciali possono variare senza preavviso.',
            'Prima di qualsiasi fornitura successiva, le parti devono definire separatamente prodotti e quantità, prezzi e trattamento IVA, eventuali costi di trasporto, modalità di pagamento e consegna e condizioni applicabili al rapporto B2B. Il professionista deve rispettare le indicazioni di etichetta e la normativa alimentare applicabile alla conservazione, preparazione e somministrazione. Questi termini del sito non sostituiscono gli accordi di fornitura e non limitano gli obblighi inderogabili in materia di sicurezza alimentare.',
          ],
        },
        {
          title: '5. Contenuti del sito',
          paragraphs: [
            'Società Duegi S.r.l. si impegna a mantenere i contenuti del sito corretti e aggiornati, ma non garantisce che siano privi di errori o sempre completi, e si riserva di modificarli in qualsiasi momento.',
          ],
        },
        {
          title: '6. Marchio, logo e immagini',
          paragraphs: [
            'Il marchio e il nome Il Pagnuozzo, il logo e i relativi segni distintivi, così come le fotografie e le immagini presenti sul sito, sono di titolarità di Società Duegi S.r.l. o dei rispettivi titolari e non possono essere utilizzati, riprodotti o modificati senza preventiva autorizzazione scritta.',
          ],
        },
        {
          title: '7. Diritto d’autore e proprietà intellettuale',
          paragraphs: [
            'Testi, grafica, video, impaginazione e ogni altro contenuto del sito sono protetti dalla normativa sul diritto d’autore e sulla proprietà intellettuale. È vietata qualsiasi riproduzione, distribuzione o utilizzo commerciale senza autorizzazione scritta, salvo l’uso personale e non commerciale consentito dalla legge.',
          ],
        },
        {
          title: '8. Video testimonianze',
          paragraphs: [
            'Le testimonianze dei partner B2B e le relative citazioni riportano opinioni personali riferite alla loro esperienza e non costituiscono una garanzia di risultati né una certificazione o una classifica oggettiva dei prodotti. La pubblicazione di persone identificabili richiede una specifica autorizzazione documentabile per immagine, voce e testimonianza, distinta dalle richieste di campioni e da eventuali consensi al marketing. È vietato riprodurre o riutilizzare i video senza autorizzazione, fatti salvi gli usi consentiti dalla legge.',
          ],
        },
        {
          title: '9. Link esterni',
          paragraphs: [
            'Il sito contiene link a siti e servizi di terzi (ad esempio social network, WhatsApp e Google Maps). Società Duegi S.r.l. non controlla tali servizi e non è responsabile dei loro contenuti né delle loro politiche sulla privacy.',
          ],
        },
        {
          title: '10. Disponibilità del sito',
          paragraphs: [
            'Società Duegi S.r.l. non garantisce l’accesso continuo e ininterrotto al sito, che può essere sospeso o limitato per manutenzione, aggiornamenti o cause indipendenti dalla propria volontà.',
          ],
        },
        {
          title: '11. Limitazione di responsabilità',
          paragraphs: [
            'Nei limiti consentiti dalla legge, Società Duegi S.r.l. non è responsabile per danni derivanti dall’utilizzo o dall’impossibilità di utilizzo del sito, da errori od omissioni nei contenuti o dall’uso di siti di terzi raggiungibili tramite link. Restano salvi i casi di dolo o colpa grave e le ipotesi di responsabilità inderogabile previste dalla legge.',
          ],
        },
        {
          title: '12. Legge applicabile e foro competente',
          paragraphs: [
            'I presenti termini sono regolati dalla legge italiana. Per ogni controversia relativa all’utilizzo del sito è competente in via esclusiva il Foro di Napoli, salvo diversa competenza inderogabile prevista dalla legge.',
          ],
        },
        {
          title: '13. Contatti',
          paragraphs: [
            'Società Duegi S.r.l. – Via Giulio Cesare 55, 80049 Somma Vesuviana (NA), Italia – P.IVA 02936711213 – WhatsApp +39 370 164 4530 – Email info@ilpagnuozzo.com.',
          ],
        },
      ]}
    />
  )
}

const pageMeta = {
  title: 'Termini e condizioni',
  description: 'Termini e condizioni di utilizzo del sito di Il Pagnuozzo – Società Duegi srl.',
}
export const Route = createFileRoute('/termini-e-condizioni')({
  component: TerminiPage,
  head: () => ({ meta: [
    { title: pageMeta.title === 'Il Pagnuozzo' ? pageMeta.title : `${pageMeta.title} | Il Pagnuozzo` },
    { name: 'description', content: pageMeta.description },
    { property: 'og:title', content: pageMeta.title },
    { property: 'og:description', content: pageMeta.description },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
})
