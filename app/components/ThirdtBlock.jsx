const ThirdBlock = () => {
  return (
    <div className="w-full bg-[#F7F7F7] py-12">
      {/* Primer diseño: video a la izquierda y texto a la derecha */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        {/* Video a la izquierda */}
        <div className="w-full h-[356.5px] px-4 md:px-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
            title="Video GPT Personalizado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto a la derecha */}
        <div className="ml-20 text-left space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">GPT Personalizado</h2>
          <p className="text-lg text-gray-700 w-72">
            Automatizá y optimizá procesos clave para ahorrar tiempo.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="#"
            className="w-full max-w-[320px] h-[40px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubrí cómo podés automatizarlo
          </a>
        </div>
      </div>

      {/* Segundo diseño: video a la derecha y texto a la izquierda */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-8 px-4">
        {/* Texto a la izquierda */}
        <div className="text-left space-y-4 mx-auto">
          <h2 className="text-4xl font-bold text-gray-800">Entrega Sorprendente</h2>
          <p className="text-lg text-gray-700 w-72">
            Impresioná con un sistema de entrega automatizado y único.
          </p>

          {/* Botón debajo del texto */}
          <a
            href="#"
            className="w-full max-w-[320px] h-[40px] bg-[#222222] text-white text-sm font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
          >
            Descubrí cómo podés automatizarlo
          </a>
        </div>

        {/* Video a la derecha */}
        <div className="w-full h-[356.5px] px-4 md:px-8">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
            title="Video GPT Personalizado"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;







