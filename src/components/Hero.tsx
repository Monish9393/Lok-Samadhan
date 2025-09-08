import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Camera, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/civic-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Citizens reporting civic issues" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-civic-blue/90 via-civic-blue/70 to-civic-green/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Report. Track. 
            <span className="block text-transparent bg-gradient-to-r from-white to-civic-green bg-clip-text">
              Resolve.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Empower your community by reporting civic issues instantly. Help local government respond faster to make your city better for everyone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
                View City Map
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Camera className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Photo Evidence</h3>
              <p className="text-white/80">Capture issues with photos and location data for accurate reporting.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Tracking</h3>
              <p className="text-white/80">Track your report status from submission to resolution.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-white mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Location Mapping</h3>
              <p className="text-white/80">Automatic location tagging helps authorities respond quickly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;