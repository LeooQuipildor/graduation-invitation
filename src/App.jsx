import { useState, useLayoutEffect } from "react";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import LocationSection from "./components/LocationSection";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";
import EnvelopeIntro from "./components/EnvelopeIntro";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  // Bloquear scroll y forzar inicio arriba al cargar
  useLayoutEffect(() => {
    // Forzar scroll arriba siempre al cargar la página
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    if (showIntro) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showIntro]);

  // Configuración del evento - Personaliza estos valores
  const eventConfig = {
    // Fecha del evento (formato: YYYY-MM-DD HH:MM:SS)
    eventDate: "2026-03-05 19:00:00",

    // Ubicación
    location: {
      name: "Barrio Libertad",
      address: "Carrera 45 #13-16",
      mapsUrl:
        "https://www.google.com/maps/place/9%C2%B018'48.3%22N+75%C2%B022'55.1%22W/@9.313422,-75.382076,21z/data=!4m4!3m3!8m2!3d9.313426!4d-75.38196?hl=es&entry=ttu&g_ep=EgoyMDI2MDIxMC4wIKXMDSoASAFQAw%3D%3D",
    },

    // Tus iniciales para el footer
    initials: "CP",
  };

  return (
    <div className="min-h-screen w-full flex justify-center bg-zinc-900">
      <div className="w-full lg:max-w-[640px] min-h-screen relative shadow-2xl bg-white overflow-hidden">
        {/* Animación de Sobre Intro */}
        {showIntro && (
          <EnvelopeIntro onOpenComplete={() => setShowIntro(false)} />
        )}

        {/* Hero Section */}
        <HeroSection />

        {/* Countdown Section */}
        <Countdown targetDate={eventConfig.eventDate} />

        {/* Location Section */}
        <LocationSection
          locationName={eventConfig.location.name}
          address={eventConfig.location.address}
          mapsUrl={eventConfig.location.mapsUrl}
        />

        {/* RSVP Form */}
        <RSVPForm />

        {/* Footer */}
        <Footer initials={eventConfig.initials} />
      </div>
    </div>
  );
}

export default App;
