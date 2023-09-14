import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const apiUrl = '';

    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <div>
      {error && <div>Erreur : {error.message}</div>}
      {data ? <div>Données : {JSON.stringify(data)}</div> : <div>Chargement...</div>}
    </div>
  );
}

export default App;
