import Link from "next/link";

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl text-[#7C3AED] mb-4">404</h1>
        <p className="text-[#A1A1AA] text-lg mb-6">Page not found</p>
        <Link href="/" className="text-[#A78BFA] hover:underline">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;