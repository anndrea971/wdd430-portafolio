import { cacheLife } from "next/cache";

// Server Component. This Next.js version enables Cache Components, which does not
// allow reading the current time while prerendering unless the result is cached.
// "use cache" lets the year be computed on the server and refreshed daily.
export default async function Footer() {
  "use cache";
  cacheLife("days");

  return (
    <footer className="mt-12 bg-gray-800 py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} | Andrea Gonzalez | All rights
          reserved
        </p>
      </div>
    </footer>
  );
}
