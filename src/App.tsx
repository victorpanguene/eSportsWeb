import { useEffect, useState } from 'react';
import logo from './assets//logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { PostAd } from './components/PostAd';
import './styles/main.css';

interface Games {
  id: string;
  titles: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data); 
      });
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto my-20 flex flex-col items-center">
      <img src={logo} alt="eSports Logo Image" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{' '}
        <span className="bg-textBackgroundImage text-transparent bg-clip-text">
          duo
        </span>{' '}
        está aqui!
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => {
          return (
            <CreateAdBanner
              key={game.id}
              title={game.titles}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          );
        })}
      </div>
      <PostAd />
    </div>
  );
}

export default App;
