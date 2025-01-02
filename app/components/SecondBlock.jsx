const SecondBlock = () => {
  return (
    <div className="mt-8 w-full max-w-full">
      <div className="relative w-full h-[600px]">
        {/* Imagen en lugar de video */}
        <img
          className="w-full h-full object-cover absolute top-0 left-0"
          src="https://res.cloudinary.com/dytpump6i/image/upload/v1735768655/FB_ylck5l.png" // Reemplaza con la URL de tu imagen
          alt="Imagen personalizada"
        />
  
        {/* Contenido centrado sobre la imagen */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white space-y-4 z-10 bg-black bg-opacity-25 px-6 py-4 rounded-lg">
          <h2 className="text-4xl font-bold text-shadow-lg">Personaliza tu experiencia</h2>
          <p className="text-lg max-w-lg mx-auto w-72">
            Agregá los toppings que mejor se adapten a tus necesidades y potenciá tus resultados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;

