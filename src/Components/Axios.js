import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = 'https://monapi.com/chemin';  // Remplacez par votre URL d'API
      const response = await axios.get(apiUrl);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Chargement...</div>}
      {error && <div>Erreur : {error.message}</div>}
      {data && <div>Données : {JSON.stringify(data)}</div>}
    </div>
  );
}

export default App;
