//Axios
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const apiUrl = 'https://monapi.com/chemin';  
//       const response = await axios.get(apiUrl);
//       setData(response.data);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading && <div>Chargement...</div>}
//       {error && <div>Erreur : {error.message}</div>}
//       {data && <div>Données : {JSON.stringify(data)}</div>}
//     </div>
//   );
// }

// export default App;

//Fetch
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const apiUrl = 'https://monapi.com/chemin';
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('La requête a échoué');
      }

      const responseData = await response.json();
      setData(responseData);
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