function EventDetail({ evento, volver, favoritos, addFavorito }) {
  const esFavorito = favoritos.find(e => e.id === evento.id);

  return (
    <div className={`detail ${evento.categoria.toLowerCase()}`}>
      <h2>{evento.titulo}</h2>
      <p><strong>Categoría:</strong> {evento.categoria}</p>
      <p><strong>Fecha:</strong> {evento.fecha}</p>
      <p><strong>Lugar:</strong> {evento.lugar}</p>
      <p>{evento.descripcion}</p>

      <div className="detail__buttons">
      <button
        onClick={() => addFavorito(evento)}
        disabled={esFavorito}
      >
        {esFavorito ? "En favoritos" : "Añadir a favoritos"}
      </button>
      <button onClick={volver}>Volver</button>
      </div>

    </div>
  );
}

export default EventDetail;
