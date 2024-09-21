import toast from "react-hot-toast";
import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.elements.query.value;
    if (!query) {
      toast.error("Field shouldn't be empty", { position: "top-right" });
      return;
    }
    onSearch(query);
    event.target.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <IoSearchOutline size={20} />
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
