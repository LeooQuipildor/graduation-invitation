import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="relative w-full min-h-svh py-10 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo Texturizado (Continuación del Countdown) */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background-countdown.jpg"
          alt="Fondo Textura"
          className="w-full h-full object-cover rotate-180"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 mobile-m:mb-8"
        >
          <h2 className="font-script text-4xl mobile-m:text-5xl md:text-6xl text-gold-engraved mb-1 drop-shadow-sm">
            Donde celebramos
          </h2>
          <p className="font-serif text-gold-engraved text-sm mobile-m:text-lg md:text-xl italic max-w-md mx-auto leading-tight">
            El lugar donde celebramos que el esfuerzo valió la pena.
          </p>
        </motion.div>

        {/* Tarjeta Blanca del Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white w-full max-w-md p-1.5 card-strong-shadow rounded-sm"
        >
          <div className="border border-gray-400 p-4 mobile-m:p-6 flex flex-col items-center text-center">
            {/* Icono Principal */}
            <div className="text-[#8B7E60] mb-3 mobile-m:mb-4">
              <MapPin
                size={40}
                strokeWidth={1.5}
                className="mobile-m:w-12 mobile-m:h-12"
              />
            </div>

            {/* Nombre del Salón y Dirección */}
            <h3 className="font-serif text-xl mobile-m:text-2xl text-[#8B7E60] uppercase tracking-widest mb-1">
              Salon "Nombre"
            </h3>
            <p className="font-serif text-[10px] mobile-m:text-xs text-gray-500 uppercase tracking-wider mb-4 max-w-xs">
              El lugar donde celebramos que el esfuerzo valió la pena.
            </p>

            {/* Horario */}
            <div className="flex items-center gap-2 text-gray-600 mb-4 font-serif text-xs mobile-m:text-sm">
              <Clock size={16} />
              <span>A PARTIR DE 19:00 HS</span>
            </div>

            {/* Imagen del Mapa (Placeholder o iFrame) */}
            <div className="w-full h-40 mobile-m:h-48 bg-gray-100 mb-4 mobile-m:mb-6 rounded-sm overflow-hidden border border-gray-200 grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889451!2d-58.38157048477038!3d-34.60373888045938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb:0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses!2sar!4v1676922379532!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa Ubicación"
              ></iframe>
            </div>

            {/* Botón Abrir en Maps */}
            <a
              href="https://goo.gl/maps/xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7A8B7A] text-white font-serif font-bold text-xs mobile-m:text-sm px-10 py-3 hover:bg-[#697a69] transition-colors uppercase tracking-[0.2em] shadow-md rounded-none"
            >
              Abrir en Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
