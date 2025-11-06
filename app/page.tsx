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
  ArrowRightCircle
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - El Héroe */}
      <section className="section-container pt-32 md:pt-40 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Mission Statement with Improved Hierarchy */}
          <div className="space-y-8 md:space-y-12 mb-12">
            {/* H2 - Section Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brewfi-green glow-text animate-glow leading-tight">
              Infraestructura de nivel empresarial para quienes hacen grande a la industria.
            </h1>

            {/* Body Text - Mission Statement */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed" style={{ lineHeight: '1.8' }}>
              Nuestra infraestructura digital está diseñada para grandes franquicias y cadenas hoteleras. 
              Pero también sabemos que los pequeños y medianos negocios gastronómicos merecen acceso a herramientas de primer nivel para competir y prosperar.
            </p>

            {/* Body Text - Call to Action */}
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed" style={{ lineHeight: '1.8' }}>
              Por eso, vamos a seleccionar <strong className="text-brewfi-green font-bold">25 negocios</strong> que recibirán un impulso real para crecer con tecnología de alto rendimiento.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-center p-4 bg-brewfi-darkGray/30 rounded-lg border border-brewfi-green/10 hover:border-brewfi-green/30 transition-all">
              <p className="text-brewfi-green font-semibold text-sm">Pagos en USDT</p>
            </div>
            <div className="text-center p-4 bg-brewfi-darkGray/30 rounded-lg border border-brewfi-green/10 hover:border-brewfi-green/30 transition-all">
              <p className="text-brewfi-green font-semibold text-sm">Ordenar y pagar en la mesa</p>
            </div>
            <div className="text-center p-4 bg-brewfi-darkGray/30 rounded-lg border border-brewfi-green/10 hover:border-brewfi-green/30 transition-all">
              <p className="text-brewfi-green font-semibold text-sm">Programas de fidelidad</p>
            </div>
            <div className="text-center p-4 bg-brewfi-darkGray/30 rounded-lg border border-brewfi-green/10 hover:border-brewfi-green/30 transition-all">
              <p className="text-brewfi-green font-semibold text-sm">Integración Uber Eats</p>
            </div>
          </div>
          
          <Link href="/waitlist" className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5">
            <ArrowRight className="w-5 h-5" />
            Únete a la Lista de Espera
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
      <section className="section-container relative overflow-hidden min-h-[360px] md:min-h-[420px]">
        {/* Background image for guide section */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/3.png"
            alt="Soluciones digitales para negocios"
            fill
            className="object-cover md:object-contain opacity-30 md:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-brewfi-dark/40" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-grotesk">
            Impulsamos el crecimiento de negocios gastronómicos.
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Con BrewFi, gestiona <span className="text-brewfi-green font-semibold">pagos</span>, <span className="text-brewfi-green font-semibold">facturación</span> y <span className="text-brewfi-green font-semibold">fidelización</span> desde una sola plataforma: más rápido, más simple y más rentable.
          </p>
        </div>
      </section>

      {/* Plan Section - El Plan */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-subtle font-grotesk flex items-center justify-center gap-3">
            🚀 En 3 pasos simples:
          </h2>

          <div className="space-y-6 mb-12">
            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green text-3xl font-bold">
                1️⃣
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
              <div className="text-brewfi-green text-3xl font-bold">
                2️⃣
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
              <div className="text-brewfi-green text-3xl font-bold">
                3️⃣
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
      <section className="section-container bg-brewfi-darkGray/50 text-center relative overflow-hidden min-h-[360px] md:min-h-[420px]">
        {/* Background banner image for CTA (preserves 1608x608 ratio) */}
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/1.png"
              alt="BrewFi CTA banner"
              fill
              className="object-contain opacity-40"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-brewfi-dark/60 via-brewfi-dark/40 to-brewfi-dark/60" />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text font-grotesk">
            Ayudamos a quienes hacen grande a la comunidad.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Solo 25 emprendimientos gastronómicos serán seleccionados para recibir tecnología utilizada por las grandes cadenas.
          </p>
          <Link href="/waitlist" className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5">
            <Heart className="w-6 h-6" />
            Postula tu negocio hoy
          </Link>
        </div>
      </section>
    </div>
  );
}
