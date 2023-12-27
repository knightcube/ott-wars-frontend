import { FC } from "react";
import { dummyDataString } from "../utils/dummyData";
import { Movie, MovieData } from "../types/types";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const quizData: MovieData = JSON.parse(dummyDataString);
  const navigate = useNavigate();

  function navigateQuiz(movie: Movie): void {
    navigate(`/quiz/${movie.id}`, {state:movie.quiz});
  }

  return (
    <div>
      <h1>OTT Wars</h1>
      {quizData.movies.map((movie) => {
        return (
          <div key={movie.id}>
            <button 
              onClick={() => {
                return navigateQuiz(movie);
              }}
            >
              {movie.title}
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
