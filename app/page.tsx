export default function Page() {
  const areas = [
    {
      title: "Orientación y acompañamiento",
      text: "Acompañamiento gerontológico para personas y familias enfocado en bienestar, autonomía y calidad de vida.",
    },
    {
      title: "Proyectos y estrategias",
      text: "Desarrollo de iniciativas relacionadas con accesibilidad, participación y cultura de la longevidad.",
    },
    {
      title: "Formación y fortalecimiento institucional",
      text: "Capacitación y acompañamiento para instituciones y espacios comunitarios.",
    },
  ];

  const topics = [
    "Participación social",
    "Accesibilidad",
    "Cultura de la longevidad",
    "Intergeneracionalidad",
    "Bienestar",
    "Entornos amigables",
    "Estrategias comunitarias",
    "Políticas públicas",
  ];

  return (
    <main className="min-h-screen bg-[#F5F1EB] text-[#2B2B2B] overflow-hidden">

      {/* HERO */}
      <section className="bg-[#F5F1EB] px-6 py-32 md:px-14 lg:px-24 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.35fr_0.65fr] gap-6 lg:gap-10 items-center">

          {/* TEXTO */}
          <div className="max-w-4xl">

            <p className="uppercase tracking-[0.18em] text-[12px] text-[#8A847C] mb-8 font-medium">
              Longevidad · Bienestar · Participación
            </p>

            <h1
              className="text-[58px] md:text-[92px] leading-[0.98] tracking-[-0.04em] text-[#2B2B2B] mb-10"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Envejecimiento,
              <br />
              bienestar y participación.
            </h1>

            <p className="text-[21px] leading-[1.5] text-[#5B5751] max-w-[760px] mb-14">
              Gerontología, orientación y acompañamiento para personas,
              familias y proyectos relacionados con bienestar,
              accesibilidad y comunidad.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#contacto"
                className="bg-[#5E6B57] text-white px-9 py-4 rounded-full text-[15px] font-medium tracking-wide transition hover:opacity-90"
              >
                Contacto
              </a>

              <a
                href="#areas"
                className="border border-[#D6CDC3] text-[#5B5751] px-9 py-4 rounded-full text-[15px] font-medium tracking-wide transition hover:bg-[#2B2B2B] hover:text-white"
              >
                Áreas de trabajo
              </a>

            </div>

          </div>

          {/* FOTO */}
          <div className="hidden lg:flex justify-end pr-4">

            <div className="relative w-[240px] md:w-[280px]">

              <div className="absolute inset-0 bg-[#E7DED3] rounded-[1.7rem] translate-x-4 translate-y-4"></div>

              <img
                src="/mmprof.png"
                alt="Montserrat Muro"
                className="relative w-full h-[360px] md:h-[420px] object-cover object-[center_top] rounded-[1.7rem] shadow-[0_10px_24px_rgba(0,0,0,0.05)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ENFOQUE */}
      <section className="px-6 py-28 md:px-14 lg:px-24 bg-[#EFE7DC]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">

          <div>

            <p className="uppercase tracking-[0.18em] text-[12px] text-[#8A847C] mb-5 font-medium">
              Enfoque
            </p>

            <h2
              className="text-[46px] md:text-[64px] leading-[1.06] tracking-[-0.03em]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Participación, bienestar y entornos más accesibles.
            </h2>

          </div>

          <div>

            <p className="text-[18px] leading-[1.55] text-[#5B5751] mb-6">
              Trabajo en orientación gerontológica, acompañamiento y proyectos
              relacionados con bienestar, participación social y accesibilidad.
            </p>

            <p className="text-[18px] leading-[1.55] text-[#5B5751]">
              Mi experiencia también se relaciona con iniciativas institucionales,
              estrategias comunitarias y procesos enfocados en cultura de la longevidad
              y entornos amigables.
            </p>

          </div>

        </div>

      </section>

      {/* ÁREAS */}
      <section
        id="areas"
        className="px-6 py-28 md:px-14 lg:px-24 bg-[#F5F1EB]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-20">

            <p className="uppercase tracking-[0.18em] text-[12px] text-[#8A847C] mb-5 font-medium">
              Áreas de trabajo
            </p>

            <h2
              className="text-[46px] md:text-[64px] leading-[1.06] tracking-[-0.03em] mb-5"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Acompañamiento, proyectos y fortalecimiento institucional.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-14">

            {areas.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#D9D1C7] pt-7"
              >

                <h3
                  className="text-[32px] leading-[1.08] tracking-[-0.02em] mb-5"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-[#5B5751] text-[18px] leading-[1.5]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SOBRE MI TRABAJO */}
      <section className="px-6 py-28 md:px-14 lg:px-24 bg-[#EFE7DC]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.82fr] gap-16 items-start">

          <div>

            <p className="uppercase tracking-[0.18em] text-[12px] text-[#8A847C] mb-5 font-medium">
              Sobre mi trabajo
            </p>

            <h2
              className="text-[46px] md:text-[64px] leading-[1.06] tracking-[-0.03em] mb-8"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Gerontología, acompañamiento y proyectos para entornos más accesibles.
            </h2>

            <p className="text-[18px] leading-[1.55] text-[#5B5751] mb-6">
              Soy Licenciada en Gerontología con formación en Derecho.
            </p>

            <p className="text-[18px] leading-[1.55] text-[#5B5751] mb-6">
              Mi experiencia se desarrolla en acompañamiento individual,
              orientación gerontológica, formación y proyectos relacionados
              con bienestar y participación social.
            </p>

            <p className="text-[18px] leading-[1.55] text-[#5B5751]">
              También colaboro en iniciativas institucionales y comunitarias
              enfocadas en accesibilidad, entornos amigables,
              cultura de la longevidad y estrategias para una sociedad más inclusiva.
            </p>

          </div>

          <div>

            <div className="grid grid-cols-1 gap-5">

              {topics.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#D9D1C7] pb-5"
                >
                  <p className="text-[18px] text-[#5B5751] leading-[1.45]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="px-6 py-28 md:px-14 lg:px-24 bg-[#F5F1EB]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.18em] text-[12px] text-[#8A847C] mb-5 font-medium">
            Acompañamiento
          </p>

          <h2
            className="text-[46px] md:text-[64px] leading-[1.06] tracking-[-0.03em] mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            Orientación y acompañamiento para personas y familias.
          </h2>

          <p className="text-[18px] leading-[1.55] text-[#5B5751] max-w-3xl mx-auto mb-10">
            Espacios de orientación enfocados en bienestar, autonomía
            y acompañamiento para personas mayores, familias
            y procesos relacionados con calidad de vida.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="#contacto"
              className="bg-[#5E6B57] text-white px-9 py-4 rounded-full text-[15px] font-medium tracking-wide transition hover:opacity-90"
            >
              Solicitar información
            </a>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="px-6 py-28 md:px-14 lg:px-24 bg-[#5E6B57] text-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.18em] text-[12px] opacity-80 mb-5 font-medium">
            Contacto
          </p>

          <h2
            className="text-[46px] md:text-[64px] leading-[1.06] tracking-[-0.03em] mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            Conversemos sobre bienestar, participación y accesibilidad.
          </h2>

          <p className="text-[18px] leading-[1.5] text-[#E5E2DD] max-w-2xl mx-auto mb-12">
            Atención presencial y virtual para orientación gerontológica,
            acompañamiento, formación y proyectos relacionados con bienestar y participación.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">

            <a
              href="https://wa.me/528119782049"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#5E6B57] px-9 py-4 rounded-full text-[15px] font-medium tracking-wide transition hover:opacity-90"
            >
              WhatsApp
            </a>

            <a
              href="mailto:yeseniagomezmm@gmail.com"
              className="border border-white px-9 py-4 rounded-full text-[15px] font-medium tracking-wide transition hover:bg-white hover:text-[#5E6B57]"
            >
              Correo electrónico
            </a>

          </div>

          <div className="flex justify-center gap-6 text-[16px] text-[#E5E2DD]">

            <a
              href="https://www.instagram.com/muro_montserrat/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              Instagram
            </a>

            <a
              href="https://www.linkedin.com/in/montserrat-muro-704b3133b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://wa.me/528119782049"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="px-6 py-9 md:px-14 lg:px-24 bg-[#F5F1EB] border-t border-[#DDD5CA]">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[15px] text-[#8A847C]">

          <p>
            © 2026 Montserrat Muro · Gerontología y bienestar.
          </p>

          <p>
            Monterrey, Nuevo León · México
          </p>

        </div>

      </footer>

    </main>
  );
}
