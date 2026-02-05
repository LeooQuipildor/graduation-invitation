import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = ({ initials = "CP" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-gradient-to-br from-primary-900 to-pink-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Initials in elegant circle */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-2xl"
          >
            <span className="font-serif text-3xl font-bold text-white">
              {initials}
            </span>
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl font-light mb-4 text-white/90"
          >
            Gracias por ser parte de este momento especial
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-24 h-0.5 bg-white/30 mx-auto my-6"
          ></motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex items-center justify-center gap-2 text-sm text-white/70"
          >
            <span>Hecho con</span>
            <Heart className="w-4 h-4 fill-red-400 text-red-400 animate-pulse" />
            <span>• {currentYear}</span>
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 text-sm italic text-white/60 max-w-md mx-auto"
          >
            "El éxito es la suma de pequeños esfuerzos repetidos día tras día"
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
