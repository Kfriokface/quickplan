import { useState } from "react";
import EventCard from "./EventCard";

function EventList({ eventos, setEventoActivo }) {
    const [texto, setTexto] = useState("");
    const [categoria, setCategoria] = useState("");

    const filtrados = eventos.filter(e =>
        (e.titulo.toLowerCase().includes(texto.toLowerCase()) ||
            e.lugar.toLowerCase().includes(texto.toLowerCase())) &&
        (categoria === "" || e.categoria === categoria)
    );

    return (
        <>
            <div className="filters">
                <input
                    className="search"
                    placeholder="Buscar por título o lugar"
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
                />

                <select
                    className="select"
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="Charla">Charla</option>
                    <option value="Taller">Taller</option>
                    <option value="Torneo">Torneo</option>
                    <option value="Excursión">Excursión</option>
                </select>
            </div>

            <p className="counter">
            Mostrando {filtrados.length} de {eventos.length} eventos
            </p>

            <div className="event-grid">
                {filtrados.map(evento => (
                    <EventCard
                    key={evento.id}
                    evento={evento}
                    setEventoActivo={setEventoActivo}
                    />
                ))}
            </div>

        </>

    );
}

export default EventList;
