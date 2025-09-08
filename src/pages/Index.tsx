import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HandHeart, Users, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      icon: HandHeart,
      title: 'Easy Reporting',
      description: 'Submit civic issues in seconds with photo evidence and automatic location tagging.'
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Join thousands of citizens working together to improve their neighborhoods.'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Track the progress of your reports from submission to resolution.'
    },
    {
      icon: Shield,
      title: 'Trusted Platform',
      description: 'Secure, reliable platform trusted by municipal governments and citizens.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How Lok Samadhaan Works
            </h2>
            <p className="text-xl text-civic-gray max-w-3xl mx-auto">
              Our platform makes it simple for citizens to report issues and for governments to respond efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-civic transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-civic-blue to-civic-green rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-civic-gray">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-civic-blue to-civic-green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of citizens who are actively improving their communities. 
            Your report could be the catalyst for positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button 
                size="lg" 
                className="bg-white text-civic-blue hover:bg-white/90 hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Report an Issue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/map">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-civic-blue backdrop-blur-sm font-semibold"
              >
                Explore Issues Map
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl font-bold text-background">Lok Samadhaan</span>
          </div>
          <p className="text-background/70 mb-4">
            Empowering communities through technology and civic engagement.
          </p>
          <p className="text-sm text-background/50">
            © 2024 Lok Samadhaan. All rights reserved. Built for better communities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
