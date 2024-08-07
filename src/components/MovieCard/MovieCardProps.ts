import { MovieTypes } from "../../data/movies-types";

export type MovieCardProps = {
  movie: MovieTypes;
  showDetailsId: string | null;
  handleShowDetails: (id: string) => void;
  handleLike: (id: string) => void;
  handleDislike: (id: string) => void;
};
