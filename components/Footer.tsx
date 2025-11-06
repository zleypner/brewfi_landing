import Link from "next/link";
import Image from "next/image";
import { Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brewfi-darkGray border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Enterprise-Grade Section */}
        <div className="mb-12 relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brewfi-green/10 to-transparent blur-xl"></div>
          <div className="relative p-6 bg-brewfi-dark/70 rounded-xl border border-brewfi-green/30 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Lock className="w-6 h-6 text-brewfi-green" />
              <h3 className="text-xl font-bold text-brewfi-green">Enterprise-Grade Digital Infrastructure</h3>
            </div>
            <p className="text-center text-gray-300 text-sm">
              Respaldado por Organizaciones de Prestigio
            </p>
          </div>
        </div>
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
              <li>
                <a href="mailto:info@brewfi.com" className="hover:text-brewfi-green transition-colors">
                  info@brewfi.com
                </a>
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
