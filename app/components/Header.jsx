import Link from 'next/link';
import Button from './Button';

export default function Header() {

  return (
    <header className="w-full bg-white border-b border-gray-200 h-16 sticky top-0 z-50">
      <div className="w-full px-6 h-full flex items-center justify-between">
        
        {/* Left Side: Brand Name */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900 hover:opacity-80 transition-opacity">
            Laurus Design
          </Link>
        </div>

        {/* Right Side: Authentication Actions */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/login" 
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Log In
          </Link>
          <Link href="/signup">
            <Button text="Sign Up" />
          </Link>
        </div>

      </div>
    </header>
  );
}
