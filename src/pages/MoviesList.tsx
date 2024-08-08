import { useEffect, useState } from "react";
import Select from "react-select";
import { MovieCard } from "../components/MovieCard/MovieCard";
import { movies$ } from "../data/Etude-de-cas-front-movies-data";
import { MovieTypes } from "../data/movies-types";
import { icons } from "../icons";
import "./MoviesList.scss";

export const MoviesList = () => {
  const [movies, setMovies] = useState<MovieTypes[]>([]);
  const [showDetailsId, setShowDetailsId] = useState<string | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);

  useEffect(() => {
    movies$
      .then((movies) => {
        setMovies(movies);
        const allCategories = Array.from(
          new Set(movies.map((movie) => movie.category))
        );
        setCategories(allCategories);
      })
      .catch((error) => {
        console.error("Failed to fetch movies:", error);
      });
  }, []);

  const updateCategories = (movies: MovieTypes[]) => {
    const allCategories = Array.from(
      new Set(movies.map((movie) => movie.category))
    );
    setCategories(allCategories);
  };

  const filteredMovies =
    selectedCategories.length > 0
      ? movies.filter((movie) => selectedCategories.includes(movie.category))
      : movies;

  const indexOfLastMovie = currentPage * itemsPerPage;
  const indexOfFirstMovie = indexOfLastMovie - itemsPerPage;
  const currentMovies = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);

  const handleShowDetails = (id: string) => {
    setShowDetailsId((prevId) => (prevId === id ? null : id));
  };

  const handleLike = (id: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => {
        if (movie.id === id) {
          if (movie.disliked) {
            return {
              ...movie,
              liked: true,
              disliked: false,
              likes: movie.likes + 1,
              dislikes: movie.dislikes - 1,
            };
          }
          if (movie.liked) {
            return {
              ...movie,
              liked: false,
              likes: movie.likes - 1,
            };
          }
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
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.map((movie) => {
        if (movie.id === id) {
          if (movie.liked) {
            return {
              ...movie,
              liked: false,
              disliked: true,
              dislikes: movie.dislikes + 1,
              likes: movie.likes - 1,
            };
          }
          if (movie.disliked) {
            return {
              ...movie,
              disliked: false,
              dislikes: movie.dislikes - 1,
            };
          }
          return {
            ...movie,
            disliked: true,
            dislikes: movie.dislikes + 1,
          };
        }
        return movie;
      });
      updateCategories(updatedMovies);
      return updatedMovies;
    });
  };

  const handleDelete = (id: string) => {
    setMovies((prevMovies) => {
      const updatedMovies = prevMovies.filter((movie) => movie.id !== id);
      updateCategories(updatedMovies);
      return updatedMovies;
    });
  };

  const handleCategoryChange = (selectedOptions: any) => {
    setSelectedCategories(selectedOptions.map((option: any) => option.value));
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
    }),
    menu: (provided: any) => ({
      ...provided,
      zIndex: 2,
    }),
  };

  return (
    <div className="movies-list-container">
      <div className="filter-container">
        <h1 className="logo">WMF</h1>
        {/* Sélection des catégories */}
        <Select
          isMulti
          options={categories.map((category) => ({
            value: category,
            label: category,
          }))}
          onChange={handleCategoryChange}
          className="category-select"
          classNamePrefix="category-select"
          placeholder="Catégories"
          styles={customStyles}
        />

        {/* Nombre de films par page */}
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Nombre de film : </label>
          <select
            id="itemsPerPage"
            onChange={handleItemsPerPageChange}
            value={itemsPerPage}
          >
            <option value={4}>4</option>
            <option value={8}>8</option>
            <option value={12}>12</option>
          </select>
        </div>
      </div>

      {/* Liste des films */}
      <div className="movies-container">
        {currentMovies.map((movie) => (
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

      {/* Pagination  */}
      <div className="pagination">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <img src={icons.arrowLeft} />
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <img src={icons.arrowRight} />
        </button>
      </div>
    </div>
  );
};
