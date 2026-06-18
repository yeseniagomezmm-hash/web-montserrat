export default function Page() {
  const areas = [
    {
      title: "Orientación y acompañamiento",
      text: "Acompañamiento gerontológico para personas y familias enfocado en bienestar, autonomía y calidad de vida.",
    },
    {
      title: "Proyectos y estrategias",
      text: "Desarrollo de iniciativas relacionadas con envejecimiento, accesibilidad, participación y cultura de la longevidad.",
    },
    {
      title: "Formación y fortalecimiento institucional",
      text: "Capacitación, asesoría y acompañamiento para instituciones, empresas y espacios comunitarios.",
    },
  ];

  const topics = [
    "Envejecimiento y longevidad",
    "Personas mayores",
    "Derechos humanos",
    "Participación social",
    "Procesos cognitivos y demencias",
    "Intergeneracionalidad",
    "Entornos amigables",
    "Políticas públicas",
  ];

  return (
    <main className="min-h-screen bg-[#F5F1EB] text-[#2B2B2B] overflow-hidden">
      {/* HERO */}
{/* HERO */}
<section
  className="relative px-6 py-32 md:px-14 lg:px-24 overflow-hidden"
  style={{
    backgroundColor: "#F5F1EB",
    backgroundImage: "url('/rama-editorial.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="absolute inset-0 bg-[#F5F1EB]/90"></div>

  <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">

    {/* TEXTO */}
    <div>

      <p
        className="uppercase tracking-[0.28em] text-[13px] text-[#8A847C] mb-8"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Envejecimiento · Personas Mayores · Gerontología · Políticas Públicas
      </p>

      <h1
        className="text-[68px] md:text-[108px] leading-[0.94] tracking-[-0.05em] text-[#2B2B2B] mb-8"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 700,
        }}
      >
        Envejecimiento
        <br />
        y nueva longevidad.
      </h1>

      <p
        className="text-[22px] md:text-[24px] leading-[1.7] text-[#5B5751] max-w-[760px] mb-12"
        style={{ fontFamily: "Inter, Montserrat, sans-serif" }}
      >
        Impulso proyectos, procesos de formación y estrategias de
        acompañamiento que fortalecen la participación de las personas
        mayores y contribuyen a una cultura positiva del envejecimiento,
        la longevidad y la construcción de comunidades más inclusivas.
      </p>

      <div className="flex flex-wrap gap-4">

        <a
          href="#contacto"
          className="bg-[#5E6B57] text-white px-10 py-4 rounded-full transition hover:opacity-90"
        >
          Contacto
        </a>

        <a
          href="#areas"
          className="border border-[#D6CDC3] text-[#5B5751] px-10 py-4 rounded-full transition hover:bg-[#2B2B2B] hover:text-white"
        >
          Áreas de trabajo
        </a>

      </div>

    </div>

    {/* FOTO */}

    <div className="hidden lg:flex justify-end">

      <div className="relative w-[330px]">

        <div className="absolute inset-0 bg-[#E7DED3] rounded-[32px] translate-x-5 translate-y-5"></div>

        <img
          src="/mmprof.png"
          alt="Montserrat Muro"
          className="relative w-full h-[500px] object-cover object-top rounded-[32px] shadow-xl"
        />

      </div>

    </div>

  </div>

</section>
   {/* ENFOQUE */}
<section className="px-6 py-32 md:px-14 lg:px-24 bg-[#EFE7DC]">

  <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-16">

    <div>

      <p className="uppercase tracking-[0.22em] text-[13px] text-[#8A847C] mb-5 font-medium">
        Enfoque
      </p>

      <h2
        className="text-[52px] md:text-[72px] leading-[1.02]"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 600,
        }}
      >
        Una mirada interdisciplinaria sobre el envejecimiento y la nueva longevidad.
      </h2>

    </div>

    <div>

      <p className="text-[20px] leading-[1.8] text-[#5B5751] mb-6">
        Mi trabajo integra la gerontología, la formación, la investigación
        aplicada y el diseño de estrategias orientadas a fortalecer la
        participación de las personas mayores y promover una cultura positiva
        del envejecimiento.
      </p>

      <p className="text-[20px] leading-[1.8] text-[#5B5751]">
        También colaboro en iniciativas dirigidas a instituciones, empresas y
        organizaciones para impulsar proyectos, políticas y entornos que
        respondan a los desafíos y oportunidades de una sociedad cada vez más longeva.
      </p>

    </div>

  </div>

</section>

{/* ÁREAS */}
<section
  id="areas"
  className="px-6 py-32 md:px-14 lg:px-24 bg-[#F5F1EB]"
>

  <div className="max-w-7xl mx-auto">

    <div className="max-w-3xl mb-20">

      <p className="uppercase tracking-[0.22em] text-[13px] text-[#8A847C] mb-5 font-medium">
        Áreas de trabajo
      </p>

      <h2
        className="text-[52px] md:text-[72px] leading-[1.02]"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 600,
        }}
      >
        Acompañamiento, formación y desarrollo de proyectos.
      </h2>

    </div>

    <div className="grid md:grid-cols-3 gap-14">

      {areas.map((item, index) => (
        <div
          key={index}
          className="border-t border-[#D9D1C7] pt-8"
        >

          <h3
            className="text-[34px] leading-[1.08] mb-5"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontWeight: 600,
            }}
          >
            {item.title}
          </h3>

          <p className="text-[#5B5751] text-[19px] leading-[1.7]">
            {item.text}
          </p>

        </div>
      ))}

    </div>

  </div>

</section>

