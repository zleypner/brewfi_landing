# ☕ BrewFi Landing Page

Landing page moderna para **BrewFi** - Sistema de pagos digitales en USDT y recompensas para cafeterías.

## 🎨 Características

- ✨ Diseño moderno con efectos de glow en neon verde (#00FFB2)
- 📱 Completamente responsive (mobile & desktop)
- ⚡ Next.js 15 con App Router
- 🎯 Framework StoryBrand 2.0 para máxima conversión
- 💚 Animaciones sutiles y transiciones suaves
- 🌐 100% en Español

## 🚀 Comenzar

### Instalación

```bash
npm install
# o
yarn install
# o
pnpm install
```

### Desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
brewfi_landing/
├── app/
│   ├── page.tsx           # Landing principal
│   ├── waitlist/
│   │   └── page.tsx       # Formulario de lista de espera
│   ├── layout.tsx         # Layout raíz
│   └── globals.css        # Estilos globales y efectos neon
├── components/
│   ├── Navbar.tsx         # Navegación con logo y CTA
│   ├── Footer.tsx         # Footer con branding
│   └── FeatureCard.tsx    # Tarjeta reutilizable de features
└── tailwind.config.ts     # Configuración de Tailwind con colores custom
```

## 🎨 Colores de Marca

- **Neon Green**: `#00FFB2` - Color principal de marca
- **Dark Background**: `#0A0A0A` - Fondo principal
- **Dark Gray**: `#1A1A1A` - Elementos secundarios

## 📖 Secciones de la Landing

1. **Héroe** - Propuesta de valor principal
2. **Problema** - Dolor del cliente (POS antiguos)
3. **Guía** - Quiénes somos (baristas digitales)
4. **Plan** - Cómo funciona (5 pasos)
5. **Transformación** - Visión de futuro (comunidad)
6. **Features** - 6 características clave
7. **CTA Final** - Llamado a la acción urgente

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS
- **Language**: TypeScript
- **Fonts**: Inter & Space Grotesk
- **Infrastructure**: Enterprise-Grade Digital Infrastructure

## 📝 Próximos Pasos

Para conectar el formulario a un backend real:

1. Crear API endpoint en `/app/api/waitlist/route.ts`
2. Integrar con servicio de email (Resend, SendGrid, etc.)
3. Guardar datos en base de datos (Supabase, MongoDB, etc.)
4. Agregar validación de servidor

## 🔗 Enlaces

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS](https://tailwindcss.com)
- [Avalanche](https://avax.network)

---

**© 2025 BrewFi** - Construido sobre Avalanche ☄️
