"use client";

import { useState } from "react";
import Link from "next/link";

export default function WaitlistPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cafeName: "",
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Waitlist signup:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center section-container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-8 animate-bounce">✅</div>
          <h1 className="text-5xl font-bold mb-6 glow-text font-grotesk">
            ¡Bienvenido a BrewFi! ☕
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Gracias por unirte a la lista de espera, <span className="text-brewfi-green font-semibold">{formData.name}</span>.
            <br /><br />
            Te contactaremos pronto con más información sobre cómo llevar tu cafetería <span className="text-brewfi-green font-semibold">{formData.cafeName}</span> al futuro.
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">
              Revisa tu email <span className="text-brewfi-green">{formData.email}</span> para confirmar tu registro.
            </p>
            <Link href="/" className="btn-secondary inline-block">
              ← Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 glow-text font-grotesk">
              Únete a la Revolución ☕🚀
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Completa el formulario y sé una de las primeras 100 cafeterías en acceder a BrewFi.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="card-dark space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brewfi-green mb-2">
                Tu Nombre *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-brewfi-dark border border-gray-700 rounded-lg px-4 py-3 text-white
                          focus:outline-none focus:border-brewfi-green focus:ring-2 focus:ring-brewfi-green/50
                          transition-all duration-300"
                placeholder="Juan Pérez"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brewfi-green mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-brewfi-dark border border-gray-700 rounded-lg px-4 py-3 text-white
                          focus:outline-none focus:border-brewfi-green focus:ring-2 focus:ring-brewfi-green/50
                          transition-all duration-300"
                placeholder="juan@tucafe.com"
              />
            </div>

            {/* Cafe Name */}
            <div>
              <label htmlFor="cafeName" className="block text-sm font-semibold text-brewfi-green mb-2">
                Nombre de tu Cafetería *
              </label>
              <input
                type="text"
                id="cafeName"
                name="cafeName"
                required
                value={formData.cafeName}
                onChange={handleChange}
                className="w-full bg-brewfi-dark border border-gray-700 rounded-lg px-4 py-3 text-white
                          focus:outline-none focus:border-brewfi-green focus:ring-2 focus:ring-brewfi-green/50
                          transition-all duration-300"
                placeholder="Café del Centro"
              />
            </div>

            {/* City */}
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-brewfi-green mb-2">
                Ciudad *
              </label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className="w-full bg-brewfi-dark border border-gray-700 rounded-lg px-4 py-3 text-white
                          focus:outline-none focus:border-brewfi-green focus:ring-2 focus:ring-brewfi-green/50
                          transition-all duration-300"
                placeholder="Ciudad de México"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Enviando..." : "🔥 Unirme a la Lista de Espera"}
            </button>

            {/* Privacy Notice */}
            <p className="text-sm text-gray-500 text-center">
              Al enviar este formulario, aceptas que BrewFi se ponga en contacto contigo sobre nuestros servicios.
            </p>
          </form>

          {/* Benefits Reminder */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <p className="text-sm text-gray-400">Acceso prioritario</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💰</div>
              <p className="text-sm text-gray-400">Precios especiales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <p className="text-sm text-gray-400">Capacitación gratuita</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
