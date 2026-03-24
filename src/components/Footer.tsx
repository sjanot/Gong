const navLinks = [
  { href: "#plochy", label: "Voľné plochy" },
  { href: "#centrum", label: "Billboardy centrum" },
  { href: "#okolie", label: "Billboardy okolie" },
  { href: "#dalsie", label: "Ďalšie plochy" },
  { href: "#cennik", label: "Cenník" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer>
      {/* Orange contact strip */}
      <div className="bg-accent px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-4 text-sm text-primary-dark font-medium sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M3.75 3v18m16.5-18v18M5.25 3h13.5M5.25 21V10.5m13.5 10.5V10.5M8.25 6.75h.008v.008H8.25V6.75zm0 3h.008v.008H8.25V9.75zm0 3h.008v.008H8.25v-.008zm3.75-6h.008v.008H12V6.75zm0 3h.008v.008H12V9.75zm0 3h.008v.008H12v-.008zm3.75-6h.008v.008h-.008V6.75zm0 3h.008v.008h-.008V9.75z" /></svg>
            GONG, s.r.o.
          </div>
          <div>Obrancov mieru 1780/3, 026 01 Dolný Kubín</div>
          <div>
            <a href="mailto:jlubek@gmail.com" className="hover:underline">jlubek@gmail.com</a>
          </div>
          <div>
            <a href="tel:+421905651589" className="hover:underline">+421 905 651 589</a>
          </div>
        </div>
      </div>
      {/* Dark bottom */}
      <div className="bg-primary-dark text-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company info */}
          <div>
            <div className="mb-4">
              <img
                src="/Gong/logo.png"
                alt="GONG, s.r.o."
                className="h-10"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Prenájom reklamných plôch a billboardov v Dolnom Kubíne a okolí.
              Viac ako 27 billboardov na strategických miestach.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <h3 className="mb-4 font-bold text-white">Rýchla navigácia</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 transition-colors hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-bold text-white">Kontakt</h3>
            <address className="not-italic text-sm text-gray-300 space-y-2">
              <p>Obrancov mieru 1780/3</p>
              <p>026 01 Dolný Kubín</p>
              <p className="pt-2">
                <a
                  href="tel:+421905651589"
                  className="transition-colors hover:text-accent"
                >
                  +421 905 651 589
                </a>
              </p>
              <p>
                <a
                  href="tel:+421905382862"
                  className="transition-colors hover:text-accent"
                >
                  +421 905 382 862
                </a>
              </p>
              <p>
                <a
                  href="mailto:jlubek@gmail.com"
                  className="transition-colors hover:text-accent"
                >
                  jlubek@gmail.com
                </a>
              </p>
            </address>
            <div className="mt-3 text-xs text-gray-500">
              <p>IČO: 31645984</p>
              <p>DIČ: 2020426023</p>
              <p>IČ DPH: SK2020426023</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} GONG, s.r.o. Všetky práva
          vyhradené.
        </div>
      </div>
      </div>
    </footer>
  );
}
