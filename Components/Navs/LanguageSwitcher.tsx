import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const { locale } = router;

  const switchLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
    setDropdownOpen(false); 
  };

  return (
    <div className="relative ml-3">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center p-2 text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-none"
        aria-expanded={dropdownOpen}
        aria-label="Language Switcher"
      >
        <MdLanguage className="h-6 w-6" />
      </button>
      {dropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg"
          role="menu"
          aria-orientation="vertical"
        >
          <button
            onClick={() => switchLanguage("en")}
            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              locale === "en" ? "font-semibold" : ""
            }`}
            role="menuitem"
          >
            English
          </button>
          <button
            onClick={() => switchLanguage("ar")}
            className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
              locale === "ar" ? "font-semibold" : ""
            }`}
            role="menuitem"
          >
            العربية
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
