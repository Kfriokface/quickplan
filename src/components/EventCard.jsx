function EventCard({ evento, setEventoActivo }) {
  return (
    <div className="card">
      <h3>{evento.titulo}</h3>
      <p>{evento.categoria} | {evento.fecha}</p>
      <p>{evento.lugar}</p>
      <button onClick={() => setEventoActivo(evento)}>
        Ver detalle
      </button>
    </div>
  );
}

export default EventCard;
