import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import logo from './assets//logo.svg';
import { GameBanner } from './components/GameBanner';
import { PostAd } from './components/PostAd';
import './styles/main.css';
import { GameController } from 'phosphor-react';
import { Input } from './components/Form/Input';

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
            <GameBanner
              key={game.id}
              title={game.titles}
              adsCount={game._count.ads}
              bannerUrl={game.bannerUrl}
            />
          );
        })}
      </div>

      <Dialog.Root>
        <PostAd />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/50 inset-0 fixed" />
          <Dialog.Content className="bg-[#2A2634] fixed py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="font-black text-3xl">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input placeholder="Selecione o game que deseja jogar" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (Ou nickname)</label>
                <Input placeholder="Como te chamam dentro do game?" />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga ha quantos anos?</label>
                  <Input
                    type="number"
                    name="yearsPlaying"
                    id="yearsPlaying"
                    placeholder="Tudo bem ser ZERO"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual é o seu discord?</label>
                  <Input
                    name="discord"
                    id="discord"
                    placeholder="Usuario#000"
                  />
                </div>
              </div>

              <div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-1">
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Segunda"
                      >
                        S
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Terça"
                      >
                        T
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Sexta"
                      >
                        S
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Sábado"
                      >
                        S
                      </button>
                      <button
                        className="bg-zinc-900 rounded h-8 w-8"
                        title="Domingo"
                      >
                        D
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hoursStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input type="time" id="hoursStart" placeholder="De" />
                      <Input type="time" id="hoursEnd" placeholder="Até" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-2 flex gap-2 text-sm">
                <Input type="checkbox" /> Costumo me connectar ao chat de voz
              </div>

              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type='button'
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold items-center hover:bg-zinc-600">
                  Cancelar
                </Dialog.Close>
                <button
                  className="bg-violet-500 flex gap-3 h-12 px-5 rounded-md font-semibold items-center hover:bg-violet-600"
                  type="submit"
                >
                  <GameController /> Encontar DUO
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;
