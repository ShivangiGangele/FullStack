import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditView() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState('');
  const [interest, setInterest] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      axios.get(`/api/users/${id}`)
        .then(response => {
          setUser(response.data.user);
          setInterest(response.data.interest.join(', '));
          setAge(response.data.age);
          setMobile(response.data.mobile);
          setEmail(response.data.email);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        user,
        interest: interest.split(',').map(item => item.trim()),
        age: parseInt(age),
        mobile: parseInt(mobile),
        email,
      };
      await axios.put(`/api/users/${id}`, updatedUser);
      router.push(`/user/${id}`);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (!id) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
        <label>Interests (comma separated):</label>
        <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Mobile:</label>
        <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
