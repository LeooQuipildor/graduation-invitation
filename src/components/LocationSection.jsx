import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const LocationSection = ({ locationName, address, mapsUrl }) => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-pink-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
            Donde celebramos
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-light italic max-w-2xl mx-auto">
            El lugar donde los desvelos por fin se convierten en brindis
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 md:p-12 card-shadow"
        >
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-pink-500 flex items-center justify-center shadow-lg">
              <MapPin className="w-10 h-10 text-white" strokeWidth={2} />
            </div>

            {/* Location name */}
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {locationName}
              </h3>
              <p className="text-gray-600 text-lg">{address}</p>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-gold-400 rounded-full"></div>

            {/* Map button */}
            <motion.a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span>Ver en Google Maps</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            {/* Additional info */}
            <p className="text-sm text-gray-500 mt-4">
              📍 Toca el botón para obtener direcciones
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
