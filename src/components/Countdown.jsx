import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const cardsRef = useRef([]);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Solo animación de entrada (Carga al hacer scroll)
      gsap.fromTo(
        cardsRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let newTimeLeft = {};

      if (difference > 0) {
        newTimeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return newTimeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <section className="relative h-svh w-full flex items-center justify-center overflow-hidden">
      {/* 1. Fondo Full Screen - SIN CAMBIOS */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background-countdown.webp"
          alt="Fondo Countdown"
          className="w-full h-full object-fill"
        />
        {/* Overlay ligero para mejorar contraste si es necesario */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      {/* 2. Moños Decorativos */}
      {/* Superior */}
      <div className="absolute top-0 w-full z-20 pointer-events-none flex justify-center">
        <img
          src="/images/moños-countdown.webp"
          alt="Moños Arriba"
          className="w-auto h-auto max-h-[30vh] object-contain"
        />
      </div>

      {/* Inferior Invertido */}
      <div className="absolute bottom-0 w-full z-20 pointer-events-none flex justify-center">
        <img
          src="/images/moños-countdown.webp"
          alt="Moños Abajo"
          className="w-auto h-auto max-h-[30vh] object-contain rotate-180"
        />
      </div>

      {/* 3. Contenido Central */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center px-6 w-full max-w-lg mt-10 mobile-m:mt-0 tablet:max-w-2xl tablet:mt-0">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-5xl mobile-m:text-6xl md:text-7xl tablet:text-8xl text-gold-engraved mb-2 drop-shadow-sm"
        >
          Cuenta atras
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif italic text-lg mobile-m:text-xl md:text-2xl tablet:text-3xl tablet:pt-8 text-gray-500 mb-8 mobile-m:mb-12 tablet:mb-16 leading-tight max-w-sm mobile-s:mb-1 mobile-s:text-sm tablet:max-w-xl"
        >
          Cada segundo nos acerca al final de una gran etapa y al comienzo de
          una nueva.
        </motion.p>

        {/* Cajas del Contador - Animadas con GSAP */}
        <div
          ref={containerRef}
          className="grid grid-cols-2 gap-4 tablet:gap-8 w-full max-w-md mx-auto box-border mobile-s:mb-10 tablet:mb-0 tablet:max-w-lg tablet:pb-20"
        >
          {timeUnits.map((item, index) => (
            <div
              key={item.label}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative flex flex-col items-center justify-center aspect-[5/4] opacity-0" // opacity-0 inicial para evitar parpadeo antes de animar
            >
              {/* Imagen de fondo de la minicard - SIN CAMBIOS */}
              <div className="absolute inset-0 z-0 flex items-center justify-center">
                <img
                  src="/images/minicards.webp"
                  alt="Fondo tarjeta"
                  className="w-[110%] h-[110%] object-contain"
                  style={{
                    filter: "drop-shadow(5px 5px 2px rgba(0,0,0,0.5))",
                  }}
                />
              </div>

              {/* Contenido (Texto) encima de la imagen */}
              <div className="relative z-10 flex flex-col items-center -mt-2 mobile-m:-mt-4">
                <span className="font-sans text-[9px] mobile-m:text-[10px] md:text-xs tablet:text-sm text-white uppercase tracking-[0.2em] font-medium opacity-90">
                  {item.label}
                </span>
                <span className="font-serif text-3xl mobile-m:text-4xl md:text-5xl tablet:text-6xl text-white font-normal mb-8 drop-shadow-sm">
                  {String(item.value || 0).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 text-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Countdown;
