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
  Flame 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - El Héroe */}
      <section className="section-container pt-32 md:pt-40 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text font-grotesk animate-glow">
            Haz que tus clientes vuelvan, una taza a la vez.
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Tu cafetería puede unirse a la revolución del café con recompensas en cripto.
            <br />
            Únete a <span className="text-brewfi-green font-semibold">BrewFi</span> — la nueva forma de fidelizar clientes y aceptar pagos digitales.
          </p>
          <Link href="/waitlist" className="btn-primary inline-flex items-center gap-2">
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

          <div className="text-center">
            <p className="text-2xl md:text-3xl font-bold text-brewfi-green glow-text-subtle">
              Cada día que pasa sin lealtad digital, pierdes ingresos y comunidad.
            </p>
          </div>
        </div>
      </section>

      {/* Guide Section - El Guía */}
      <section className="section-container relative overflow-hidden min-h-[360px] md:min-h-[420px]">
        {/* Background image for "Somos baristas digitales" */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/3.png"
            alt="Baristas digitales"
            fill
            className="object-cover md:object-contain opacity-30 md:opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-brewfi-dark/40" />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text-subtle font-grotesk flex items-center justify-center gap-3">
            Somos baristas digitales 
            <Coffee className="w-10 h-10 inline" />
            <Laptop className="w-10 h-10 inline" />
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            En BrewFi, somos desarrolladores Web3 con experiencia real en crear soluciones para el mundo físico.
            <br /><br />
            Creamos un sistema que combina <span className="text-brewfi-green font-semibold">pagos rápidos</span>, <span className="text-brewfi-green font-semibold">recompensas en tokens</span>, y <span className="text-brewfi-green font-semibold">datos de lealtad</span> para ayudarte a crecer.
          </p>
        </div>
      </section>

      {/* Plan Section - El Plan */}
      <section className="section-container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text-subtle font-grotesk flex items-center justify-center gap-3">
            Así funciona BrewFi 
            <ChevronDown className="w-10 h-10" />
          </h2>

          <div className="space-y-6 mb-12">
            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Instala un POS moderno
                </h3>
                <p className="text-gray-400 text-lg">
                  Terminal de pagos fácil de usar, sin contratos largos ni costos ocultos.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Acepta pagos con tarjeta, QR o cripto
                </h3>
                <p className="text-gray-400 text-lg">
                  Dale opciones a tus clientes: tarjetas tradicionales, códigos QR o criptomonedas.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Tus clientes ganan $BREWFI tokens con cada compra
                </h3>
                <p className="text-gray-400 text-lg">
                  Cada café genera recompensas automáticas. Es como un programa de puntos, pero en blockchain.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Canjean sus tokens por café gratis o envían cafés a amigos
                </h3>
                <p className="text-gray-400 text-lg">
                  Tus clientes pueden usar sus tokens para bebidas gratis o regalar café. Marketing viral automático.
                </p>
              </div>
            </div>

            <div className="card-dark flex items-start space-x-4 transform hover:scale-102 transition-transform">
              <div className="text-brewfi-green">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brewfi-green mb-2">
                  Tú ves métricas reales de ventas y retención
                </h3>
                <p className="text-gray-400 text-lg">
                  Dashboard intuitivo con datos de tus mejores clientes, horarios pico y productos favoritos.
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

      {/* Transformation Section - La Transformación */}
      <section className="section-container bg-gradient-to-b from-brewfi-darkGray/50 to-brewfi-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 glow-text font-grotesk">
            Convierte tu cafetería en una comunidad.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            BrewFi hace que tus clientes vuelvan una y otra vez.
            <br />
            Cada compra crea una conexión, y cada token fortalece tu marca.
          </p>

          <div className="relative py-12">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <Coffee className="w-48 h-48" />
            </div>
            <blockquote className="relative text-3xl md:text-4xl font-bold text-brewfi-green italic glow-text-subtle">
              &ldquo;Deja de vender café.
              <br />
              Comienza a crear comunidad.&rdquo;
            </blockquote>
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
            icon={<Gift className="w-12 h-12" />}
            title="Recompensas Automáticas"
            description="Cada compra genera tokens. Sin tarjetas, sin complicaciones. Todo digital."
          />
          <FeatureCard
            icon={<BarChart3 className="w-12 h-12" />}
            title="Datos en Tiempo Real"
            description="Conoce a tus mejores clientes, horarios pico y productos favoritos."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12" />}
            title="Seguridad Blockchain"
            description="Todas las transacciones protegidas por la red Avalanche. Transparente y verificable."
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
          <div className="absolute inset-0 hidden">
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
            Solo las primeras 50 cafeterías tendrán acceso prioritario
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            No te quedes fuera.
          </p>
          <Link href="/waitlist" className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5">
            <Flame className="w-6 h-6" />
            Unirme a la lista de espera
          </Link>
        </div>
      </section>
    </div>
  );
}
