import { useState } from "react";
import { motion } from "framer-motion";

const EnvelopeIntro = ({ onOpenComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpenComplete();
    }, 2300);
  };

  return (
    <motion.div
      className="fixed top-0 bottom-0 left-0 right-0 mx-auto w-full lg:max-w-[640px] z-[100] flex items-center justify-center cursor-pointer overflow-hidden"
      onClick={!isOpen ? handleOpen : undefined}
      initial={{ opacity: 1 }}
      animate={
        isOpen
          ? { opacity: 0, transition: { delay: 0.2, duration: 2.5 } }
          : { opacity: 1 }
      }
    >
      {/* Imagen de Fondo */}
      <img
        src="/images/img-cover.webp"
        alt="Fondo Cover"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay opcional para oscurecer un poco si es necesario, o quitarlo si se quiere puro */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <motion.div
        className="relative w-full max-w-2xl px-4 flex flex-col items-center select-none z-10 will-change-transform"
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isOpen ? { scale: 20, opacity: 0 } : { scale: 1.5, opacity: 1 }
        }
        transition={{ duration: 2.5, delay: 0.1, ease: "easeInOut" }}
      >
        {/* Texto de Instrucción */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute md:-top-20 -top-42 mt-3 text-gold-engraved font-serif tracking-widest text-xs uppercase z-30"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1], opacity: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              Toca el sobre para abrir
            </motion.span>
          </motion.div>
        )}

        {/* Parte Superior (Con Sello) */}
        <motion.div
          className="w-full relative z-20 flex items-end will-change-transform"
          initial={{ y: 0 }}
          animate={
            isOpen
              ? {
                  y: -150,
                  opacity: 0,
                  transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
                }
              : { y: 0 }
          }
        >
          <img
            src="/images/arriba-img.webp"
            alt="Sobre Arriba"
            // Margen negativo MUY GRANDE para forzar solapamiento
            className="w-full object-contain -mb-[102%] pointer-events-none drop-shadow-xl"
          />
        </motion.div>

        {/* Parte Inferior */}
        <motion.div
          className="w-full relative z-10 flex items-start will-change-transform"
          initial={{ y: 0 }}
          animate={
            isOpen
              ? {
                  y: 150,
                  opacity: 0,
                  transition: { duration: 2, ease: [0.22, 1, 0.36, 1] },
                }
              : { y: 0 }
          }
        >
          <img
            src="/images/abajo-img.webp"
            alt="Sobre Abajo"
            className="w-full object-contain pointer-events-none"
            style={{ filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.5))" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default EnvelopeIntro;
