import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Welcome to My Simple React Website!');

  return (
    <div className="p-6 max-w-2xl mx-auto text-center">
      <h1 className="text-2xl font-bold mb-4">{message}</h1>
      <p>This is a barebones React project ready for deployment.</p>
    </div>
  );
}
