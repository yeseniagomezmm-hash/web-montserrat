export default function GerontologiaLandingPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-neutral-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-neutral-500 mb-4">
              Gerontología • Acompañamiento • Bienestar
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Acompañamiento gerontológico para vivir y envejecer mejor.
            </h1>

            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Orientación profesional para familias, personas adultas mayores,
              centros y profesionales interesados en promover un envejecimiento
              digno, saludable y con calidad de vida.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/523332547567"
                className="bg-black text-white px-6 py-3 rounded-2xl text-base font-medium hover:opacity-90 transition"
              >
                Solicitar información
              </a>

              <a
                href="#servicios"
                className="border border-black px-6 py-3 rounded-2xl text-base font-medium hover:bg-black hover:text-white transition"
              >
                Ver servicios
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 border border-neutral-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Atención profesional con enfoque integral
                </h3>
                <p className="text-neutral-600">
                  Evaluación, orientación e intervención desde una perspectiva
                  biopsicosocial y basada en evidencia.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-neutral-100 rounded-2xl p-4">
                  <p className="text-3xl font-bold">+100</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Personas acompañadas
                  </p>
                </div>

                <div className="bg-neutral-100 rounded-2xl p-4">
                  <p className="text-3xl font-bold">NL</p>
                  <p className="text-sm text-neutral-600 mt-1">
                    Nuevo León
                  </p>
                </div>
              </div>

              <div className="bg-neutral-900 text-white rounded-2xl p-5">
                <p className="font-medium mb-1">
                  Agenda una primera orientación
                </p>
                <p className="text-sm text-neutral-300">
                  Modalidad virtual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold mb-4">Servicios</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Procesos adaptados a las necesidades de cada persona, familia o institución.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Valoración gerontológica integral",
                text: "Evaluación física, emocional, social y funcional para identificar necesidades y fortalecer bienestar y autonomía.",
              },
              {
                title: "Orientación para familias",
                text: "Acompañamiento para mejorar cuidados, comunicación, toma de decisiones y adaptación a cambios asociados al envejecimiento.",
              },
              {
                title: "Intervención y seguimiento",
                text: "Diseño de estrategias y recomendaciones enfocadas en calidad de vida y envejecimiento saludable.",
              },
              {
                title: "Capacitación profesional",
                text: "Actualización y formación en gerontología, envejecimiento, trato digno y atención centrada en la persona.",
              },
              {
                title: "Asesoría para centros",
                text: "Diagnóstico y fortalecimiento de servicios para espacios orientados a personas adultas mayores.",
              },
              {
                title: "Conferencias y talleres",
                text: "Contenido accesible y basado en evidencia sobre envejecimiento, derechos y bienestar integral.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-neutral-200 rounded-3xl p-7 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-square rounded-3xl bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg">
              <img
              src="/mmprof.png"
              alt="Montserrat Muro"
              className="aspect-square object-cover rounded-3xl shadow-xl"/>          
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6">Sobre mí</h2>

            <p className="text-neutral-700 leading-relaxed mb-5">
              Soy Licenciada en Gerontología con formación en Derecho,
              especializada en envejecimiento desde un enfoque biopsicosocial y basado en evidencia.
            </p>

            <p className="text-neutral-700 leading-relaxed mb-5">
              Me desempeño en investigación y desarrollo de iniciativas enfocadas en entornos inclusivos,
              envejecimiento saludable y fortalecimiento de políticas y estrategias orientadas a personas mayores.
            </p>

            <p className="text-neutral-700 leading-relaxed">
              Mi objetivo es acercar herramientas accesibles, humanas y profesionales que contribuyan al bienestar y calidad de vida durante el envejecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="px-6 py-20 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              ¿Cómo puedo ayudarte?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Promover envejecimiento saludable",
              "Fortalecer autonomía y bienestar",
              "Brindar orientación profesional a familias",
              "Mejorar calidad de atención en centros",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-neutral-100 rounded-3xl p-6 text-center"
              >
                <p className="font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 md:px-16 lg:px-24 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Agenda una orientación gerontológica.
          </h2>

          <p className="text-neutral-300 text-lg mb-8 leading-relaxed">
            Atención presencial y virtual para personas adultas mayores,
            familias, instituciones y profesionales.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/523332547567"
              className="bg-white text-black px-7 py-3 rounded-2xl font-medium hover:opacity-90 transition"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="mailto:yeseniagomezmm@gmail.com"
              className="border border-white px-7 py-3 rounded-2xl font-medium hover:bg-white hover:text-black transition"
            >
              Enviar correo
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-8 md:px-16 lg:px-24 border-t border-neutral-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm text-neutral-500">
          <p>
            © 2026 Montserrat Muro · Gerontología y envejecimiento saludable.
          </p>

          <div className="flex gap-5">
            <a 
    href="https://www.instagram.com/muro_montserrat/" 
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>

  <a 
    href="https://www.linkedin.com/in/montserrat-muro-704b3133b/" 
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a 
    href="https://wa.me/523332547567" 
    target="_blank"
    rel="noopener noreferrer"
  >
    WhatsApp
  </a>
          </div>
        </div>
     </footer>
    </div>
  );
}