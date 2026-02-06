import { useState } from "react";
import { motion } from "framer-motion";

const EnvelopeIntro = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpenComplete();
    }, 1200);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#7f8c6c] cursor-pointer"
      onClick={!isOpen ? handleOpen : undefined}
      initial={{ opacity: 1 }}
      animate={
        isOpen
          ? { opacity: 0, transition: { delay: 0.8, duration: 0.5 } }
          : { opacity: 1 }
      }
    >
      <div className="relative w-full max-w-2xl px-4 flex flex-col items-center select-none">
        {/* Texto de Instrucción */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute md:-top-20 -top-32 text-gold-engraved font-serif tracking-widest text-sm uppercase z-30"
          >
            Toca el sobre para abrir
          </motion.div>
        )}

        {/* Parte Superior (Con Sello) */}
        <motion.div
          className="w-full relative z-20 flex items-end"
          initial={{ y: 0 }}
          animate={
            isOpen
              ? {
                  y: -150,
                  opacity: 0,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                }
              : { y: 0 }
          }
        >
          <img
            src="/images/arriba-img.png"
            alt="Sobre Arriba"
            // Margen negativo MUY GRANDE para forzar solapamiento
            className="w-full object-contain -mb-[102%] pointer-events-none drop-shadow-xl"
          />
        </motion.div>

        {/* Parte Inferior */}
        <motion.div
          className="w-full relative z-10 flex items-start"
          initial={{ y: 0 }}
          animate={
            isOpen
              ? {
                  y: 150,
                  opacity: 0,
                  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
                }
              : { y: 0 }
          }
        >
          <img
            src="/images/abajo-img.png"
            alt="Sobre Abajo"
            className="w-full object-contain pointer-events-none"
            style={{ filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.5))" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnvelopeIntro;
