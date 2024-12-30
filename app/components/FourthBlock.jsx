const FourthBlock = () => {
    return (
      <div className="w-full px-24">
        {/* Primer video con título y párrafo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mt-8">
          {/* Video a la izquierda */}
          <div className="w-full flex ml-10 justify-center">
            <iframe
              className="w-[450px] h-[420px] rounded-lg" // Video más grande
              src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
              title="Consultoría 1 a 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="ml-10 text-left space-y-4 mt-8"> {/* Agregué mt-8 aquí para el margen superior */}
            <h2 className="text-5xl font-extrabold text-gray-800">Consultoría 1 a 1</h2> {/* Título más grande y más grueso */}
            <p className="text-2xl text-gray-700 w-72"> {/* Párrafo más grande */}
              Sesiones personalizadas para ajustar y planificar estrategias.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="#"
                className="w-[300px] h-[50px] bg-[#222222] text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300" // Botón más grande y texto más legible
              >
                Conoce aun mas
              </a>
            </div>
          </div>
        </div>
  
        {/* Segundo video con título y párrafo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 mt-36">
          {/* Video a la izquierda */}
          <div className="w-full flex justify-center ml-10">
            <iframe
              className="w-[450px] h-[420px] rounded-lg" // Video más grande
              src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
              title="Consultoría 1 a 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
  
          {/* Título y párrafo a la derecha */}
          <div className="ml-10 text-left space-y-4 mt-8"> {/* Agregué mt-8 aquí para el margen superior */}
            <h2 className="text-5xl font-extrabold text-gray-800">Seguimiento extendido</h2> {/* Título más grande y más grueso */}
            <p className="text-2xl text-gray-700 w-72"> {/* Párrafo más grande */}
              Optimización y métricas continuas para resultados sostenibles.
            </p>
  
            {/* Botón debajo del párrafo */}
            <div className="flex justify-start">
              <a
                href="#"
                className="w-[360px] h-[50px] bg-[#222222] text-white text-lg font-semibold rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300" // Botón más grande y texto más legible
              >
                Por cuanto tiempo es el seguimiento?
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FourthBlock;
  
  
  
  
  
  