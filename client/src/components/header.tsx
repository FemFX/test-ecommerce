import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center z-10">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Link href="/" className="font-bold text-xl">
          Test Ecommerce
        </Link>
        <div className="space-x-4 sm:block w-auto flex items-center justify-between"></div>
      </div>
    </div>
  );
};
export default Navbar;
