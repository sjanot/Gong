import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BillboardCard from "@/components/BillboardCard";
import { billboards } from "@/data/billboards";

export default function Home() {
  const available = billboards.filter((b) => b.status === "available");
  const centrum = billboards.filter((b) => b.category === "centrum");
  const okolie = billboards.filter((b) => b.category === "okolie");
  const dalsie = billboards.filter((b) => b.category === "dalsie");

  return (
    <>
      <Header />

      <main className="flex-1">
        {/* Blue stripe */}
        <div className="h-2 bg-[#0b5ab5]" />

        {/* Hero */}
        <section className="relative overflow-hidden bg-background text-white">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2),transparent_60%)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-gray-300 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400 animate-pulse" />
                {available.length}{" "}
                {available.length === 1 ? "plocha voľná" : "plochy voľné"}{" "}
                ihneď
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Prenájom
                <br />
                <span className="text-accent">reklamných plôch</span>
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed sm:text-xl">
                27+ billboardov na strategických miestach v Dolnom Kubíne a
                okolí. Viditeľnosť pre vašu reklamu od{" "}
                <strong className="text-white">95 €/mesiac</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#plochy"
                  className="rounded-lg bg-accent px-6 py-3 text-base font-bold text-primary-dark shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
                >
                  Zobraziť voľné plochy
                </a>
                <a
                  href="#cennik"
                  className="rounded-lg border-2 border-white/30 bg-white/10 px-6 py-3 text-base font-medium text-white backdrop-blur transition-all hover:bg-white/20"
                >
                  Cenník
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "27+", label: "Billboardov" },
                { value: "5.1×2.4m", label: "Rozmer plochy" },
                { value: "95 €", label: "Od / mesiac" },
                { value: "10+", label: "Rokov skúseností" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/10 px-4 py-4 text-center backdrop-blur"
                >
                  <div className="text-2xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Available now */}
        <section id="plochy" className="bg-primary-light py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center gap-3">
              <span className="inline-block h-3 w-3 rounded-full bg-primary-light0 animate-pulse" />
              <h2 className="text-3xl font-bold text-foreground">
                Voľné plochy
              </h2>
              <span className="rounded-full bg-primary-light0 px-3 py-0.5 text-sm font-bold text-white">
                {available.length}
              </span>
            </div>
            {available.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {available.map((b) => (
                  <BillboardCard key={b.id} billboard={b} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-8 text-center">
                <p className="text-lg font-medium text-yellow-300">
                  Momentálne nie sú voľné žiadne plochy.
                </p>
                <p className="mt-2 text-sm text-yellow-400/70">
                  Kontaktujte nás pre zaradenie do poradovníka.
                </p>
                <a
                  href="#kontakt"
                  className="mt-4 inline-block rounded-lg bg-accent px-6 py-2 font-bold text-primary-dark hover:bg-accent-dark"
                >
                  Kontaktovať
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Centrum */}
        <section id="centrum" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Billboardy — Centrum
            </h2>
            <p className="mb-8 text-muted">
              12 billboardov v centre Dolného Kubína s vysokou návštevnosťou
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {centrum.map((b) => (
                <BillboardCard key={b.id} billboard={b} />
              ))}
            </div>
          </div>
        </section>

        {/* Okolie */}
        <section id="okolie" className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Billboardy — Okolie
            </h2>
            <p className="mb-8 text-muted">
              14 billboardov na hlavných trasách: Veličná, Párnica, Valaská
              Dubová, Kňažia
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {okolie.map((b) => (
                <BillboardCard key={b.id} billboard={b} />
              ))}
            </div>
          </div>
        </section>

        {/* Ďalšie plochy */}
        <section id="dalsie" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-3xl font-bold text-foreground">
              Ďalšie plochy
            </h2>
            <p className="mb-8 text-muted">
              Špeciálne reklamné plochy mimo štandardných billboardov
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {dalsie.map((b) => (
                <BillboardCard key={b.id} billboard={b} />
              ))}
            </div>
          </div>
        </section>

        {/* Cenník */}
        <section id="cennik" className="bg-primary-dark py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold">Cenník</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Prenájom */}
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Prenájom billboardu</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-accent">95 €</span>
                  <span className="text-gray-300"> / mesiac</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">bez DPH</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Plocha 5.1 × 2.4 m
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Strategické umiestnenie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Vysoká viditeľnosť
                  </li>
                </ul>
              </div>

              {/* Osvetlený */}
              <div className="relative rounded-2xl bg-accent/20 p-6 ring-2 ring-accent backdrop-blur">
                <div className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-primary-dark">
                  PREMIUM
                </div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/30 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Osvetlený billboard</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-accent">100 €</span>
                  <span className="text-gray-300"> / mesiac</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">bez DPH</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Osvetlenie 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Viditeľnosť aj v noci
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Premium pozícia
                  </li>
                </ul>
              </div>

              {/* Výroba */}
              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/20 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold">Výroba billboardu</h3>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-accent">95 €</span>
                  <span className="text-gray-300"> / jednorázovo</span>
                </div>
                <p className="mt-1 text-xs text-gray-400">bez DPH</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Grafický návrh
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Tlač na 120g BB papier
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Inštalácia v cene
                  </li>
                </ul>
                <p className="mt-4 text-xs text-gray-400">
                  Formáty: PDF, CDR, AI, JPG, TIFF
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Order form (e-shop) */}
        <section id="objednat" className="bg-primary-light/40 py-16">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-center text-3xl font-bold text-foreground">
              Objednávka
            </h2>
            <p className="mb-8 text-center text-muted">
              Vyplňte formulár a my sa vám ozveme do 24 hodín
            </p>

            <div className="rounded-2xl bg-card-bg border border-card-border p-6 shadow-lg sm:p-8">
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Meno a priezvisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Ján Novák"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Firma
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Názov firmy"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="jan@firma.sk"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1 block text-sm font-medium text-foreground"
                    >
                      Telefón *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="+421 9XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="billboard"
                    className="mb-1 block text-sm font-medium text-foreground"
                  >
                    Záujem o plochu
                  </label>
                  <select
                    id="billboard"
                    className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Vyberte billboard...</option>
                    <option value="volne">Akákoľvek voľná plocha</option>
                    <option value="centrum">Billboard — Centrum DK</option>
                    <option value="okolie">Billboard — Okolie DK</option>
                    <option value="osvetleny">
                      Osvetlený billboard (Premium)
                    </option>
                    <option value="ine">
                      Iná plocha / špeciálna požiadavka
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="duration"
                    className="mb-1 block text-sm font-medium text-foreground"
                  >
                    Doba prenájmu
                  </label>
                  <select
                    id="duration"
                    defaultValue="6"
                    className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="1">1 mesiac</option>
                    <option value="3">3 mesiace</option>
                    <option value="6">6 mesiacov</option>
                    <option value="12">12 mesiacov</option>
                    <option value="custom">Individuálne</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">
                    Doplnkové služby
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-card-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm">
                        Výroba billboardu (+95 € bez DPH)
                      </span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-card-border text-primary focus:ring-primary"
                      />
                      <span className="text-sm">
                        Grafický návrh (v cene výroby)
                      </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-foreground"
                  >
                    Správa
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full rounded-lg border border-card-border px-4 py-2.5 text-sm transition-colors bg-primary-light/50 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Vaša správa alebo špeciálne požiadavky..."
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg bg-accent px-6 py-3 text-lg font-bold text-primary-dark shadow-lg transition-all hover:bg-accent-dark hover:shadow-xl"
                >
                  Odoslať objednávku
                </button>
                <p className="text-center text-xs text-muted">
                  Odoslaním súhlasíte so spracovaním osobných údajov. Ozveme sa
                  vám do 24 hodín.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
              Kontakt
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Telefón</h3>
                <a
                  href="tel:+421905651589"
                  className="mt-2 text-accent hover:underline"
                >
                  +421 905 651 589
                </a>
                <a
                  href="tel:+421905382862"
                  className="mt-1 text-accent hover:underline"
                >
                  +421 905 382 862
                </a>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">E-mail</h3>
                <a
                  href="mailto:jlubek@gmail.com"
                  className="mt-2 text-accent hover:underline"
                >
                  jlubek@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center rounded-xl border border-card-border bg-card-bg p-6 text-center shadow-sm">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-foreground">Adresa</h3>
                <p className="mt-2 text-sm text-muted">
                  Obrancov mieru 1780/3
                  <br />
                  026 01 Dolný Kubín
                  <br />
                  Slovensko
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-accent"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}