{/* SOBRE MI TRABAJO */}
<section className="px-6 py-32 md:px-14 lg:px-24 bg-[#EFE7DC]">

  <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_0.82fr] gap-16 items-start">

    <div>

      <p className="uppercase tracking-[0.22em] text-[13px] text-[#8A847C] mb-5 font-medium">
        Sobre mi trabajo
      </p>

      <h2
        className="text-[52px] md:text-[72px] leading-[1.02] mb-8"
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontWeight: 600,
        }}
      >
        Gerontología, derecho y compromiso social.
      </h2>

      <p className="text-[20px] leading-[1.8] text-[#5B5751]">
        Soy Licenciada en Gerontología con formación en Derecho.
        Mi práctica profesional combina acompañamiento, investigación,
        formación y gestión de proyectos relacionados con envejecimiento,
        personas mayores, derechos humanos y cultura de la longevidad.
      </p>

      <br />

      <p className="text-[20px] leading-[1.8] text-[#5B5751]">
        Colaboro con personas, familias, instituciones, empresas y actores
        sociales para impulsar iniciativas que favorezcan la participación,
        el ejercicio de derechos, la accesibilidad y la construcción de
        comunidades más amigables para todas las edades.
      </p>

    </div>

    <div>

      <div className="grid grid-cols-1 gap-5">

        {topics.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#D9D1C7] pb-5"
          >
            <p className="text-[19px] text-[#5B5751] leading-[1.6]">
              {item}
            </p>
          </div>
        ))}

      </div>

    </div>

  </div>
</section> 
{/* PROYECTOS Y RECURSOS */}
<section className="px-6 py-32 md:px-14 lg:px-24 bg-[#F5F1EB]">

  <div className="max-w-6xl mx-auto">

    <p className="uppercase tracking-[0.22em] text-[13px] text-[#8A847C] mb-5">
      Proyectos y recursos
    </p>

    <h2
      className="text-[52px] md:text-[72px] leading-[1.02] mb-12"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontWeight: 600,
      }}
    >
      Compartir conocimiento también transforma comunidades.
    </h2>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="border-t border-[#D9D1C7] pt-6">
        <h3
          className="text-[30px] mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Conferencias
        </h3>

        <p className="text-[#5B5751] text-[18px] leading-[1.7]">
          Espacios de divulgación y reflexión sobre envejecimiento,
          personas mayores, derechos humanos y cultura de la longevidad.
        </p>
      </div>

      <div className="border-t border-[#D9D1C7] pt-6">
        <h3
          className="text-[30px] mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Recursos
        </h3>

        <p className="text-[#5B5751] text-[18px] leading-[1.7]">
          Presentaciones, materiales educativos y herramientas para fortalecer
          la comprensión del envejecimiento desde una perspectiva integral.
        </p>
      </div>

      <div className="border-t border-[#D9D1C7] pt-6">
        <h3
          className="text-[30px] mb-4"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          Productos digitales
        </h3>

        <p className="text-[#5B5751] text-[18px] leading-[1.7]">
          Próximamente estarán disponibles guías, plantillas, cursos y recursos
          especializados para profesionales, instituciones y personas interesadas
          en la gerontología.
        </p>
      </div>

    </div>

  </div>

</section>

{/* ACOMPAÑAMIENTO */}
<section className="px-6 py-32 md:px-14 lg:px-24 bg-[#EFE7DC]">

  <div className="max-w-5xl mx-auto text-center">

    <p className="uppercase tracking-[0.22em] text-[13px] text-[#8A847C] mb-5">
      Acompañamiento
    </p>

    <h2
      className="text-[52px] md:text-[72px] leading-[1.02] mb-8"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontWeight: 600,
      }}
    >
      Orientación para personas, familias e instituciones.
    </h2>

    <p className="text-[20px] leading-[1.8] text-[#5B5751] max-w-3xl mx-auto mb-10">
      Acompaño procesos relacionados con envejecimiento, personas mayores,
      participación social y fortalecimiento institucional desde una visión
      interdisciplinaria y centrada en los derechos humanos.
    </p>

    <a
      href="#contacto"
      className="bg-[#5E6B57] text-white px-10 py-4 rounded-full transition hover:opacity-90"
    >
      Solicitar información
    </a>

  </div>

</section>

{/* CONTACTO */}
<section
  id="contacto"
  className="px-6 py-32 md:px-14 lg:px-24 bg-[#5E6B57] text-white"
>

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.22em] text-[13px] opacity-80 mb-5">
      Contacto
    </p>

    <h2
      className="text-[52px] md:text-[72px] leading-[1.02] mb-8"
      style={{
        fontFamily: "Cormorant Garamond, serif",
        fontWeight: 600,
      }}
    >
      Construyamos iniciativas con impacto social.
    </h2>

    <p className="text-[20px] leading-[1.8] text-[#E5E2DD] max-w-2xl mx-auto mb-12">
      Si buscas colaborar en proyectos, formación, investigación,
      conferencias o acompañamiento profesional, será un gusto conversar.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mb-12">

      <a
        href="https://wa.me/528119782049"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-[#5E6B57] px-10 py-4 rounded-full"
      >
        WhatsApp
      </a>

      <a
        href="mailto:yeseniagomezmm@gmail.com"
        className="border border-white px-10 py-4 rounded-full hover:bg-white hover:text-[#5E6B57]"
      >
        Correo electrónico
      </a>

    </div>

    <div className="flex justify-center gap-8 text-[17px]">

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
        href="https://wa.me/528119782049"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

    </div>

  </div>

</section>

{/* FOOTER */}
<footer className="px-6 py-10 md:px-14 lg:px-24 bg-[#F5F1EB] border-t border-[#DDD5CA]">

  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-[15px] text-[#8A847C]">

    <p>
      © 2026 Montserrat Muro · Gerontología · Derecho · Nueva longevidad
    </p>

    <p>
      México
    </p>

  </div>

</footer>

</main>
);
}
