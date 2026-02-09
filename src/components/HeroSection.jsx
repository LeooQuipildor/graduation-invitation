import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-svh w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - El diseño principal */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Graduation Background"
          className="w-full h-full object-fill"
        />
        {/* Overlay sutil opcional para asegurar contraste del texto */}
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-5 mobile-m:px-6 mobile-l:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center w-full"
        >
          {/* Texto de Invitación */}
          <p className="font-serif text-[#1e1e1e] text-xs mobile-s:mt-28 mobile-m:text-sm mobile-l:text-base md:text-base leading-relaxed tracking-wide mb-2 mobile-m:mb-4 mobile-l:mb-4 uppercase font-medium mobile-s:px-3 ">
            Acompáñame a celebrar que oficialmente soy contadora pública
          </p>

          {/* Título Profesional */}
          {/* Título Profesional */}
          <h1 className="font-script text-4xl mobile-s:text-3xl mobile-m:text-4xl mobile-l:text-4xl md:text-6xl lg:text-8xl text-gold-engraved mb-3 mobile-m:mb-4 mobile-l:mb-4 drop-shadow-sm leading-tight mobile-l:text-5xl">
            Contadora Publica
          </h1>

          {/* Separador simple */}
          <div className="h-8 mobile-m:h-12 mobile-l:h-12 w-[1.5px] bg-[#c5b37f] shadow-[1px_1px_0px_rgba(255,255,255,0.8),-0.5px_-0.5px_0px_rgba(0,0,0,0.2)] mb-3 mobile-s:h-6 mobile-s:w-[1px] mobile-m:mb-4 mobile-l:mb-4"></div>

          {/* Nombre */}
          <h2 className="font-script text-3xl mobile-s:text-2xl mobile-s:mb-2 mobile-m:text-3xl mobile-l:text-4xl md:text-5xl lg:text-7xl text-gold-engraved mb-6 mobile-m:mb-10 mobile-l:mb-10 drop-shadow-sm leading-tight px-2">
            Emilia Rosa Guzman Julio
          </h2>

          {/* Sección de Fecha y Hora */}
          <div className="w-full max-w-[280px] mobile-m:max-w-xs mobile-l:max-w-xs mx-auto mb-6 mobile-m:mb-10 mobile-l:mb-10">
            <div className="text-center font-serif text-2xl mobile-m:text-3xl mobile-l:text-4xl text-black mb-1 mobile-m:mb-2 mobile-l:mb-2">
              Marzo
            </div>

            <div className="flex items-center justify-between py-0 mobile-m:py-3 mobile-l:py-3 w-full">
              {/* Sabado - Alineado a la izquierda */}
              <div className="w-1/3 flex justify-start mobile-s:justify-center">
                <span className="font-serif text-base mobile-m:text-2xl mobile-l:text-3xl text-black border-t border-b border-black/80 py-1">
                  Sabado
                </span>
              </div>

              {/* Día 01 - Centrado */}
              <div className="w-1/3 text-center">
                <span className="font-serif text-5xl mobile-m:text-5xl mobile-l:text-6xl md:text-7xl text-black font-bold leading-none">
                  01
                </span>
              </div>

              {/* Hora - Alineado a la derecha */}
              <div className="w-1/3 flex justify-end mobile-s:justify-center">
                <span className="font-serif text-base mobile-m:text-2xl mobile-l:text-3xl text-black border-t border-b border-black/80 py-1">
                  19:00hs
                </span>
              </div>
            </div>
          </div>

          {/* Frase Final */}
          <div className="font-serif text-[#1e1e1e] text-xs mobile-m:text-base mobile-l:text-lg md:text-base italic leading-relaxed max-w-md mx-auto font-medium px-4">
            <p className="mb-1 mobile-m:mb-2 mobile-l:mb-2">
              Es increíble hasta donde llega uno sin saberse las tablas de
              multiplicar.
            </p>
            <p className="mb-1 mobile-m:mb-2 mobile-l:mb-2">
              Con calculadora, obvio: soy contadora, no calculadora.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
