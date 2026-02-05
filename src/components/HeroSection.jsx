import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - El diseño principal */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Graduation Background"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay sutil opcional para asegurar contraste del texto */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
        >
          {/* Texto de Invitación */}
          <p className="font-serif text-[#1e1e1e] text-sm md:text-base leading-relaxed tracking-wide mb-4 uppercase font-medium">
            Acompáñame a celebrar que oficialmente
            <br />
            soy contadora pública
          </p>

          {/* Título Profesional */}
          <h1 className="font-script text-6xl md:text-8xl text-black mb-4 drop-shadow-sm">
            Contadora Publica
          </h1>

          {/* Separador simple */}
          <div className="h-12 w-[1.5px] bg-black/80 mb-4"></div>

          {/* Nombre */}
          <h2 className="font-script text-5xl md:text-7xl text-black mb-10 drop-shadow-sm">
            Emilia Rosa Guzman Julio
          </h2>

          {/* Sección de Fecha y Hora - Diseño limpio */}
          <div className="w-full max-w-xs mx-auto mb-10">
            <div className="text-center font-serif text-3xl text-black mb-2">
              Marzo
            </div>

            <div className="flex items-center justify-between border-t border-b border-black/80 py-3">
              <span className="font-serif text-xl text-black w-1/3 text-left">
                Sabado
              </span>
              <span className="font-serif text-7xl text-black font-bold w-1/3 leading-none">
                01
              </span>
              <span className="font-serif text-xl text-black w-1/3 text-right">
                19:00hs
              </span>
            </div>
          </div>

          {/* Frase Final */}
          <div className="font-serif text-[#1e1e1e] text-sm md:text-base italic leading-relaxed max-w-md mx-auto font-medium">
            <p className="mb-2">
              "Es increíble hasta donde llega uno sin saberse las tablas de
              multiplicar.
            </p>
            <p className="mb-2">Pero con calculadora.</p>
            <p className="font-semibold text-black not-italic">
              Soy contadora, no calculadora."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
