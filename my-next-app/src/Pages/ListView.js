import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

export default function ListView() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <Link href="/user/add">Add New User</Link>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/user/${user.id}`}>
              {user.user}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
