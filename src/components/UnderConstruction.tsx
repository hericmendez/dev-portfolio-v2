import Gandalf from '@/assets/images/gandalf_pixel.png' 


export default function UnderConstruction() {
  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <div className="rpgui-container framed-golden max-w-xl border-4 p-6 mt-10">
        <h1 className="text-3xl font-bold mb-4 text-yellow-300 font-mono">
          ✨ A Página Ainda Está Sendo Conjurada...
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          O mago do front-end está canalizando seus feitiços em React. Volte mais tarde para testemunhar a revelação completa!
        </p>
        <img
          src={Gandalf}
          alt="Mago conjurando feitiço"
          className="w-100 mx-auto mb-4"
        />
        <p className="text-sm text-gray-500 italic">
          *Alguns componentes ainda estão em estado etéreo...*
        </p>
      </div>
    </div>
  );
}
