import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "",
    guests: "1",
    dietary: "",
    song: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
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

    // Here you would typically send the data to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        attending: "",
        guests: "1",
        dietary: "",
        song: "",
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-effect rounded-3xl p-12 text-center card-shadow"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            </motion.div>
            <h3 className="font-serif text-3xl font-bold text-gradient mb-4">
              ¡Confirmación Recibida!
            </h3>
            <p className="text-gray-600 text-lg">
              Gracias por confirmar tu asistencia. ¡Nos vemos en la celebración!
              🎉
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient mb-4">
            Confirmación de Asistencia
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Por favor confirma tu asistencia para que podamos preparar todo con
            cariño
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="glass-effect rounded-3xl p-8 md:p-10 card-shadow space-y-6"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border-2 ${
                errors.name ? "border-red-400" : "border-gray-200"
              } focus:border-primary-500 focus:outline-none transition-colors bg-white/50`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Attending */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              ¿Confirmas tu asistencia? *
            </label>
            <div className="flex gap-4">
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="yes"
                  checked={formData.attending === "yes"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="cursor-pointer px-6 py-3 rounded-xl border-2 border-gray-200 peer-checked:border-primary-500 peer-checked:bg-primary-50 transition-all text-center font-medium hover:border-primary-300">
                  ✅ Sí, asistiré
                </div>
              </label>
              <label className="flex-1">
                <input
                  type="radio"
                  name="attending"
                  value="no"
                  checked={formData.attending === "no"}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="cursor-pointer px-6 py-3 rounded-xl border-2 border-gray-200 peer-checked:border-gray-400 peer-checked:bg-gray-50 transition-all text-center font-medium hover:border-gray-300">
                  ❌ No podré asistir
                </div>
              </label>
            </div>
            {errors.attending && (
              <p className="text-red-500 text-sm mt-1">{errors.attending}</p>
            )}
          </div>

          {/* Guests - only show if attending */}
          {formData.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <label
                htmlFor="guests"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Cantidad de personas
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white/50 cursor-pointer"
              >
                <option value="1">1 persona</option>
                <option value="2">2 personas</option>
              </select>
            </motion.div>
          )}

          {/* Dietary restrictions - only show if attending */}
          {formData.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label
                htmlFor="dietary"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Restricciones alimenticias
              </label>
              <input
                type="text"
                id="dietary"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors bg-white/50"
                placeholder="Vegetariano, vegano, alergias, etc. (opcional)"
              />
            </motion.div>
          )}

          {/* Song - only show if attending */}
          {formData.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label
                htmlFor="song"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                ¿Qué canción no puede faltar para que bailes? 🎵 *
              </label>
              <input
                type="text"
                id="song"
                name="song"
                value={formData.song}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border-2 ${
                  errors.song ? "border-red-400" : "border-gray-200"
                } focus:border-primary-500 focus:outline-none transition-colors bg-white/50`}
                placeholder="Nombre de la canción y artista"
              />
              {errors.song && (
                <p className="text-red-500 text-sm mt-1">{errors.song}</p>
              )}
            </motion.div>
          )}

          {/* Submit button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-pink-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
          >
            <span>Enviar Confirmación</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <p className="text-xs text-gray-500 text-center mt-4">
            * Campos obligatorios
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPForm;
