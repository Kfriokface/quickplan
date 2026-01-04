function EventDetail({ evento, volver, favoritos, addFavorito }) {
  const esFavorito = favoritos.find(e => e.id === evento.id);

  const volverYSubir = () => {
    volver();
    window.scrollTo(0, 0);
  };


  return (
    <div className="detail">
      <h2>{evento.titulo}</h2>
      <p><strong>Categoría:</strong> {evento.categoria}</p>
      <p><strong>Fecha:</strong> {evento.fecha}</p>
      <p><strong>Lugar:</strong> {evento.lugar}</p>
      <p>{evento.descripcion}</p>

      <button
        onClick={() => addFavorito(evento)}
        disabled={esFavorito}
      >
        {esFavorito ? "En favoritos" : "Añadir a favoritos"}
      </button>

      <br /><br />
      <button onClick={volverYSubir}>Volver</button>

    </div>
  );
}

export default EventDetail;
