import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Heart, Share, ZoomIn } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set());

  const images = [
    {
      id: 1,
      src: gallery1,
      title: "Abstract Digital Art",
      description: "Modern geometric patterns with vibrant gradients",
      category: "Digital Art",
      likes: 42
    },
    {
      id: 2,
      src: gallery2,
      title: "Cyberpunk Cityscape",
      description: "Futuristic city with neon lights and glowing buildings",
      category: "Concept Art",
      likes: 67
    },
    {
      id: 3,
      src: gallery3,
      title: "Flowing Abstracts",
      description: "Organic liquid shapes in beautiful gradients",
      category: "Abstract",
      likes: 38
    }
  ];

  const toggleLike = (imageId: number) => {
    setLikedImages(prev => {
      const newSet = new Set(prev);
      if (newSet.has(imageId)) {
        newSet.delete(imageId);
      } else {
        newSet.add(imageId);
      }
      return newSet;
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
          Visual Gallery
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of stunning visuals, perfect for testing image loading, 
          interactions, and responsive design.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image) => (
          <Card key={image.id} className="glass-card group overflow-hidden">
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {image.category}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {image.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleLike(image.id)}
                    className={`${
                      likedImages.has(image.id) 
                        ? "text-red-500 hover:text-red-600" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${likedImages.has(image.id) ? "fill-current" : ""}`} />
                    <span className="ml-1 text-xs">
                      {image.likes + (likedImages.has(image.id) ? 1 : 0)}
                    </span>
                  </Button>
                </div>
                
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Gallery Features */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Gallery Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Responsive image grid layout</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Hover effects and animations</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Interactive like system</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Category filtering (ready to extend)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="glass-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Perfect for Testing</h3>
            <p className="text-muted-foreground mb-4">
              This gallery component is ideal for testing various scenarios:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Image loading and lazy loading</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>User interactions and state changes</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Responsive design across devices</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Gallery;