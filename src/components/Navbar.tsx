import { useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const languages = [
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "mr", name: "मराठी", flag: "🇮🇳" },
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  
  const currentLang = languages.find(lang => lang.code === language) || languages[0];
  
  const categories = [
    { label: t.categories.education, href: "#education" },
    { label: t.categories.news, href: "#news" },
    { label: t.categories.national, href: "#national" },
    { label: t.categories.international, href: "#international" },
    { label: t.categories.technology, href: "#technology" },
    { label: t.categories.health, href: "#health" },
    { label: t.categories.sports, href: "#sports" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary via-accent to-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-white/30">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white drop-shadow-md">
                {t.siteName}
              </span>
              <span className="text-xs text-white/80 -mt-1">{t.tagline}</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {categories.map((category) => (
              <a
                key={category.href}
                href={category.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
              >
                {category.label}
              </a>
            ))}
          </div>

          {/* Language Selector */}
          <div className="flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-white hover:bg-white/20 hover:text-white">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{currentLang.name}</span>
                  <span className="sm:hidden">{currentLang.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-popover/95 backdrop-blur-xl border-border/50">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20 hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in bg-white/10 backdrop-blur-md rounded-b-2xl">
            {categories.map((category) => (
              <a
                key={category.href}
                href={category.href}
                className="block px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white hover:bg-white/20 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                {category.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
