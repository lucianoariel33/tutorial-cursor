import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Tutorial Completo: Cursor, GitHub y Vercel
        </h1>
        
        <div className="space-y-6">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">¿Qué aprenderás?</h2>
            <p className="text-gray-700 mb-4">
              Este tutorial te guiará paso a paso en el proceso de desarrollo web moderno, desde la configuración de tu entorno hasta el despliegue de tu aplicación.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/tutorials/cursor" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">1. Cursor IDE</h3>
                <p className="text-gray-600">Aprende a utilizar Cursor, el IDE moderno con IA integrada.</p>
              </div>
            </Link>

            <Link href="/tutorials/github" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">2. GitHub</h3>
                <p className="text-gray-600">Gestiona tu código con Git y GitHub de manera profesional.</p>
              </div>
            </Link>

            <Link href="/tutorials/vercel" className="block">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">3. Vercel</h3>
                <p className="text-gray-600">Despliega tu aplicación web de forma rápida y sencilla.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
