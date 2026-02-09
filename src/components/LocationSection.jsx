import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";
import {
  Map,
  MapMarker,
  MarkerContent,
  MapControls,
} from "@/components/ui/map";

const LocationSection = () => {
  return (
    <section className="relative w-full min-h-svh py-10 px-4 flex flex-col items-center justify-center overflow-hidden tablet:py-16">
      {/* Fondo Texturizado - SIN CAMBIOS */}
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
          className="text-center mb-6 mobile-m:mb-8 mobile-l:mb-8 tablet:mb-12"
        >
          <h2 className="font-script text-4xl mobile-m:text-5xl mobile-l:text-5xl tablet:text-7xl md:text-6xl text-gold-engraved mb-1 drop-shadow-sm">
            Donde celebramos
          </h2>
          <p className="font-serif text-gray-500 text-sm mobile-m:text-xl mobile-l:text-xl tablet:text-2xl md:text-xl italic max-w-md mx-auto leading-tight tablet:max-w-xl">
            El lugar donde celebramos que el esfuerzo valió la pena.
          </p>
        </motion.div>

        {/* Tarjeta Blanca del Mapa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white w-full max-w-md p-1.5 card-strong-shadow rounded-sm tablet:max-w-xl"
        >
          <div className="border border-gray-400 p-4 mobile-m:p-6 mobile-l:p-6 tablet:p-12 flex flex-col items-center text-center">
            {/* Icono Principal */}
            <div className="text-[#7f8c6c] mb-3 mobile-m:mb-4 mobile-l:mb-4 tablet:mb-6">
              <MapPin
                size={40}
                strokeWidth={1.5}
                className="mobile-m:w-20 mobile-m:h-20 mobile-l:w-20 mobile-l:h-20 tablet:w-24 tablet:h-24"
              />
            </div>

            {/* Nombre del Salón y Dirección */}
            <h3 className="font-serif text-xl mobile-m:text-3xl mobile-l:text-3xl tablet:text-4xl text-gold-engraved uppercase tracking-widest mb-1 tablet:mb-3">
              Salon "Nombre"
            </h3>
            <p className="font-serif text-[10px] mobile-m:text-lg mobile-l:text-lg tablet:text-xl text-gray-500 uppercase tracking-wider mb-4 max-w-xs tablet:max-w-md tablet:mb-6">
              El lugar donde celebramos que el esfuerzo valió la pena.
            </p>

            {/* Horario */}
            <div className="flex items-center gap-2 text-gold-engraved mb-4 font-serif text-xs mobile-m:text-lg mobile-l:text-lg tablet:text-xl tablet:mb-8">
              <Clock size={16} className="tablet:w-6 tablet:h-6" />
              <span>A PARTIR DE 19:00 HS</span>
            </div>

            {/* Mapa Interactivo */}
            <div className="w-full h-40 mobile-m:h-48 mobile-l:h-48 tablet:h-64 bg-gray-100 mb-4 mobile-m:mb-6 mobile-l:mb-6 tablet:mb-8 overflow-hidden border border-gray-200 shadow-inner relative">
              <Map
                center={[-58.38157, -34.60373]}
                zoom={17}
                theme="light"
                className="w-full h-full"
                mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              >
                <MapControls
                  position="top-right"
                  showZoom={false}
                  showCompass={false}
                  showFullscreen={true}
                />

                <MapMarker longitude={-58.38157} latitude={-34.60373}>
                  <MarkerContent>
                    <div className="text-[#7f8c6c] drop-shadow-md">
                      <MapPin
                        size={32}
                        fill="#7f8c6c"
                        className="text-white tablet:w-10 tablet:h-10"
                      />
                    </div>
                  </MarkerContent>
                </MapMarker>
              </Map>
            </div>

            {/* Botón Abrir en Maps */}
            <a
              href="https://goo.gl/maps/xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7f8c6c] text-white font-serif font-bold text-xs mobile-m:text-sm mobile-l:text-sm tablet:text-lg tablet:px-16 tablet:py-4 px-10 py-3 hover:bg-[#6c7a5a] transition-colors uppercase tracking-[0.2em] shadow-md rounded-none"
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
