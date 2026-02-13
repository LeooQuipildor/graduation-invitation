import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Mail } from "lucide-react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    guests: "0",
    guestNames: {},
    dietary: "",
    song: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      let updatedGuestNames = prev.guestNames;

      // Si se reduce el número de invitados, limpiar los nombres sobrantes
      if (name === "guests") {
        const count = parseInt(value, 10);
        const newNames = {};
        for (let i = 0; i < count; i++) {
          if (prev.guestNames[i]) {
            newNames[i] = prev.guestNames[i];
          }
        }
        updatedGuestNames = newNames;
      }

      return {
        ...prev,
        [name]: value,
        guestNames: name === "guests" ? updatedGuestNames : prev.guestNames,
      };
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleGuestNameChange = (index, value) => {
    setFormData((prev) => ({
      ...prev,
      guestNames: {
        ...prev.guestNames,
        [index]: value,
      },
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Por favor ingresa tu nombre";
    }

    if (!formData.attending) {
      newErrors.attending = "Por favor indica si asistirás";
    }

    if (formData.attending === "yes" && !formData.song.trim()) {
      newErrors.song = "¡No olvides tu canción favorita!";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // URL del Google Apps Script (Sigue las instrucciones en GOOGLE_SHEETS_SETUP.md para obtenerla)
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbwexXga4mNoBh_izJMaMO_YRgVprTTA5N2agYG1PWzAUBdrogZflIXvmsxxciKlTOCjXw/exec";

    setIsSending(true);

    const formDataToSend = new FormData();
    formDataToSend.append("Fecha", new Date().toLocaleString());
    formDataToSend.append("Nombre", formData.name);
    // Si asiste, se marca "Sí", si no "No"
    const isAttending = formData.attending === "yes";
    formDataToSend.append("Asistencia", isAttending ? "Sí" : "No");

    // Total de invitados seleccionados (ej: 0, 1, 2)
    const guestsCount = parseInt(formData.guests) || 0;
    formDataToSend.append("Invitados", guestsCount);

    // Calcular TotalAsistentes: 1 (quien llena el form) + invitados extra (si asiste)
    // Si no asiste, total es 0
    const totalAttendees = isAttending ? 1 + guestsCount : 0;
    formDataToSend.append("TotalAsistentes", totalAttendees);

    // Convert guest names object to string
    const guestNamesString = Object.values(formData.guestNames)
      .filter(Boolean)
      .join(", ");
    formDataToSend.append("NombresInvitados", guestNamesString);

    formDataToSend.append("Dieta", formData.dietary);
    formDataToSend.append("Cancion", formData.song);

    fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formDataToSend,
      mode: "no-cors", // Important for Google Apps Script simple POSTs
    })
      .then(() => {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            attending: "",
            guests: "1",
            guestNames: {},
            dietary: "",
            song: "",
          });
        }, 3000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        alert(
          "Hubo un error al enviar el formulario. Por favor intenta de nuevo.",
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  if (isSubmitted) {
    return (
      <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden min-h-[60vh]">
        {/* Fondo Texturizado - SIN CAMBIOS */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/background-countdown.webp"
            alt="Fondo Textura"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 text-center shadow-xl rounded-sm border border-gray-100 tablet:p-16 lg:p-10"
          >
            <h3 className="font-script text-4xl text-[#5a6c5a] mb-4 tablet:text-5xl">
              ¡Confirmación Recibida!
            </h3>
            <p className="font-serif text-gray-600 text-lg tablet:text-xl">
              Gracias por confirmar tu asistencia. <br />
              ¡Nos vemos en la celebración!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full min-h-svh pt-0 pb-20 px-4 flex flex-col items-center justify-center overflow-hidden">
      {/* Fondo Texturizado - SIN CAMBIOS */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/background-countdown.webp"
          alt="Fondo Textura"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
        {/* Encabezado de Sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 tablet:mb-16 lg:mb-10"
        >
          <h2 className="font-script text-5xl text-gold-engraved mb-2 drop-shadow-sm mobile-s:text-4xl mobile-m:text-5xl mobile-l:text-5xl tablet:text-5xl lg:text-5xl">
            Confirma asistencia
          </h2>
          <p className="font-serif text-gray-500 text-lg italic max-w-2xl px-4 mobile-s:text-sm mobile-m:text-xl mobile-l:text-xl tablet:text-2xl lg:text-lg mobile-m:px-0 mobile-l:px-0 tablet:px-8 lg:px-4">
            Sería un honor contar con tu presencia en esta noche tan especial.
          </p>
        </motion.div>

        {/* Tarjeta del Formulario */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white w-full max-w-lg card-strong-shadow rounded-sm p-4 tablet:max-w-xl lg:max-w-lg"
        >
          <div className="border border-gray-400 p-6 tablet:p-12 lg:p-8">
            {/* Icono Decorativo */}
            <div className="text-[#7f8c6c] mb-6 flex justify-center tablet:mb-10 lg:mb-6">
              <Mail
                size={40}
                strokeWidth={1.5}
                className="mobile-m:w-20 mobile-m:h-20 mobile-l:w-20 mobile-l:h-20 tablet:w-24 tablet:h-24 lg:w-16 lg:h-16"
              />
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 tablet:space-y-10 lg:space-y-6"
            >
              {/* Nombre */}
              <div>
                <label className="block font-serif text-[#8B7E60] uppercase tracking-widest text-sm mb-2 mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-sm tablet:mb-3">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#E8E6E1] border-none  px-4 py-2 font-serif text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#8B7E60] outline-none transition-all tablet:py-4 tablet:text-lg lg:text-base lg:py-2.5"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-serif italic tablet:text-sm">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Asistencia */}
              <div>
                <label className="block font-serif text-[#8B7E60] uppercase tracking-widest text-sm mb-3 mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-sm tablet:mb-4 lg:mb-2">
                  ¿Asistirás al evento?
                </label>
                <div className="flex items-center gap-6 tablet:gap-10 lg:gap-8">
                  <label className="flex items-center cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={handleChange}
                      className="accent-[#5a6c5a] w-4 h-4 cursor-pointer tablet:w-6 tablet:h-6 lg:w-4 lg:h-4"
                    />
                    <span className="font-serif text-gray-600 text-sm mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-base">
                      ¡Sí, claro!
                    </span>
                  </label>

                  <label className="flex items-center cursor-pointer gap-2">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={handleChange}
                      className="accent-[#5a6c5a] w-4 h-4 cursor-pointer tablet:w-6 tablet:h-6 lg:w-4 lg:h-4"
                    />
                    <span className="font-serif text-gray-600 text-sm mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-base">
                      No asistiré
                    </span>
                  </label>
                </div>
                {errors.attending && (
                  <p className="text-red-500 text-xs mt-1 font-serif italic tablet:text-sm">
                    {errors.attending}
                  </p>
                )}
              </div>

              {/* Acompañantes y Dieta */}
              {formData.attending === "yes" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="space-y-6 tablet:space-y-10 lg:space-y-6"
                >
                  <div>
                    <label className="block font-serif text-[#8B7E60] uppercase tracking-widest text-sm mb-2 mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-sm tablet:mb-3">
                      Numero de acompañantes (Máx 4)
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-[#E8E6E1] border-none rounded-md px-3 py-2 font-serif text-gray-700 focus:ring-1 focus:ring-[#8B7E60] outline-none mb-3 tablet:py-4 tablet:text-lg lg:text-base lg:py-2.5"
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>

                    {parseInt(formData.guests) > 0 && (
                      <div className="space-y-3 pl-4 border-l-2 border-[#8B7E60]/30 tablet:space-y-5 lg:space-y-3">
                        {Array.from({ length: parseInt(formData.guests) }).map(
                          (_, index) => (
                            <input
                              key={index}
                              type="text"
                              placeholder={`Nombre Acompañante ${index + 1}`}
                              value={formData.guestNames[index] || ""}
                              onChange={(e) =>
                                handleGuestNameChange(index, e.target.value)
                              }
                              className="w-full bg-[#E8E6E1] border-none rounded-md px-4 py-2 font-serif text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#8B7E60] outline-none text-sm mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-base tablet:py-4 lg:py-2.5"
                            />
                          ),
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block font-serif text-[#8B7E60] uppercase tracking-widest text-sm mb-2 mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-sm tablet:mb-3">
                      Restricciones alimenticias
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      value={formData.dietary}
                      onChange={handleChange}
                      placeholder="Opcional"
                      className="w-full bg-[#E8E6E1] border-none px-4 py-2 font-serif text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#8B7E60] outline-none tablet:py-4 tablet:text-lg lg:text-base lg:py-2.5"
                    />
                  </div>

                  <div>
                    <label className="block font-serif text-[#8B7E60] uppercase tracking-widest text-sm mb-2 mobile-m:text-lg mobile-l:text-lg tablet:text-xl lg:text-sm tablet:mb-3">
                      ¿Qué canción no puede faltar en la fiesta?
                    </label>
                    <input
                      type="text"
                      name="song"
                      value={formData.song}
                      onChange={handleChange}
                      placeholder="Canción"
                      className="w-full bg-[#E8E6E1] border-none px-4 py-2 font-serif text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-[#8B7E60] outline-none tablet:py-4 tablet:text-lg lg:text-base lg:py-2.5"
                    />
                    {errors.song && (
                      <p className="text-red-500 text-xs mt-1 font-serif italic tablet:text-sm">
                        {errors.song}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Botón */}
              <div className="pt-4 flex justify-center tablet:pt-8 lg:pt-4">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`bg-[#7f8c6c] text-white font-serif font-bold text-sm px-12 py-3 hover:bg-[#6c7a5a] transition-colors uppercase tracking-[0.2em] shadow-md rounded-none tablet:text-lg lg:text-base tablet:px-20 lg:px-16 tablet:py-5 lg:py-3.5 ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
                >
                  {isSending ? "Enviando..." : "Enviar"}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;
