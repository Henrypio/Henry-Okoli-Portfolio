const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-4">The page you are looking for does not exist.</p>
      <a href="/" className="text-[#FFA75B] hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
