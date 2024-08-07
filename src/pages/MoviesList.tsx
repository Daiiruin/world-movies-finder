import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { movies$ } from "../data/Etude-de-cas-front-movies-data";
import { MovieTypes } from "../data/movies-types";
import "./MoviesList.scss";

export const MoviesList = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [showDetailsId, setShowDetailsId] = useState<string | null>(null);

  useEffect(() => {
    movies$
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, []);

  const handleShowDetails = (id: string) => {
    setShowDetailsId((prevId) => (prevId === id ? null : id));
  };

  const handleLike = (id: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          // Si déjà disliké
          if (movie.disliked) {
            return {
              ...movie,
              liked: true,
              disliked: false,
              likes: movie.likes + 1,
              dislikes: movie.dislikes - 1,
            };
          }
          // Si déjà liké
          if (movie.liked) {
            return {
              ...movie,
              liked: false,
              likes: movie.likes - 1,
            };
          }
          // Si rien n'est déjà liké ou disliké
          return {
            ...movie,
            liked: true,
            likes: movie.likes + 1,
          };
        }
        return movie;
      })
    );
  };

  const handleDislike = (id: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          // Si déjà liké
          if (movie.liked) {
            return {
              ...movie,
              liked: false,
              disliked: true,
              dislikes: movie.dislikes + 1,
              likes: movie.likes - 1,
            };
          }
          // Si déjà disliké
          if (movie.disliked) {
            return {
              ...movie,
              disliked: false,
              dislikes: movie.dislikes - 1,
            };
          }
          // Si rien n'est déjà liké ou disliké
          return {
            ...movie,
            disliked: true,
            dislikes: movie.dislikes + 1,
          };
        }
        return movie;
      })
    );
  };

  const handleDelete = (id: string) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          showDetailsId={showDetailsId}
          handleShowDetails={handleShowDetails}
          handleLike={handleLike}
          handleDislike={handleDislike}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};
