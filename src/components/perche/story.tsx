import Image from '@/components/site/image'

export function StorySection() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="border-y border-surface-e3d5c3 py-14 text-center">
          <h2 className="mx-auto max-w-xl text-balance font-serif text-2xl italic text-espresso md:text-3xl">
            Il Maestro Amelio custodiva un segreto che ha donato a noi.
          </h2>
          <p className="mx-auto mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Amelio Anchebene Palomba custodiva un lievito madre, curato e rinnovato ogni giorno
            secondo la tradizione napoletana.
          </p>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-6xl items-start gap-10 px-5 pb-20 pt-4 md:grid-cols-[2fr_3fr]"
        aria-labelledby="storia-title"
      >
        <div>
          <Image
            src="/images/maestro-amelio.png"
            alt="Il Maestro Amelio Anchebene Palomba mentre impasta nel suo forno"
            sizes="(min-width: 768px) 40vw, 100vw"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="space-y-5 text-sm leading-relaxed text-muted-foreground md:pt-2">
          <h2 id="storia-title" className="font-serif text-2xl font-bold text-espresso">
            La nostra storia
          </h2>
          <p>
            <strong className="text-espresso">Un sogno diventato realtà.</strong> Per anni ho
            inseguito un sogno: la ricetta originale del Panuozzo Napoletano, quella vera, quella
            antica, quella che nessuno voleva più condividere. Ho bussato a forni, parlato con vecchi
            maestri, sfogliato quaderni ingialliti. Poi, quando ormai stavo per arrendermi, è
            successo qualcosa che ha cambiato tutto.
          </p>
          <p>
            Un giorno ho incontrato <strong className="text-espresso">Amelio Anchebene Palomba</strong>,
            con una profonda esperienza nella lavorazione del lievito madre. Con lui non ho trovato
            solo una ricetta: ho trovato un maestro. E da quel legame — fatto di amicizia, impegno e
            tradizione — è nato il nostro Pagnuozzo, con un lievito madre custodito e tramandato
            secondo la tradizione artigianale. Il Maestro oggi non è più con noi.
          </p>
          <p>
            {
              "Ma ci ha lasciato ciò che vale più dell'oro: il sapere per continuare a produrre il Pagnuozzo come si faceva una volta, quando i forni impastavano con lentezza, rispetto e una cura quasi sacra."
            }
          </p>
        </div>
      </section>
    </>
  )
}
