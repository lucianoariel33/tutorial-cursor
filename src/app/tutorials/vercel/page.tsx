export default function VercelTutorial() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Tutorial de Vercel
        </h1>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">¿Qué es Vercel?</h2>
            <p className="text-gray-700 mb-4">
              Vercel es una plataforma de despliegue y hosting que hace que sea increíblemente fácil desplegar aplicaciones web modernas. Es especialmente buena para proyectos Next.js, React, Vue y otros frameworks modernos.
            </p>
            <a 
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Crear cuenta en Vercel →
            </a>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Configuración inicial</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Crear una cuenta:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Ve a vercel.com</li>
                  <li>Haz clic en "Sign Up"</li>
                  <li>Inicia sesión con tu cuenta de GitHub</li>
                </ul>
              </li>
              <li>
                <strong>Instalar Vercel CLI (opcional):</strong>
                <pre className="bg-gray-100 p-2 rounded mt-2">
                  npm install -g vercel
                </pre>
              </li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Desplegar tu primera aplicación</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Método 1 - Desde GitHub:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Conecta tu cuenta de GitHub con Vercel</li>
                  <li>Selecciona el repositorio que quieres desplegar</li>
                  <li>Configura las variables de entorno si es necesario</li>
                  <li>Haz clic en "Deploy"</li>
                </ul>
              </li>
              <li>
                <strong>Método 2 - Desde la línea de comandos:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-2">
                  vercel login
                  vercel
                </pre>
              </li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Características principales</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Despliegue automático con cada push a GitHub</li>
              <li>Previews automáticas para pull requests</li>
              <li>Dominios personalizados</li>
              <li>SSL automático</li>
              <li>Analíticas y monitoreo</li>
              <li>Variables de entorno seguras</li>
            </ul>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Consejos para el despliegue</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Asegúrate de que tu proyecto tenga un archivo package.json válido</li>
              <li>Configura correctamente los scripts de build en package.json</li>
              <li>Usa .env.local para variables de entorno locales</li>
              <li>Configura las variables de entorno en el dashboard de Vercel</li>
              <li>Revisa los logs de despliegue si algo falla</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 