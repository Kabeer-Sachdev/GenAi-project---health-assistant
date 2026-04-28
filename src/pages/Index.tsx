import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 flex items-center justify-center p-8">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Mental Health Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Supporting therapists and patients on their journey to wellness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Link to="/therapist" className="block group">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-500 to-purple-600 border-0 text-white">
              <Brain className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Therapist Dashboard</h2>
              <p className="text-white/90 mb-6">
                Access patient sessions, emotion analytics, and AI-powered SOAP notes
              </p>
              <Button className="bg-white text-purple-600 hover:bg-white/90">
                View Dashboard
              </Button>
            </Card>
          </Link>

          <Link to="/patient" className="block group">
            <Card className="p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-500 to-blue-500 border-0 text-white">
              <Heart className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Patient Dashboard</h2>
              <p className="text-white/90 mb-6">
                Track your growth journey, complete daily check-ins, and connect with support
              </p>
              <Button className="bg-white text-green-600 hover:bg-white/90">
                View Dashboard
              </Button>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
