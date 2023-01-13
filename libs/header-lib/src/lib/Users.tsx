import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

async function getUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json());
}

type User = {
  id: number;
  name: string;
};

const Users = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, []);


  return (
    <div className="users">
      {loading && <strong>Loading...</strong>}
      {users.length > 0 && (
        <ul>
          {users.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      )}

      {!loading && <Link to="/">Home</Link>}
    </div>
  );
};

export default Users;
