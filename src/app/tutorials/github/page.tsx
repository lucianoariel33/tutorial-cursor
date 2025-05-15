export default function GitHubTutorial() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-900">
          Tutorial de GitHub
        </h1>

        <div className="space-y-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">¿Qué es GitHub?</h2>
            <p className="text-gray-700 mb-4">
              GitHub es una plataforma de desarrollo colaborativo que utiliza Git para el control de versiones. Es el lugar donde los desarrolladores almacenan, comparten y colaboran en proyectos de software.
            </p>
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Crear cuenta en GitHub →
            </a>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Configuración inicial</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Crear una cuenta:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Ve a github.com</li>
                  <li>Haz clic en "Sign up"</li>
                  <li>Completa el formulario de registro</li>
                </ul>
              </li>
              <li>
                <strong>Configurar Git en tu computadora:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Instala Git desde git-scm.com</li>
                  <li>Configura tu identidad:
                    <pre className="bg-gray-100 p-2 rounded mt-2">
                      git config --global user.name "Tu Nombre"
                      git config --global user.email "tu@email.com"
                    </pre>
                  </li>
                </ul>
              </li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Crear tu primer repositorio</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>En GitHub:</strong>
                <ul className="list-disc list-inside ml-6 mt-2">
                  <li>Haz clic en el botón "+" en la esquina superior derecha</li>
                  <li>Selecciona "New repository"</li>
                  <li>Dale un nombre a tu repositorio</li>
                  <li>Elige si será público o privado</li>
                  <li>Haz clic en "Create repository"</li>
                </ul>
              </li>
              <li>
                <strong>En tu computadora:</strong>
                <pre className="bg-gray-100 p-2 rounded mt-2">
                  git init
                  git add .
                  git commit -m "Primer commit"
                  git branch -M main
                  git remote add origin https://github.com/tu-usuario/tu-repositorio.git
                  git push -u origin main
                </pre>
              </li>
            </ol>
          </section>

          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Comandos Git básicos</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><code>git status</code> - Ver el estado de tu repositorio</li>
              <li><code>git add .</code> - Añadir todos los cambios</li>
              <li><code>git commit -m "mensaje"</code> - Guardar cambios</li>
              <li><code>git push</code> - Subir cambios a GitHub</li>
              <li><code>git pull</code> - Obtener cambios de GitHub</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
} 