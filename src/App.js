import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [posts, setPosts] = useState({ hits: [] });
  
    useEffect(() => {
      const fetchData = async () => {
        const { data } = await axios(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts({ hits: data });
      };
      fetchData();
    }, [setPosts]);
  
    return (
      <div>
        <ul>
          {posts.hits &&
            posts.hits.map(item => (
              <li key={item.id}>
                <span><h4>{item.title}</h4></span>
                <span><h5>{item.body}</h5></span>
              </li>
            ))}
        </ul>
      </div>
    );
  }

export default App;
