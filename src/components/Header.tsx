import Link from "next/link";

const navigation = [
  { name: "About 緣起", href: "/about/" },
  { name: "Browse 瀏覽", href: "/events/" },
  { name: "Search 搜尋", href: "/search/" },
  { name: "Digest 週報", href: "/weekly-digest/" },
  { name: "Submit 登記活動", href: "/submit/" },
];

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between border-b border-white lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Event Database</span>
              <img
                className="h-20 w-auto"
                src="/images/FC-PrimaryLogo-Red-2x.png"
                alt="Fairbank Center logo"
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-red-800 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-red-800 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
