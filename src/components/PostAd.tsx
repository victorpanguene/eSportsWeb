import { MagnifyingGlassPlus } from 'phosphor-react';

export function PostAd() {
  return (
    <div className="pt-1 bg-textBackgroundImage self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-6 flex itens-center justify-between">
        <div>
          <strong className="text-white block text-2xl font-black">
            Não encontrou o seu Dou
          </strong>
          <span className="text-zinc-400">
            Publique um anuncio para encontrar novos players
          </span>
        </div>
        <button className="px-3 py-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex item-center gap-3">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </button>
      </div>
    </div>
  );
}
