let users = [
    { id: 1, user: 'Harry', interest: ['Comics', 'Sports'], age: 22, mobile: 4234243224, email: 'harry@potter.com' },
    // Add more users if needed
  ];

  
export default function handler(req, res) {
    const { id } = req.query;
    const userIndex = users.findIndex(user => user.id == id);
  
    if (userIndex === -1) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    if (req.method === 'GET') {
      res.status(200).json(users[userIndex]);
    } else if (req.method === 'PUT') {
      users[userIndex] = { ...users[userIndex], ...req.body };
      res.status(200).json(users[userIndex]);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }