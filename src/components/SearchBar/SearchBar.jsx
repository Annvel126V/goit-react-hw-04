import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ onSearch }) => {
  return (
    <header className={s.searchbar}>
      <form
        className={s.form}
        onSubmit={(e) => {
          e.preventDefault();
          const form = e.target;
          const query = form.elements.query.value;
          if (form.elements.query.value.trim() === "") {
            toast.error("Enter a search query");
            return;
          }
          onSearch(query);
          form.reset();
        }}
      >
        <input
          name="query"
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className={s.button}>
          <IoSearchOutline />
        </button>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
