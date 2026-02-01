import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!searchValue) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const userData = await fetchUserData(searchValue);
      setUser(userData);
    } catch (error) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search GitHub users..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width="150" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank">
            View GitHub Profile
          </a>
        </div>
      )}
    </>
  );
};
export default Search;
