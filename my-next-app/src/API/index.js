let users = [
    { id: 1, user: 'Harry', interest: ['Comics', 'Sports'], age: 22, mobile: 4234243224, email: 'harry@potter.com' },
    // Add more users if needed
  ];
  
  export default function handler(req, res) {
    if (req.method === 'GET') {
      res.status(200).json(users);
    } else if (req.method === 'POST') {
      const newUser = { id: Date.now(), ...req.body };
      users.push(newUser);
      res.status(201).json(newUser);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  

  