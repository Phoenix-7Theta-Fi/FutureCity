import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-gray-800 font-bold text-xl hover:text-gray-900">
          Future City
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-800 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-900">
            About
          </Link>
          <Link href="/listings" className="text-gray-800 hover:text-gray-900">
            Listings
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-900">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
