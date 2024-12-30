const FirstBlock = () => {
    return (
      <div className="flex flex-col items-center justify-center  p-4">
        {/* Titulo centrado */}
        <h1 className="text-[72px] font-bold text-center mb-8" style={{ color: '#001122' }}>
          ¡Gracias por confiar!
        </h1>
  
        {/* Primer Video embebido */}
        <div className="mb-8">
          <iframe
            className="rounded-xl"
            width="800"
            height="450"
            src="https://www.youtube.com/embed/tu_video_aqui" // Reemplaza con tu URL de video
            title="Video de agradecimiento"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
  
        {/* Párrafo explicativo */}
        <p className="text-center text-lg text-gray-700 max-w-64 mx-auto leading-relaxed">
          Te explicamos cómo funciona nuestro servicio y cómo personalizarlo con opciones exclusivas para ti.
        </p>
  
        {/* Botón "Accede al drive personalizado" */}
        <a
          href="#"  // Aquí puedes colocar el enlace al "Drive personalizado" u otra URL
          className="mt-6 w-[564px] h-[45px] bg-[#222222] text-white text-lg font-semibold rounded-xl flex items-center justify-center hover:bg-zinc-700 transition-colors duration-300"
        >
          Accede al drive personalizado
        </a>
      </div>
    );
  };
  
  export default FirstBlock;