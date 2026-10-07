import { createFileRoute } from '@tanstack/react-router'
import { LegalPage } from '@/components/legal/legal-page'



function TerminiPage() {
  return (
    <LegalPage
      title="Termini e condizioni"
      updated="7 ottobre 2026"
      intro="I presenti Termini e condizioni regolano l’utilizzo del sito www.ilpagnuozzo.com, gestito da Società Duegi S.r.l. (P.IVA 02936711213). L’utilizzo del sito comporta l’accettazione dei presenti termini."
      sections={[
        {
          title: '1. Oggetto del sito',
          paragraphs: [
            'Il sito ha finalità informative e promozionali: presenta i prodotti a marchio Il Pagnuozzo e consente di richiedere un campione gratuito e di essere ricontattati. Il sito non consente l’acquisto online di prodotti.',
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
            'Ogni richiesta è soggetta a verifica da parte di Società Duegi S.r.l., che si riserva di valutare la corrispondenza del richiedente ai destinatari del servizio e di non dare seguito a richieste incomplete, non verificabili o non coerenti con tali finalità.',
            'La disponibilità dei campioni è limitata e può variare in base alle scorte, alla zona di consegna e alle esigenze organizzative.',
            'La richiesta del campione non costituisce un ordine e non determina la conclusione di alcun contratto di acquisto. Eventuali forniture successive saranno regolate da specifici accordi commerciali tra le parti.',
          ],
        },
        {
          title: '4. Informazioni e disponibilità dei prodotti',
          paragraphs: [
            'Le descrizioni, le immagini e le informazioni sui prodotti hanno carattere illustrativo e possono differire lievemente dal prodotto reale. Le informazioni ufficiali su ingredienti, allergeni e conservazione sono quelle riportate in etichetta.',
            'La disponibilità dei prodotti, i formati e le condizioni commerciali possono variare senza preavviso.',
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
            'Le video testimonianze pubblicate sul sito raccolgono le esperienze di clienti e professionisti che hanno partecipato volontariamente, previa specifica autorizzazione scritta. Le opinioni espresse sono personali e riferite alla propria esperienza. È vietato scaricare, riprodurre o riutilizzare i video senza autorizzazione.',
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
            'Società Duegi S.r.l. – Via Giulio Cesare 55, 80049 Somma Vesuviana (NA), Italia – P.IVA 02936711213 – Telefono / WhatsApp: +39 370 164 4530 – Email: info@ilpagnuozzo.com.',
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
