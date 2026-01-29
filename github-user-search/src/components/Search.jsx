import { useState } from 'react';
import githubApi from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      let query = '';
      if (username) query += `${username} in:login `;
      if (location) query += `location:${location} `;
      if (minRepos) query += `repos:>=${minRepos} `;

      const res = await githubApi.get(`/search/users?q=${encodeURIComponent(query)}`);
      setUsers(res.data.items || []);
    } catch (err) {
      setError('Looks like we can’t find users matching that criteria.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded shadow">
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Min Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-700">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <ul className="mt-4 space-y-3">
        {users.map((user) => (
          <li key={user.id} className="p-3 border rounded flex items-center gap-4">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600">
                View Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;