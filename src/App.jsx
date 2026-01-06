import "./App.css";

import { useEffect, useState } from "react";
import eventosData from "./data/eventos.json";
import EventList from "./components/EventList";
import EventDetail from "./components/EventDetail";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";

function App() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [eventoActivo, setEventoActivo] = useState(null);
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (!eventosData || eventosData.length === 0) {
        setError("No se pudieron cargar los eventos");
      } else {
        setEventos(eventosData);
      }
      setCargando(false);
    }, 3000);
  }, []);

  const addFavorito = (evento) => {
    if (!favoritos.find(e => e.id === evento.id)) {
      setFavoritos([...favoritos, evento]);
    }
  };

  const removeFavorito = (id) => {
    setFavoritos(favoritos.filter(e => e.id !== id));
  };

  if (cargando) return <p className="msg loading">Cargando…</p>;
  if (error) return <p className="msg error">{error}</p>;

  return (
    <div className="app">

      <h1>Agenda de eventos</h1>

      {eventoActivo ? (
        <EventDetail
          evento={eventoActivo}
          volver={() => setEventoActivo(null)}
          favoritos={favoritos}
          addFavorito={addFavorito}
        />
      ) : (
        <>
          <Favorites favoritos={favoritos} removeFavorito={removeFavorito} />
          <EventList
            eventos={eventos}
            setEventoActivo={setEventoActivo}
          />
        </>
      )}

      <Footer />

    </div>
  );
}

export default App;
