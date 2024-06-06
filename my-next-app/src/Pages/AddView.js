import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddView() {
  const router = useRouter();
  const [user, setUser] = useState('');
  const [interest, setInterest] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        user,
        interest: interest.split(',').map(item => item.trim()),
        age: parseInt(age),
        mobile: parseInt(mobile),
        email,
      };
      await axios.post('/api/users', newUser);
      router.push('/');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Add New User</h1>
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
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}
