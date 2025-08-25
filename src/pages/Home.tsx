import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const quickActions = [
    { title: "About Us", description: "Learn more about our team", href: "/about", icon: Target },
    { title: "Gallery", description: "Explore our visual showcase", href: "/gallery", icon: Sparkles },
    { title: "Contact", description: "Get in touch with us", href: "/contact", icon: Zap },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-hero-gradient p-12 text-center">
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Appium Demo App
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Explore our multi-screen demo application with beautiful navigation, 
            interactive components, and engaging visual content.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild className="hero-button">
              <Link to="/about">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <Link to="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        {quickActions.map((action, index) => (
          <Card key={index} className="glass-card group hover:scale-[1.02] cursor-pointer">
            <Link to={action.href}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <action.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{action.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {action.description}
                </CardDescription>
                <div className="flex items-center mt-3 text-primary group-hover:translate-x-1 transition-transform">
                  <span className="text-sm font-medium">Explore</span>
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>

      {/* Features Overview */}
      <div className="grid md:grid-cols-2 gap-8 mt-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">What's Inside</h2>
          <p className="text-muted-foreground text-lg">
            This demo showcases various UI components, navigation patterns, and interactive elements 
            perfect for testing and development.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Responsive sidebar navigation</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Interactive forms and settings</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Visual gallery with generated images</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>User profile management</span>
            </li>
          </ul>
        </div>
        <div className="bg-subtle-gradient rounded-xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Built for Testing</h3>
            <p className="text-muted-foreground">
              Perfect for visual regression testing, user interaction testing, and UI component validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;