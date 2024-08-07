import { FC } from "react";
import { MovieTypes } from "../../data/movies-types";
import { icons } from "../../icons";
import "./MovieCard.scss";

type MovieCardProps = {
  movie: MovieTypes;
  showDetailsId: string | null;
  handleShowDetails: (id: string) => void;
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
  handleDelete: (id: string) => void;
};

export const MovieCard: FC<MovieCardProps> = ({
  movie,
  showDetailsId,
  handleShowDetails,
  handleLike,
  handleDislike,
  handleDelete,
}) => {
  const totalVotes = movie.likes + movie.dislikes;
  const likePercentage =
    totalVotes === 0 ? 0 : (movie.likes / totalVotes) * 100;

  return (
    <div className="movie-container" key={movie.id}>
      <button className="delete-button" onClick={() => handleDelete(movie.id)}>
        <img src={icons.deleteIcon} alt="delete" />
      </button>
      <img
        className="movie-image"
        src={movie.imageUrl}
        alt={movie.title}
        onClick={() => handleShowDetails(movie.id)}
      />
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-category">{movie.category}</p>
      <div className="jauge-container">
        <button className="movie-like" onClick={() => handleLike(movie.id)}>
          <img src={movie.liked ? icons.likeFilled : icons.like} />
          {movie.likes}
        </button>
        <div className="jauge-like-dislike">
          <div className="jauge-like" style={{ width: `${likePercentage}%` }} />
        </div>
        <button
          className="movie-dislike"
          onClick={() => handleDislike(movie.id)}
        >
          <img src={movie.disliked ? icons.dislikeFilled : icons.dislike} />
          {movie.dislikes}
        </button>
      </div>
      <div
        className="description-detail"
        style={{ display: showDetailsId === movie.id ? "block" : "none" }}
        onClick={() => handleShowDetails(movie.id)}
      >
        <p className="movie-description">
          <span>Synopsis : </span>
          {movie.description}
        </p>
        <div className="movie-detail">
          <img src={icons.date} />
          <span>{movie.releaseDate}</span>
          <img src={icons.time} />
          <span>{movie.duration}</span>
        </div>
      </div>
    </div>
  );
};
