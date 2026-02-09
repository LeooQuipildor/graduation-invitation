import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = ({ initials = "CP" }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-4 pt-12 px-4 bg-[#7f8c6c] text-white relative overflow-hidden">
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
          {/* Sello Image instead of Initials */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 mx-auto mb-0 flex items-center justify-center filter drop-shadow-xl mobile-m:w-36 mobile-m:h-36"
          >
            <img
              src="/images/sello.png"
              alt="Sello"
              className="w-full h-full object-contain"
            />
          </motion.div>

          {/* New Funny Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-serif text-lg md:text-xl font-medium mb-2 text-white italic max-w-lg mx-auto mobile-m:text-2xl"
          >
            "Prometo declarar impuestos... pero primero celebro mi grado"
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-16 h-0.5 bg-white/40 mx-auto my-4"
          ></motion.div>

          {/* Gratitude & Signature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-base md:text-lg font-light mb-8 text-white/90 font-serif mobile-m:text-2xl"
          >
            <p className="mb-2">
              Gracias por ser parte de este momento especial.
            </p>
            <p className="font-script text-2xl mt-4 mobile-m:text-3xl">
              Atte. Emilia Rosa Guzman Julio
            </p>
          </motion.div>

          {/* Developer Credit */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-[8px] text-white/60 font-sans tracking-wider uppercase border-t border-white/20 pt-6 mt-6 mobile-m:text-[11px]"
          >
            Diseñado y desarrollado por: Leandro Quipildor
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
