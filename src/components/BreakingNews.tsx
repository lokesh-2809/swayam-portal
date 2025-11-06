import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { newsContent, translations } from "@/lib/translations";

export const BreakingNews = () => {
  const [currentNews, setCurrentNews] = useState(0);
  const { language } = useLanguage();
  const content = newsContent[language];
  const t = translations[language];
  const breakingNews = content.breaking;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % breakingNews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground py-3 px-4 rounded-2xl shadow-lg overflow-hidden">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 flex-shrink-0">
          <Flame className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm uppercase tracking-wide">{t.breakingNews}</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <div
            className="transition-all duration-500 ease-in-out"
            style={{
              transform: `translateY(-${currentNews * 100}%)`,
            }}
          >
            {breakingNews.map((news, index) => (
              <div
                key={index}
                className="h-6 flex items-center text-sm font-medium"
              >
                {news}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
