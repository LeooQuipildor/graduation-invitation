import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import LocationSection from "./components/LocationSection";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

function App() {
  // Configuración del evento - Personaliza estos valores
  const eventConfig = {
    // Fecha del evento (formato: YYYY-MM-DD HH:MM:SS)
    eventDate: "2026-03-15 19:00:00",

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
    <div className="min-h-screen">
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
  );
}

export default App;
