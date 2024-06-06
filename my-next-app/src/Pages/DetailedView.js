import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function DetailedView() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/users/${id}`)
        .then(response => setUser(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h1>{user.user}</h1>
      <p>Interests: {user.interest.join(', ')}</p>
      <p>Age: {user.age}</p>
      <p>Mobile: {user.mobile}</p>
      <p>Email: {user.email}</p>
      <Link href={`/user/edit?id=${user.id}`}>Edit</Link>
    </div>
  );
}
