import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher"; 

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="px-3 py-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={toggleSidebar}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden"
            >
              <FiMenu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex ml-2 md:mr-2">
              <svg
                className="mr-1.5 h-5 w-5"
                width="23"
                height="23"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.1273 13.7072L5.84924 11.9853C1.48698 9.34499 2.21403 5.33669 3.12284 3.66258L8.50391 8.90015L13.885 3.66258C15.9513 8.13963 12.8805 11.0287 11.0868 11.9136L12.9523 13.7072C19.6248 8.68491 16.3961 1.94063 13.885 0.0751953L8.50391 5.45627L2.97934 0.0751953C-2.90398 5.81501 1.25741 12.2723 4.1273 13.7072Z"
                  fill="blueviolet"
                />
              </svg>
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Motiv.
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <LanguageSwitcher />
            <div className="flex items-center ml-3">
              <Image
                width={800}
                height={500}
                src="https://via.placeholder.com/150"
                alt="Avatar"
                className="rounded-full w-10 h-10"
                loading="eager" 
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
