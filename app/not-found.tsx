import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-40 pb-24 text-center bg-stone-50 px-4">
      <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">
        Page Not Found
      </h1>
      <p className="text-stone-600 mb-8">
        The experience or page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-block bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
