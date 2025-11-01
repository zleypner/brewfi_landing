import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brewfi-darkGray border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Image 
              src="/logo.svg" 
              alt="BrewFi Logo" 
              width={120} 
              height={50}
            />
            <p className="text-gray-400 text-sm">
              La nueva forma de fidelizar clientes y aceptar pagos digitales en tu cafetería.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-brewfi-green font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-brewfi-green transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:text-brewfi-green transition-colors">
                  Lista de Espera
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-brewfi-green font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <span>Construido sobre</span>
                <span className="text-brewfi-green">Avalanche ☄️</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BrewFi. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
