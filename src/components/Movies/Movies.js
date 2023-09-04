import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { cardList } from "../../utils/cardList"; // Временное решение для теста вёрстки

function Movies() {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList cardList={cardList} />
    </main>
  );
}

export default Movies;
