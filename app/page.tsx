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
      <section className="bg-[#F5F1EB] px-6 py-28 md:px-14 lg:px-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">

          {/* TEXTO */}
          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.16em] text-[11px] text-[#8A847C] mb-7 font-medium">
              Longevidad · Bienestar · Participación
            </p>

            <h1
              className="text-[50px] md:text-[78px] leading-[1.1] tracking-[-0.025em] text-[#2B2B2B] mb-8"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Envejecimiento, bienestar y participación.
            </h1>

            <p className="text-[18px] leading-[1.58] text-[#5B5751] max-w-2xl mb-11">
              Gerontología, orientación y acompañamiento para personas,
              familias y proyectos enfocados en bienestar, accesibilidad
              y participación.
            </p>

            <div className="flex flex-wrap gap-3">

              <a
                href="#contacto"
                className="bg-[#5E6B57] text-white px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition hover:opacity-90"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Contacto
              </a>

              <a
                href="#areas"
                className="border border-[#D5CBC0] text-[#5B5751] px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition hover:bg-[#2B2B2B] hover:text-white"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Áreas de trabajo
              </a>

            </div>

          </div>

          {/* FOTO */}
          <div className="flex justify-center lg:justify-end lg:pr-6">

            <div className="relative w-[240px] md:w-[290px] lg:w-[300px]">

              <div className="absolute inset-0 bg-[#E7DED3] rounded-[2rem] translate-x-4 translate-y-4"></div>

              <img
                src="/mmprof.png"
                alt="Montserrat Muro"
                className="relative w-full h-[390px] md:h-[430px] object-cover object-[center_top] rounded-[2rem] shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ENFOQUE */}
      <section className="px-6 py-24 md:px-14 lg:px-24 bg-[#EFE7DC]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">

          <div>

            <p className="uppercase tracking-[0.16em] text-[11px] text-[#8A847C] mb-5 font-medium">
              Enfoque
            </p>

            <h2
              className="text-[42px] md:text-[60px] leading-[1.14] tracking-[-0.02em]"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              El envejecimiento también forma parte de cómo vivimos nuestros espacios, relaciones y comunidades.
            </h2>

          </div>

          <div>

            <p className="text-[17px] leading-[1.58] text-[#5B5751] mb-6">
              Trabajo en orientación gerontológica, acompañamiento y proyectos
              relacionados con bienestar, participación social y accesibilidad.
            </p>

            <p className="text-[17px] leading-[1.58] text-[#5B5751]">
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
        className="px-6 py-24 md:px-14 lg:px-24 bg-[#F5F1EB]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-16">

            <p className="uppercase tracking-[0.16em] text-[11px] text-[#8A847C] mb-5 font-medium">
              Áreas de trabajo
            </p>

            <h2
              className="text-[42px] md:text-[60px] leading-[1.14] tracking-[-0.02em] mb-5"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Acompañamiento, proyectos y fortalecimiento institucional.
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-12">

            {areas.map((item, index) => (
              <div
                key={index}
                className="border-t border-[#D9D1C7] pt-6"
              >

                <h3
                  className="text-[30px] leading-[1.18] tracking-[-0.015em] mb-5"
                  style={{
                    fontFamily: "Cormorant Garamond, serif",
                    fontWeight: 600,
                  }}
                >
                  {item.title}
                </h3>

                <p className="text-[#5B5751] text-[16px] leading-[1.55]">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* SOBRE MI TRABAJO */}
      <section className="px-6 py-24 md:px-14 lg:px-24 bg-[#EFE7DC]">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.85fr] gap-16 items-start">

          <div>

            <p className="uppercase tracking-[0.16em] text-[11px] text-[#8A847C] mb-5 font-medium">
              Sobre mi trabajo
            </p>

            <h2
              className="text-[42px] md:text-[60px] leading-[1.14] tracking-[-0.02em] mb-8"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                fontWeight: 600,
              }}
            >
              Una práctica profesional vinculada con bienestar, participación y accesibilidad.
            </h2>

            <p className="text-[17px] leading-[1.58] text-[#5B5751] mb-6">
              Soy Licenciada en Gerontología con formación en Derecho.
            </p>

            <p className="text-[17px] leading-[1.58] text-[#5B5751] mb-6">
              Mi experiencia se desarrolla en acompañamiento individual,
              orientación gerontológica, formación y proyectos relacionados
              con envejecimiento, bienestar y participación social.
            </p>

            <p className="text-[17px] leading-[1.58] text-[#5B5751]">
              También colaboro en iniciativas institucionales y comunitarias
              enfocadas en accesibilidad, entornos amigables,
              cultura de la longevidad y estrategias para una sociedad más inclusiva.
            </p>

          </div>

          <div>

            <div className="grid grid-cols-1 gap-4">

              {topics.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#D9D1C7] pb-4"
                >
                  <p className="text-[16px] text-[#5B5751] leading-[1.5]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="px-6 py-24 md:px-14 lg:px-24 bg-[#F5F1EB]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="uppercase tracking-[0.16em] text-[11px] text-[#8A847C] mb-5 font-medium">
            Acompañamiento
          </p>

          <h2
            className="text-[42px] md:text-[60px] leading-[1.14] tracking-[-0.02em] mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            Orientación y acompañamiento para personas y familias.
          </h2>

          <p className="text-[17px] leading-[1.58] text-[#5B5751] max-w-3xl mx-auto mb-10">
            Espacios de orientación enfocados en bienestar, envejecimiento,
            autonomía y acompañamiento para personas mayores, familias
            y procesos relacionados con calidad de vida.
          </p>

          <div className="flex flex-wrap justify-center gap-3">

            <a
              href="#contacto"
              className="bg-[#5E6B57] text-white px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition hover:opacity-90"
            >
              Solicitar información
            </a>

          </div>

        </div>

      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="px-6 py-24 md:px-14 lg:px-24 bg-[#5E6B57] text-white"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.16em] text-[11px] opacity-80 mb-5 font-medium">
            Contacto
          </p>

          <h2
            className="text-[44px] md:text-[62px] leading-[1.14] tracking-[-0.02em] mb-8"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            Construyamos conversaciones sobre bienestar y envejecimiento.
          </h2>

          <p className="text-[17px] leading-[1.55] text-[#E5E2DD] max-w-2xl mx-auto mb-10">
            Atención presencial y virtual para orientación gerontológica,
            acompañamiento, formación y proyectos relacionados con envejecimiento y participación.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">

            <a
              href="https://wa.me/523332547567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#5E6B57] px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition hover:opacity-90"
            >
              WhatsApp
            </a>

            <a
              href="mailto:yeseniagomezmm@gmail.com"
              className="border border-white px-8 py-4 rounded-full text-[14px] font-medium tracking-wide transition hover:bg-white hover:text-[#5E6B57]"
            >
              Correo electrónico
            </a>

          </div>

          <div className="flex justify-center gap-6 text-[15px] text-[#E5E2DD]">

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
              href="https://wa.me/523332547567"
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
      <footer className="px-6 py-8 md:px-14 lg:px-24 bg-[#F5F1EB] border-t border-[#DDD5CA]">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[14px] text-[#8A847C]">

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
