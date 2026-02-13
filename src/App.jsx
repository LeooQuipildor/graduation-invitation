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
    eventDate: "2026-03-01 19:00:00",

    // Ubicación
    location: {
      name: "Salón de Eventos Elegance",
      address: "Av. Principal 1234, Ciudad",
      mapsUrl: "https://maps.google.com/?q=Salon+de+Eventos", // Reemplaza con tu URL de Google Maps
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
