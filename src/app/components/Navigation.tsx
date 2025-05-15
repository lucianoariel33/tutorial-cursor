import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-900">Tutorial Web</span>
            </Link>
          </div>
          
          <div className="flex space-x-4 items-center">
            <Link 
              href="/tutorials/cursor"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Cursor
            </Link>
            <Link 
              href="/tutorials/github"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              GitHub
            </Link>
            <Link 
              href="/tutorials/vercel"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Vercel
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 