# 🎓 Invitación Digital de Graduación - Contadora Pública

Una invitación digital interactiva, moderna y elegante para celebrar tu graduación como Contadora Pública.

## ✨ Características

- **Diseño Profesional y Elegante**: Estética minimalista con toques lujosos
- **Totalmente Responsive**: Mobile-first design con Tailwind CSS
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Cuenta Regresiva en Tiempo Real**: Contador dinámico hasta el día del evento
- **Formulario RSVP Funcional**: Con validación y manejo de estados
- **Sección de Ubicación**: Con enlace directo a Google Maps
- **SEO Optimizado**: Meta tags y estructura semántica

## 🚀 Tecnologías Utilizadas

- **React 18** con Hooks
- **Vite** para bundling ultra-rápido
- **Tailwind CSS** para estilos modernos
- **Framer Motion** para animaciones fluidas
- **Lucide React** para iconos elegantes

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## ⚙️ Personalización

### 1. Configuración del Evento

Edita el archivo `src/App.jsx` para personalizar los detalles de tu evento:

```javascript
const eventConfig = {
  // Fecha del evento (formato: YYYY-MM-DD HH:MM:SS)
  eventDate: "2026-03-15 19:00:00",

  // Ubicación
  location: {
    name: "Salón de Eventos Elegance",
    address: "Av. Principal 1234, Ciudad",
    mapsUrl: "https://maps.google.com/?q=Tu+Ubicacion",
  },

  // Tus iniciales para el footer
  initials: "CP",
};
```

### 2. Colores y Estilos

Los colores principales se pueden modificar en `tailwind.config.js`:

- **Primary**: Tonos púrpura/rosa para elementos principales
- **Gold**: Tonos dorados para acentos elegantes

### 3. Textos y Mensajes

Puedes editar los textos directamente en cada componente:

- `src/components/HeroSection.jsx` - Mensaje principal
- `src/components/Countdown.jsx` - Subtítulo de la cuenta regresiva
- `src/components/LocationSection.jsx` - Descripción del lugar
- `src/components/Footer.jsx` - Mensaje de cierre

### 4. Formulario RSVP

El formulario en `src/components/RSVPForm.jsx` captura:

- Nombre completo
- Confirmación de asistencia (Sí/No)
- Cantidad de personas (1 o 2)
- Restricciones alimenticias
- Canción favorita para bailar

**Nota**: Actualmente el formulario muestra los datos en la consola. Para guardar las respuestas, necesitarás conectarlo a un backend o servicio como:

- Google Forms
- Formspree
- EmailJS
- Tu propio backend API

## 📱 Estructura de Componentes

```
src/
├── components/
│   ├── HeroSection.jsx      # Sección de bienvenida
│   ├── Countdown.jsx         # Cuenta regresiva
│   ├── LocationSection.jsx   # Ubicación del evento
│   ├── RSVPForm.jsx          # Formulario de confirmación
│   └── Footer.jsx            # Pie de página
├── App.jsx                   # Componente principal
├── index.css                 # Estilos globales
└── main.jsx                  # Punto de entrada
```

## 🎨 Paleta de Colores

- **Primary (Púrpura)**: `#d946ef` - `#701a75`
- **Gold (Dorado)**: `#fde047` - `#713f12`
- **Backgrounds**: Gradientes suaves de slate, purple y pink

## 📝 Notas Importantes

1. **Fecha del Evento**: Asegúrate de configurar la fecha correcta en formato `YYYY-MM-DD HH:MM:SS`
2. **Google Maps**: Obtén el enlace correcto de Google Maps para tu ubicación
3. **Responsive**: La aplicación está optimizada para todos los dispositivos
4. **Animaciones**: Las animaciones se activan al hacer scroll (viewport triggers)

## 🌐 Deployment

Puedes desplegar esta aplicación en:

- **Vercel**: `npm run build` y conecta tu repositorio
- **Netlify**: Arrastra la carpeta `dist` después de hacer build
- **GitHub Pages**: Usa `gh-pages` para deployment automático

## 📄 Licencia

Este proyecto es de uso personal para tu evento de graduación.

---

**¡Felicidades por tu graduación como Contadora Pública! 🎓✨**
