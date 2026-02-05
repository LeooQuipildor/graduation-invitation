# 🎨 Guía de Personalización Completa

Esta guía te ayudará a personalizar cada aspecto de tu invitación digital de graduación.

## 📋 Índice

1. [Configuración Básica](#configuración-básica)
2. [Personalización de Textos](#personalización-de-textos)
3. [Cambiar Colores](#cambiar-colores)
4. [Configurar Google Maps](#configurar-google-maps)
5. [Conectar el Formulario](#conectar-el-formulario)
6. [Agregar Imágenes](#agregar-imágenes)

---

## Configuración Básica

### 1. Fecha del Evento

Abre `src/App.jsx` y busca esta línea:

```javascript
eventDate: '2026-03-15 19:00:00',
```

**Formato**: `YYYY-MM-DD HH:MM:SS`

- `YYYY`: Año (4 dígitos)
- `MM`: Mes (01-12)
- `DD`: Día (01-31)
- `HH`: Hora en formato 24h (00-23)
- `MM`: Minutos (00-59)
- `SS`: Segundos (00-59)

**Ejemplos**:

- 15 de marzo de 2026 a las 7:00 PM → `'2026-03-15 19:00:00'`
- 20 de junio de 2026 a las 8:30 PM → `'2026-06-20 20:30:00'`
- 1 de diciembre de 2026 a las 6:00 PM → `'2026-12-01 18:00:00'`

### 2. Ubicación del Evento

En el mismo archivo `src/App.jsx`:

```javascript
location: {
  name: 'Salón de Eventos Elegance',      // Nombre del lugar
  address: 'Av. Principal 1234, Ciudad',  // Dirección completa
  mapsUrl: 'https://maps.google.com/?q=Salon+de+Eventos',
},
```

### 3. Tus Iniciales

```javascript
initials: 'CP',  // Cambia por tus iniciales (2-3 letras)
```

---

## Personalización de Textos

### Hero Section (Sección Principal)

Abre `src/components/HeroSection.jsx` y busca estas líneas:

```jsx
<span className="block text-gradient">Acompáñame a celebrar</span>
<span className="block mt-2 text-gradient-gold">que oficialmente soy</span>
<span className="block mt-2 text-primary-900">Contadora Pública</span>
```

**Puedes cambiar**:

- El mensaje de celebración
- El título de tu profesión
- El subtítulo descriptivo

### Countdown (Cuenta Regresiva)

Abre `src/components/Countdown.jsx`:

```jsx
<h2>Cuenta Atrás</h2>
<p>El esfuerzo valió la pena, ahora solo falta el brindis</p>
```

### Location Section (Ubicación)

Abre `src/components/LocationSection.jsx`:

```jsx
<h2>Donde celebramos</h2>
<p>El lugar donde los desvelos por fin se convierten en brindis</p>
```

### Footer

Abre `src/components/Footer.jsx`:

```jsx
<p>Gracias por ser parte de este momento especial</p>
<p>"El éxito es la suma de pequeños esfuerzos repetidos día tras día"</p>
```

---

## Cambiar Colores

### Paleta de Colores Actual

Los colores se definen en `tailwind.config.js`:

**Primary (Púrpura/Rosa)**:

- `primary-500`: `#d946ef` (Principal)
- `primary-600`: `#c026d3` (Más oscuro)
- `primary-700`: `#a21caf` (Aún más oscuro)

**Gold (Dorado)**:

- `gold-400`: `#facc15` (Claro)
- `gold-500`: `#eab308` (Principal)
- `gold-600`: `#ca8a04` (Más oscuro)

### Cómo Cambiar los Colores

1. Abre `tailwind.config.js`
2. Busca la sección `colors`
3. Modifica los valores hexadecimales

**Ejemplo**: Para cambiar a azul y verde:

```javascript
colors: {
  primary: {
    500: '#3b82f6',  // Azul
    600: '#2563eb',
    700: '#1d4ed8',
  },
  gold: {
    400: '#34d399',  // Verde
    500: '#10b981',
    600: '#059669',
  },
},
```

### Generadores de Paletas de Colores

- [Coolors.co](https://coolors.co/)
- [Adobe Color](https://color.adobe.com/)
- [Tailwind Color Generator](https://uicolors.app/create)

---

## Configurar Google Maps

### Paso a Paso

1. **Abre Google Maps** en tu navegador
2. **Busca la ubicación** de tu evento
3. **Click en "Compartir"** (botón azul)
4. **Copia el enlace** que aparece
5. **Pega el enlace** en `src/App.jsx`:

```javascript
mapsUrl: 'TU_ENLACE_AQUI',
```

**Ejemplo de enlace**:

```
https://www.google.com/maps/place/Salon+de+Eventos/@-34.603722,-58.381592,17z
```

### Alternativa: Coordenadas

También puedes usar coordenadas:

```javascript
mapsUrl: 'https://www.google.com/maps?q=-34.603722,-58.381592',
```

---

## Conectar el Formulario

Actualmente, el formulario solo muestra los datos en la consola del navegador. Para guardar las respuestas reales, tienes varias opciones:

### Opción 1: Formspree (Recomendado - Gratis)

1. **Regístrate** en [Formspree.io](https://formspree.io/)
2. **Crea un nuevo formulario**
3. **Copia el endpoint** (algo como `https://formspree.io/f/xyzabc123`)
4. **Modifica** `src/components/RSVPForm.jsx`:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = validate();
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  // Enviar a Formspree
  try {
    const response = await fetch("https://formspree.io/f/TU_ID_AQUI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setIsSubmitted(true);
      // Reset form después de 3 segundos
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
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Hubo un error al enviar el formulario. Por favor intenta de nuevo.");
  }
};
```

### Opción 2: EmailJS

1. **Regístrate** en [EmailJS.com](https://www.emailjs.com/)
2. **Configura** tu servicio de email
3. **Instala** EmailJS: `npm install @emailjs/browser`
4. **Sigue** la documentación de EmailJS

### Opción 3: Google Forms

1. **Crea** un Google Form con los mismos campos
2. **Obtén** el enlace del formulario
3. **Reemplaza** el componente RSVPForm con un iframe:

```jsx
<iframe
  src="TU_ENLACE_DE_GOOGLE_FORM"
  width="100%"
  height="800"
  frameborder="0"
>
  Cargando...
</iframe>
```

---

## Agregar Imágenes

### Agregar una Foto Tuya

1. **Guarda tu foto** en `public/images/` (crea la carpeta si no existe)
2. **Abre** `src/components/HeroSection.jsx`
3. **Agrega** el elemento de imagen:

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  className="mt-12"
>
  <img
    src="/images/tu-foto.jpg"
    alt="Graduación"
    className="w-48 h-48 md:w-64 md:h-64 rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
  />
</motion.div>
```

### Agregar Imagen de Fondo

En `src/components/HeroSection.jsx`, dentro del `<section>`:

```jsx
<div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage: "url(/images/fondo.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>
```

---

## 🚀 Consejos Finales

1. **Prueba en diferentes dispositivos**: Móvil, tablet y desktop
2. **Verifica la fecha**: Asegúrate de que la cuenta regresiva funcione
3. **Prueba el enlace de Maps**: Haz click para verificar que lleve al lugar correcto
4. **Revisa el formulario**: Complétalo tú misma para verificar que funcione
5. **Comparte con amigos cercanos primero**: Para obtener feedback antes del envío masivo

---

## ❓ Preguntas Frecuentes

**P: ¿Cómo cambio las fuentes?**
R: Edita `src/index.css` y cambia las fuentes de Google Fonts en el `@import`.

**P: ¿Puedo agregar más secciones?**
R: Sí, crea nuevos componentes en `src/components/` y agrégalos en `App.jsx`.

**P: ¿Cómo hago que el formulario envíe emails?**
R: Sigue la sección "Conectar el Formulario" arriba.

**P: ¿Puedo usar mi propio dominio?**
R: Sí, después de hacer `npm run build`, puedes subir la carpeta `dist` a cualquier hosting.

---

**¡Felicidades por tu graduación! 🎓✨**
