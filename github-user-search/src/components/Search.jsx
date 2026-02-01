import { useState } from "react";
import { fetchUserData  } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = async (e, newPage = 1) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
        page: newPage,
      });

      setUsers(newPage === 1 ? data.items : [...users, ...data.items]);
      setPage(newPage);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Search Form */}
      <form
        onSubmit={(e) => handleSearch(e)}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <input
          className="w-full border p-2 rounded"
          placeholder="GitHub username or keyword"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Location (e.g. Ghana)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          className="w-full border p-2 rounded"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
        >
          Search
        </button>
      </form>

      {/* States */}
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{user.login}</h3>
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-600 text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      {users.length > 0 && !loading && (
        <button
          onClick={(e) => handleSearch(e, page + 1)}
          className="mt-6 w-full border py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default Search;
