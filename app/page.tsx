import Link from "next/link";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import { 
  ArrowRight, 
  CreditCard, 
  FileText, 
  UserMinus, 
  Coffee, 
  Laptop, 
  ChevronDown, 
  CheckCircle, 
  ClipboardList, 
  Zap, 
  Gift, 
  BarChart3, 
  Lock, 
  Heart, 
  Rocket, 
  Flame,
  Truck,
  Star,
  TrendingUp,
  Handshake,
  ArrowRightCircle,
  Circle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 md:pt-40 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            {/* Left Column - Image */}
            <div className="w-full md:w-1/2 relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/relaxclient.jpg"
                alt="Barista creando latte art con BrewFi"
                fill
                className="object-cover"
                style={{ objectPosition: '50% 60%' }}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brewfi-dark/30 to-transparent" />
            </div>

            {/* Right Column - Text Content */}
            <div className="w-full md:w-1/2 flex flex-col gap-8">
              
              {/* H1 - Strong Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brewfi-green glow-text animate-glow leading-tight">
                Infraestructura de nivel empresarial a tu alcance.
              </h1>

              {/* Support Text */}
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Tecnología que impulsa a los negocios gastronómicos que quieren crecer.
              </p>

              {/* Bold Highlight */}
              <div className="p-6 bg-gradient-to-r from-brewfi-darkGray/50 via-brewfi-darkGray/70 to-brewfi-darkGray/50 rounded-xl border border-brewfi-green/30">
                <p className="text-xl md:text-2xl font-bold text-white glow-text-subtle">
                  Solo 25 negocios serán seleccionados para recibir un impulso de alto rendimiento.
                </p>
              </div>

              {/* CTA Button - Desktop */}
              <div className="hidden md:block">
                <Link 
                  href="/waitlist" 
                  className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5"
                >
                  <ArrowRight className="w-5 h-5" />
                  Únete a la Lista de Espera
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Sticky CTA - Mobile Only, Fixed Bottom */}
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-brewfi-dark via-brewfi-dark to-transparent md:hidden">
          <Link 
            href="/waitlist" 
            className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4 rounded-xl shadow-2xl"
          >
            <ArrowRight className="w-5 h-5" />
            Unirme a la lista de espera
          </Link>
        </div>
      </section>

      {/* Problem Section - El Problema */}
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text-subtle font-grotesk">
            Los sistemas de punto de venta antiguos te hacen perder dinero.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-dark">
              <div className="text-red-400 mb-4">
                <CreditCard className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Pagos lentos y costosos</h3>
              <p className="text-gray-400">Comisiones altas y tiempos de espera que frustran a tus clientes.</p>
            </div>

            <div className="card-dark">
              <div className="text-red-400 mb-4">
                <FileText className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Sin programa de fidelidad real</h3>
              <p className="text-gray-400">Tarjetas de papel que nadie usa y sistemas complicados que nadie entiende.</p>
            </div>

            <div className="card-dark">
              <div className="text-red-400 mb-4">
                <UserMinus className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Clientes que no regresan</h3>
              <p className="text-gray-400">Sin razones para volver, tus clientes se van a la competencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Section - El Guía */}
      <section>
        {/* Text Section */}
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-grotesk">
              Impulsamos el crecimiento de negocios gastronómicos.
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Con BrewFi, gestiona <span className="text-brewfi-green font-semibold">pagos</span>, <span className="text-brewfi-green font-semibold">facturación</span> y <span className="text-brewfi-green font-semibold">fidelización</span> desde una sola plataforma: más rápido, más simple y más rentable.
            </p>
          </div>
        </div>

        {/* Background Image Section - Below Text */}
        <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
          {/* Mobile Image - Coffee Mug with Latte Art */}
          <div className="md:hidden absolute inset-0">
            <Image
              src="/coffemug.jpeg"
              alt="Latte art BrewFi"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Desktop/Tablet Image - Original */}
          <div className="hidden md:block absolute inset-0">
            <Image
              src="/3.png"
              alt="Soluciones digitales para negocios"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-brewfi-dark/40 via-transparent to-transparent" />
        </div>
      </section>

      {/* Plan Section - El Plan */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-subtle font-grotesk flex items-center justify-center gap-3">
            <Rocket className="w-10 h-10 text-brewfi-green" />
            En 3 pasos simples:
          </h2>

          <div className="space-y-6 mb-12">
            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green flex-shrink-0">
                <Circle className="w-10 h-10 fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Conecta y empieza a vender
                </h3>
                <p className="text-gray-400 text-lg">
                  Configura tu punto de venta en minutos, sin contratos ni complicaciones.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green flex-shrink-0">
                <Circle className="w-10 h-10 fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Cobra como quieras
                </h3>
                <p className="text-gray-400 text-lg">
                  Acepta pagos con tarjeta, QR o USDT de forma rápida y segura.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green flex-shrink-0">
                <Circle className="w-10 h-10 fill-current" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Fideliza a tus clientes
                </h3>
                <p className="text-gray-400 text-lg">
                  Cada compra genera puntos digitales que se canjean por consumos o recompensas.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/waitlist" className="btn-secondary inline-flex items-center gap-2">
              <ClipboardList className="w-5 h-5" />
              Únete a la lista de espera
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="w-12 h-12" />}
            title="Pagos Instantáneos"
            description="Cobra en segundos con cualquier método de pago. Reduce filas y mejora la experiencia."
          />
          <FeatureCard
            icon={<BarChart3 className="w-12 h-12" />}
            title="Datos en Tiempo Real"
            description="Conoce a tus mejores clientes, horarios pico y productos favoritos."
          />
          <FeatureCard
            icon={<Truck className="w-12 h-12" />}
            title="Integración Uber Eats"
            description="Sincroniza tu menú y pedidos de delivery directamente con Uber Eats desde una sola plataforma."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12" />}
            title="Seguridad de Nivel Empresarial"
            description="Todas las transacciones protegidas con infraestructura de nivel enterprise. Transparente y verificable."
          />
          <FeatureCard
            icon={<Heart className="w-12 h-12" />}
            title="Comunidad Fiel"
            description="Tus clientes se convierten en embajadores de tu marca al regalar cafés."
          />
          <FeatureCard
            icon={<Rocket className="w-12 h-12" />}
            title="Fácil de Usar"
            description="Instalación rápida, sin conocimientos técnicos. Tu equipo aprende en minutos."
          />
        </div>
      </section>

      {/* Final CTA Section - Llamado a la Acción */}
      <section className="bg-brewfi-darkGray/50">
        {/* Text and Button Section */}
        <div className="section-container text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text font-grotesk">
              Ayudamos a quienes hacen grande a la comunidad.
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Solo 25 emprendimientos gastronómicos serán seleccionados para recibir tecnología utilizada por las grandes cadenas.
            </p>
            <Link href="/waitlist" className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5">
              <ArrowRight className="w-6 h-6" />
              Postula tu negocio hoy
            </Link>
          </div>
        </div>

        {/* Background Image Section - Below Text */}
        <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
          <Image
            src="/1.png"
            alt="BrewFi CTA banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brewfi-dark/40 via-transparent to-transparent" />
        </div>
      </section>
    </div>
  );
}
