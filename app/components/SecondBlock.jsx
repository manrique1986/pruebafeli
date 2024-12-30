const SecondBlock = () => {
    return (
      <div className="mt-8 w-full max-w-full">
        <div className="relative w-full h-[600px]">
          <iframe
            className="w-full h-full absolute top-0 left-0"
            src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
            title="Personaliza tu experiencia"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
  
          {/* Contenido centrado sobre el video */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4">
            <h2 className="text-4xl font-bold">Personaliza tu experiencia</h2>
            <p className="text-lg max-w-lg mx-auto w-72 z-0">
              Agregá los toppings que mejor se adapten a tus necesidades y potenciá tus resultados.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default SecondBlock;