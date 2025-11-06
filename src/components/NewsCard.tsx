import { Calendar, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface NewsCardProps {
  title: string;
  category: string;
  image: string;
  date: string;
  views?: string;
  featured?: boolean;
}

export const NewsCard = ({ title, category, image, date, views, featured }: NewsCardProps) => {
  return (
    <Card 
      className={`group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300 cursor-pointer ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            featured ? "h-[300px] md:h-[400px]" : "h-[200px]"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Badge 
          className="absolute top-4 left-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
        >
          {category}
        </Badge>
      </div>
      
      <div className={`p-5 ${featured ? "md:p-6" : ""}`}>
        <h3 className={`font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-200 ${
          featured ? "text-xl md:text-2xl" : "text-base"
        }`}>
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          {views && (
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{views}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
