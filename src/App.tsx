import './styles/main.css';
import logo from './assets//logo.svg';
import { CreateAdBanner } from './components/CreateAdBanner';
import { PostAd } from './components/PostAd';


function App() {
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
        <CreateAdBanner title='Title of testing' adsCount={3} bannerUrl="/game-1.png"/>
      </div>
      <PostAd/>
    </div>
  );
}

export default App;


