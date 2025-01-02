"use client"; // Asegura que el código se ejecute en el cliente, para React

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-4 w-full fixed bottom-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Texto "Contacto" alineado a la izquierda */}
        <div className="text-lg font-semibold">
          Contacto
        </div>

        {/* Información de contacto alineada a la derecha */}
        <div className="flex space-x-6">
          <a
            href="tel:+123456789"
            className="text-lg font-medium hover:underline"
          >
            +123 456 789
          </a>
          <a
            href="mailto:contacto@ejemplo.com"
            className="text-lg font-medium hover:underline"
          >
            contacto@ejemplo.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
