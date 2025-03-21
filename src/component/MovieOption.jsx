export default function MovieOption({ movie, selected, onChange }) {
    return (
      <div className="mb-2">
        <input
          type="radio"
          name="movie"
          value={`${movie.title} (${movie.year})`}
          checked={selected === `${movie.title} (${movie.year})`}
          onChange={onChange}
        />
        <span className="ml-2 font-medium">{movie.title} ({movie.year})</span>
        <p className="text-sm text-gray-600">Director: {movie.director}</p>
      </div>
    );
  }
  