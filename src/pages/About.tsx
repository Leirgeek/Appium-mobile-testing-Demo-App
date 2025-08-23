import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      bio: "Passionate about creating beautiful and intuitive user experiences with over 8 years in design.",
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      social: { github: "#", linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Chen",
      role: "Frontend Developer",
      bio: "Full-stack developer specializing in React and modern web technologies.",
      skills: ["React", "TypeScript", "Node.js", "GraphQL"],
      social: { github: "#", linkedin: "#", email: "#" }
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      bio: "Strategic thinker with a passion for building products that users love.",
      skills: ["Product Strategy", "User Analytics", "Agile", "Market Research"],
      social: { linkedin: "#", twitter: "#", email: "#" }
    }
  ];

  const stats = [
    { label: "Years Experience", value: "15+" },
    { label: "Projects Completed", value: "200+" },
    { label: "Happy Clients", value: "150+" },
    { label: "Team Members", value: "25+" }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
          About Our Team
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're a passionate team of designers, developers, and strategists dedicated to creating 
          exceptional digital experiences that make a difference.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="glass-card text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mission Statement */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="text-2xl">Our Mission</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">
            We believe that great design and technology should work seamlessly together to solve 
            real-world problems. Our mission is to create digital products that are not only 
            beautiful and functional but also accessible and inclusive.
          </p>
          <p>
            Through collaboration, innovation, and attention to detail, we help businesses and 
            organizations connect with their audiences in meaningful ways. Every project we take 
            on is an opportunity to push boundaries and create something extraordinary.
          </p>
        </CardContent>
      </Card>

      {/* Team Members */}
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="glass-card">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-hero-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary font-medium">
                  {member.role}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-center gap-3 pt-2">
                  {member.social.github && (
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={member.social.email} className="text-muted-foreground hover:text-primary transition-colors">
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;