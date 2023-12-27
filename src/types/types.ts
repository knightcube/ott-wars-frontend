export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
}

export interface Quiz {
  questions: Question[];
}

export interface Movie {
  id: number;
  title: string;
  image_path: string;
  quiz: Quiz;
}

export interface MovieData {
  movies: Movie[];
}
