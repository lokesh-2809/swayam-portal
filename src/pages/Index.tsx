import { Navbar } from "@/components/Navbar";
import { HeroCarousel } from "@/components/HeroCarousel";
import { BreakingNews } from "@/components/BreakingNews";
import { NewsCard } from "@/components/NewsCard";
import { Footer } from "@/components/Footer";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, newsContent } from "@/lib/translations";

const categories = [
  {
    title: "टेक्नोलॉजी",
    news: [
      {
        title: "AI और मशीन लर्निंग का भारतीय शिक्षा में बढ़ता प्रभाव",
        category: "टेक्नोलॉजी",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
        date: "04-11-2025",
        views: "2.5K",
      },
      {
        title: "5G नेटवर्क से भारत में डिजिटल क्रांति की शुरुआत",
        category: "टेक्नोलॉजी",
        image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
        date: "04-11-2025",
        views: "1.8K",
      },
    ],
  },
  {
    title: "राष्ट्रीय",
    news: [
      {
        title: "ग्रामीण विकास योजनाओं में नई पहल, किसानों को मिलेगा सीधा लाभ",
        category: "राष्ट्रीय",
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=600&fit=crop",
        date: "04-11-2025",
        views: "3.2K",
      },
      {
        title: "शिक्षा नीति में बदलाव, व्यावसायिक प्रशिक्षण पर जोर",
        category: "राष्ट्रीय",
        image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
        date: "04-11-2025",
        views: "2.1K",
      },
    ],
  },
  {
    title: "स्वास्थ्य",
    news: [
      {
        title: "आयुर्वेद और आधुनिक चिकित्सा का संगम, नई स्वास्थ्य योजना",
        category: "स्वास्थ्य",
        image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
        date: "04-11-2025",
        views: "1.9K",
      },
      {
        title: "डिजिटल हेल्थ रिकॉर्ड से मरीजों को मिलेगी बेहतर सुविधा",
        category: "स्वास्थ्य",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
        date: "03-11-2025",
        views: "1.5K",
      },
    ],
  },
];

const trendingNews = [
  {
    title: "भारत में स्टार्टअप इकोसिस्टम तेजी से बढ़ रहा है",
    category: "व्यापार",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    date: "04-11-2025",
    views: "4.2K",
    featured: true,
  },
  {
    title: "क्रिकेट वर्ल्ड कप: भारत की टीम सेमीफाइनल में पहुंची",
    category: "खेल",
    image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
    date: "04-11-2025",
    views: "5.8K",
  },
  {
    title: "भारत में इलेक्ट्रिक वाहनों की मांग में तेजी",
    category: "ऑटोमोबाइल",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
    date: "03-11-2025",
    views: "3.1K",
  },
  {
    title: "बॉलीवुड में नई फिल्मों की धूम, बॉक्स ऑफिस पर तोड़ रही रिकॉर्ड",
    category: "मनोरंजन",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
    date: "03-11-2025",
    views: "4.5K",
  },
];

const Index = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const content = newsContent[language];

  const trendingNews = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      date: "04-11-2025",
      views: "4.2K",
    },
    {
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      date: "04-11-2025",
      views: "5.8K",
    },
    {
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=600&fit=crop",
      date: "03-11-2025",
      views: "3.1K",
    },
    {
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      date: "03-11-2025",
      views: "4.5K",
    },
  ];

  const categories = [
    {
      title: t.categories.technology,
      news: content.technology,
    },
    {
      title: t.categories.national,
      news: content.national,
    },
    {
      title: t.categories.health,
      news: content.health,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="animate-fade-in">
          <HeroCarousel />
        </section>

        {/* Breaking News */}
        <section className="animate-fade-in">
          <BreakingNews />
        </section>

        {/* Trending Section */}
        <section className="animate-fade-in-up">
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold text-foreground">{t.trending}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.trending.map((news, index) => (
              <NewsCard 
                key={index} 
                title={news.title}
                category={news.category}
                image={trendingNews[index].image}
                date={trendingNews[index].date}
                views={trendingNews[index].views}
                featured={index === 0}
              />
            ))}
          </div>
        </section>

        {/* Category Sections */}
        {categories.map((category, categoryIndex) => {
          const originalCategory = language === "hi" 
            ? ["technology", "national", "health"][categoryIndex]
            : ["technology", "national", "health"][categoryIndex];
          const images = {
            technology: [
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=600&fit=crop",
            ],
            national: [
              "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop",
            ],
            health: [
              "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
            ],
          };
          
          return (
            <section key={categoryIndex} className="animate-fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  {category.title}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent ml-4" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.news.map((news, newsIndex) => (
                  <NewsCard 
                    key={newsIndex} 
                    title={news.title}
                    category={news.category}
                    image={images[originalCategory as keyof typeof images][newsIndex]}
                    date="04-11-2025"
                    views={newsIndex === 0 ? "2.5K" : "1.8K"}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
