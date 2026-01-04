# QuickPlan – Agenda Web de Eventos

Aplicación web desarrollada en **React + Vite** para consultar y organizar los eventos del centro educativo (charlas, talleres, torneos y excursiones).

Los eventos se cargan desde un archivo JSON local y la aplicación permite buscar, filtrar, ver el detalle y marcar eventos como favoritos.

---

## 🛠 Tecnologías usadas

- React
- Vite
- JavaScript
- CSS

---

## 📂 Estructura del proyecto

- Datos cargados desde `eventos.json` (sin backend)
- Componentes React para separar la lógica:
  - Lista de eventos
  - Detalle de evento
  - Favoritos
  - Filtros de búsqueda

---

## ⚙️ Funcionalidades

- Listado de eventos en tarjetas
- Buscador por título o lugar
- Filtro por categoría
- Contador de eventos mostrados
- Vista de detalle del evento
- Sistema de favoritos
- Simulación de carga de datos
- Mensaje de error si no se cargan los eventos

---

## ▶️ Cómo ejecutar el proyecto

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en modo desarrollo:

```
npm run dev
```

3. Abrir en el navegador la URL que muestra la terminal (normalmente http://localhost:5173).