function Favorites({ favoritos, removeFavorito }) {
  if (favoritos.length === 0) return null;

  return (
    <div className="favorites">
      <h3>Favoritos</h3>
      <ul>
        {favoritos.map(e => (
          <li key={e.id}>
            {e.titulo}
            <button onClick={() => removeFavorito(e.id)}>Quitar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
