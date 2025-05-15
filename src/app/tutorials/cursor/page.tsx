export default function CursorTutorial() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Tutorial de Cursor IDE
        </h1>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">¿Qué es Cursor?</h2>
            <p className="text-gray-700 mb-4">
              Cursor es un IDE moderno que integra inteligencia artificial para ayudarte a escribir código más rápido y eficientemente.
            </p>
            <a 
              href="https://cursor.sh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Descargar Cursor →
            </a>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Pasos para comenzar</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Instalación:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Descarga Cursor desde cursor.sh</li>
                  <li>Ejecuta el instalador</li>
                  <li>Sigue las instrucciones de instalación</li>
                </ul>
              </li>
              <li>
                <strong>Primera configuración:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Abre Cursor por primera vez</li>
                  <li>Inicia sesión con tu cuenta de GitHub</li>
                  <li>Configura tus preferencias de editor</li>
                </ul>
              </li>
              <li>
                <strong>Características principales:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Asistente de IA integrado (Cmd/Ctrl + K)</li>
                  <li>Autocompletado inteligente</li>
                  <li>Integración con Git</li>
                  <li>Terminal integrada</li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Trucos y consejos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Usa Cmd/Ctrl + P para buscar archivos rápidamente</li>
              <li>Cmd/Ctrl + Shift + P para acceder a todos los comandos</li>
              <li>Cmd/Ctrl + B para mostrar/ocultar la barra lateral</li>
              <li>Usa el asistente de IA para explicar código o generar documentación</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 